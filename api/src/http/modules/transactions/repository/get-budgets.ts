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
    },
    include: {
      category: true,
      account: true,
    },
    orderBy: { date: 'desc' },
  });
}

export async function getBudgets(userId: number) {
  const transactionsTotal = await getTransactions({ userId });

  const total = transactionsTotal.reduce((balance, transaction) => {
    const value = parseFloat(transaction.value.toString());
    return transaction.category.type === 'INCOME'
      ? balance + value
      : balance - value;
  }, 0);

  const transactions = await getTransactions({ userId });

  const incomeTotal = transactions
    .filter((t) => t.category.type === 'INCOME')
    .reduce((sum, t) => sum + Number(t.value.toString()), 0);

  const incomeForecast = transactions
    .filter((t) => t.category.type === 'INCOME')
    .reduce((sum, t) => sum + Number(t.value.toString()), 0);

  const expensesTotal = transactions
    .filter((t) => t.category.type === 'EXPENSE')
    .reduce((sum, t) => sum + Number(t.value.toString()), 0);

  const expensesForecast = transactions
    .filter((t) => t.category.type === 'EXPENSE')
    .reduce((sum, t) => sum + Number(t.value.toString()), 0);

  return {
    total,
    income: {
      total: incomeTotal.toFixed(2),
      forecast: incomeForecast.toFixed(2),
    },
    expenses: {
      total: expensesTotal.toFixed(2),
      forecast: expensesForecast.toFixed(2),
    },
    transactions: transactions,
  };
}
