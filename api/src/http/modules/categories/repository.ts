import { Prisma } from '../../../shared/services/prisma';
import { CategoriesFiltersModel, CategoriesFormModel } from './model';

async function findMany(userId: number, filters: CategoriesFiltersModel) {
  const categories = await Prisma.categories.findMany({
    where: { OR: [{ userId }, { userId: null }], ...filters },
    orderBy: { name: 'asc' },
  });

  return { data: categories };
}

async function create(data: CategoriesFormModel) {
  const categories = await Prisma.categories.create({ data });

  return { data: categories };
}

async function update(id: number, data: CategoriesFormModel) {
  const categories = await Prisma.categories.update({ data, where: { id } });

  return { data: categories };
}

async function destroy(id: number) {
  const categories = await Prisma.categories.delete({ where: { id } });

  return { data: categories };
}

export const CategoriesRepository = { findMany, create, update, destroy };
