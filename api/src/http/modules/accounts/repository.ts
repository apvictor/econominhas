import { Prisma } from '../../../shared/services/prisma';
import { AccountsFormModel } from './model';

async function findMany(userId: number) {
  const now = new Date();
  const lt = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  const accounts = await Prisma.accounts.findMany({
    where: { userId },
    include: {
      category: true,
      transactions: {
        where: { paid: true, date: { lt } },
        select: { value: true, category: { select: { type: true } } },
      },
    },
    orderBy: { name: 'asc' },
  });

  const accountsWithTotal = accounts.map((account) => {
    const total = account.transactions.reduce(
      (sum, { value, category }) =>
        category.type === 'INCOME' ? sum + Number(value) : sum - Number(value),
      0,
    );

    return {
      ...account,
      total,
    };
  });

  return { data: accountsWithTotal };
}

async function create(data: AccountsFormModel) {
  const account = await Prisma.accounts.create({ data });

  return { data: account };
}

async function update(id: number, data: AccountsFormModel) {
  const account = await Prisma.accounts.update({ data, where: { id } });

  return { data: account };
}

async function destroy(id: number) {
  const account = await Prisma.accounts.delete({ where: { id } });

  return { data: account };
}

export const AccountsRepository = { findMany, create, update, destroy };
