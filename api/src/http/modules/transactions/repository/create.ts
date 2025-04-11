import { Prisma } from '../../../../shared/services/prisma';
import { TransactionsFormModel } from '../model';

async function createTransactionWithInstallments(data: TransactionsFormModel) {
  return await Prisma.transactions.create({ data });
}

export async function create(data: TransactionsFormModel) {
  if (data.recurrence === 'INSTALLMENT' && data.totalInstallments) {
    return await createTransactionWithInstallments(data);
  }
  const transactions = await Prisma.transactions.create({ data });

  return { data: transactions };
}
