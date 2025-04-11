import { Prisma } from '../../../../shared/services/prisma';
import { TransactionsFormModel } from '../model';

export async function create(data: TransactionsFormModel) {
  const transactions = await Prisma.transactions.create({ data });

  return { data: transactions };
}
