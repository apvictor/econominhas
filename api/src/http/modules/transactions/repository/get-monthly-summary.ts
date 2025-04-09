import { Prisma } from '../../../../shared/services/prisma';

async function getTransactions(filters: {
  userId: number;
  paid?: boolean;
  startDate?: Date;
  endDate?: Date;
  take?: number;
}) {
  return Prisma.transactions.findMany({
    where: {
      account: { userId: filters.userId },
      date: { gte: filters.startDate, lte: filters.endDate },
      paid: filters.paid,
    },
    include: {
      category: true,
      account: true,
      installments: {
        where: {
          date: { gte: filters.startDate, lte: filters.endDate },
        },
      },
    },
    orderBy: { date: 'desc' },
    ...(filters.take ? { take: filters.take } : {}),
  });
}

export async function getMonthlySummary(
  userId: number,
  month: number,
  year: number,
) {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 1);

  const transactionsTotal = await getTransactions({
    userId,
    endDate,
    paid: true,
  });

  const total = transactionsTotal.reduce((balance, transaction) => {
    const value = parseFloat(transaction.value.toString());
    return transaction.category.type === 'INCOME' && transaction.paid === true
      ? balance + value
      : balance - value;
  }, 0);

  const transactions = await getTransactions({ userId, startDate, endDate });

  const incomeTotal = transactions
    .filter((t) => t.category.type === 'INCOME' && t.paid === true)
    .reduce((sum, t) => sum + Number(t.value.toString()), 0);

  const incomeForecast = transactions
    .filter((t) => t.category.type === 'INCOME' && t.paid === false)
    .reduce((sum, t) => sum + Number(t.value.toString()), 0);

  const expensesTotal = transactions
    .filter((t) => t.category.type === 'EXPENSE' && t.paid === true)
    .reduce((sum, t) => sum + Number(t.value.toString()), 0);

  const expensesForecast = transactions
    .filter((t) => t.category.type === 'EXPENSE' && t.paid === false)
    .reduce((sum, t) => sum + Number(t.value.toString()), 0);

  const totalPendingTransactions = await Prisma.transactions.count({
    where: { paid: false, account: { userId } },
  });

  const lastTransactions = await getTransactions({
    userId,
    take: 5,
    startDate,
    endDate,
  });

  return {
    total,
    balance: (incomeTotal - expensesTotal).toFixed(2),
    balanceForecast: (incomeForecast - expensesForecast).toFixed(2),
    income: {
      total: incomeTotal.toFixed(2),
      forecast: incomeForecast.toFixed(2),
    },
    expenses: {
      total: expensesTotal.toFixed(2),
      forecast: expensesForecast.toFixed(2),
    },
    transactions: lastTransactions,
    totalPendingTransactions,
  };
}
