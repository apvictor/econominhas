import { Prisma } from '../../../../shared/services/prisma';

async function getBudgets(filters: {
  userId: number;
  startDate?: Date;
  endDate?: Date;
}) {
  return Prisma.budgets.findMany({
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

export async function getAll(userId: number) {
  const budgets = await getBudgets({ userId });

  const total = budgets.reduce((balance, transaction) => {
    const value = parseFloat(transaction.value.toString());
    return transaction.category.type === 'INCOME'
      ? balance + value
      : balance - value;
  }, 0);

  const incomeTotal = budgets
    .filter((t) => t.category.type === 'INCOME')
    .reduce((sum, t) => sum + Number(t.value.toString()), 0);

  const incomeForecast = budgets
    .filter((t) => t.category.type === 'INCOME')
    .reduce((sum, t) => sum + Number(t.value.toString()), 0);

  const expensesTotal = budgets
    .filter((t) => t.category.type === 'EXPENSE')
    .reduce((sum, t) => sum + Number(t.value.toString()), 0);

  const expensesForecast = budgets
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
    budgets,
  };
}
