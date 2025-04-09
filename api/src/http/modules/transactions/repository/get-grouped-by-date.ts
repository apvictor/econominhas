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

export async function getGroupedByDate(
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

  const transactions = await getTransactions({ userId, startDate, endDate });

  const total = transactionsTotal.reduce((balance, transaction) => {
    const value = parseFloat(transaction.value.toString());
    return transaction.category.type === 'INCOME' && transaction.paid === true
      ? balance + value
      : balance - value;
  }, 0);

  const grouped = transactions.reduce<Record<string, typeof transactions>>(
    (acc, transaction) => {
      const date = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'short',
        timeZone: 'America/Sao_Paulo',
      })
        .format(transaction.date)
        .split('T')[0];

      if (!acc[date]) acc[date] = [];
      acc[date].push(transaction);
      return acc;
    },
    {},
  );

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

  const transactionsGrouped = Object.entries(grouped).map(
    ([date, transactions]) => ({ date, transactions }),
  );

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
    transactions: transactionsGrouped,
  };
}
