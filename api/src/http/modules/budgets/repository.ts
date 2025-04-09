import { Prisma } from '../../../shared/services/prisma';
import { BudgetsFormModel } from './model';
import { getAll } from './repository/get-all';

async function create(data: BudgetsFormModel) {
  const budget = await Prisma.budgets.create({ data });

  return { data: budget };
}

async function update(id: number, data: BudgetsFormModel) {
  const budget = await Prisma.budgets.update({
    data,
    where: { id },
  });

  return { data: budget };
}

async function destroy(id: number) {
  const budget = await Prisma.budgets.delete({ where: { id } });

  return { data: budget };
}

export const BudgetsRepository = {
  getAll,
  create,
  update,
  destroy,
};
