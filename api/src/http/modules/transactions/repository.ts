import { Prisma } from '../../../shared/services/prisma';
import { TransactionsFiltersModel, TransactionsFormModel } from './model';
import { create } from './repository/create';
import { getBudgets } from './repository/get-budgets';
import { getGroupedByDate } from './repository/get-grouped-by-date';
import { getMonthlySummary } from './repository/get-monthly-summary';
import { getReportsGroupedByDate } from './repository/get-reports-grouped-by-date';

async function findMany(filters: TransactionsFiltersModel) {
  const paid = filters.paid ? Boolean(Number(filters.paid)) : undefined;
  const take = filters.take ? Number(filters.take) : undefined;

  // const gte = new Date(Number(filters.year), Number(filters.month), 1);
  // const lt = new Date(Number(filters.year), Number(filters.month) + 1, 1);

  const transactions = await Prisma.transactions.findMany({
    where: {
      account: { userId: filters.userId ?? undefined },
      paid,
      // date: { gte, lt },
    },
    include: { category: true, account: true },
    take,
    orderBy: { date: 'desc' },
  });

  return transactions;
}

async function findManyPending(
  userId: number,
  filters: TransactionsFiltersModel,
) {
  const paid = filters.paid ? Boolean(Number(filters.paid)) : undefined;
  const take = filters.take ? Number(filters.take) : undefined;

  const transactions = await Prisma.transactions.findMany({
    where: {
      account: { userId },
      paid,
    },
    include: { category: true, account: true },
    take,
    orderBy: { date: 'desc' },
  });

  return { data: transactions };
}

async function update(id: number, data: TransactionsFormModel) {
  const transactions = await Prisma.transactions.update({
    data,
    where: { id },
  });

  return { data: transactions };
}

async function destroy(id: number) {
  const transactions = await Prisma.transactions.delete({ where: { id } });

  return { data: transactions };
}

export const TransactionsRepository = {
  create,
  update,
  destroy,
  findMany,
  getBudgets,
  findManyPending,
  getGroupedByDate,
  getMonthlySummary,
  getReportsGroupedByDate,
};
