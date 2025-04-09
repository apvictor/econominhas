import { Prisma } from '../../../../shared/services/prisma';
import { TransactionsFormModel } from '../model';

async function createTransactionWithInstallments(data: TransactionsFormModel) {
  return await Prisma.transactions.create({
    data: { ...data, installments: { create: generateInstallments(data) } },
    include: { installments: true },
  });
}

function generateInstallments(data: TransactionsFormModel) {
  const installmentValue = data.value / data.totalInstallments!;
  const installments = [];

  for (let i = 0; i < data.totalInstallments!; i++) {
    const installmentDate = new Date(data.date);
    installmentDate.setMonth(installmentDate.getMonth() + i);

    installments.push({
      currentInstallment: i + 1,
      value: installmentValue,
      date: installmentDate,
      paid: false,
    });
  }

  return installments;
}

export async function create(data: TransactionsFormModel) {
  if (data.recurrence === 'INSTALLMENT' && data.totalInstallments) {
    return await createTransactionWithInstallments(data);
  }
  const transactions = await Prisma.transactions.create({ data });

  return { data: transactions };
}
