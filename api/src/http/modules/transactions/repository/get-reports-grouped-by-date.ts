/* eslint-disable prettier/prettier */
import { Prisma } from '../../../../shared/services/prisma';

async function getTransactions(filters: {
  userId: number;
  paid?: boolean;
  startDate?: Date;
  endDate?: Date;
  take?: number;
  categoryId: number | undefined;
}) {
  return Prisma.transactions.findMany({
    where: {
      ...(filters.categoryId !== undefined && { categoryId: filters.categoryId }),
      ...(filters.startDate !== undefined && filters.endDate !== undefined && {
        date: { gte: filters.startDate, lte: filters.endDate },
      }),
    },
    include: { category: true, account: true },
    orderBy: { date: 'desc' },
  });
}

export async function getReportsGroupedByDate(
  userId: number,
  filters?: {
    month?: number;
    year?: number;
    categoryId?: number;
  },
) {
  let startDate: Date | undefined;
  let endDate: Date | undefined;

  if (filters?.month !== undefined && filters?.year !== undefined) {
    startDate = new Date(filters.year, filters.month, 1);
    endDate = new Date(filters.year, filters.month + 1, 1);
  }

  const transactionsTotal = await getTransactions({
    userId,
    categoryId: filters?.categoryId,
    endDate,
  });

  const transactions = await getTransactions({
    userId,
    categoryId: filters?.categoryId,
    endDate,
    startDate,
  });

  const total = transactionsTotal.reduce((balance, transaction) => {
    const value = parseFloat(transaction.value.toString());
    return transaction.category.type === 'INCOME'
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
    .filter((t) => t.category.type === 'INCOME')
    .reduce((sum, t) => sum + Number(t.value.toString()), 0);


  const expensesTotal = transactions
    .filter((t) => t.category.type === 'EXPENSE')
    .reduce((sum, t) => sum + Number(t.value.toString()), 0);


  const transactionsGrouped = Object.entries(grouped).map(
    ([date, transactions]) => ({ date, transactions }),
  );

  return {
    total,
    balance: (incomeTotal - expensesTotal).toFixed(2),
    income: {
      total: incomeTotal.toFixed(2),
    },
    expenses: {
      total: expensesTotal.toFixed(2),
    },
    transactions: transactionsGrouped,
  };
}
