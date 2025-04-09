import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.categories.findMany({
    where: { userId: null },
  });

  if (categories.length <= 0) {
    const categories = await prisma.categories.createManyAndReturn({
      data: [
        { name: 'Alimentação', icon: 'UtensilsCrossed', type: 'EXPENSE' },
        { name: 'Carro', icon: 'CarFront', type: 'EXPENSE' },
        { name: 'Educação', icon: 'GraduationCap', type: 'EXPENSE' },
        { name: 'Familia', icon: 'Users', type: 'EXPENSE' },
        { name: 'Lazer', icon: 'TreePalm', type: 'EXPENSE' },
        { name: 'Moradia', icon: 'House', type: 'EXPENSE' },
        { name: 'Outros', icon: 'Blocks', type: 'EXPENSE' },
        { name: 'Pagamentos', icon: 'CircleDollarSign', type: 'EXPENSE' },
        { name: 'Saúde', icon: 'Stethoscope', type: 'EXPENSE' },
        { name: 'Serviços', icon: 'Wrench', type: 'EXPENSE' },
        { name: 'Transportes', icon: 'BusFront', type: 'EXPENSE' },
        { name: 'Vestuário', icon: 'Shirt', type: 'EXPENSE' },

        { name: 'Benefícios', icon: 'UtensilsCrossed', type: 'INCOME' },
        { name: 'Comissão', icon: 'Percent', type: 'INCOME' },
        { name: 'Outros', icon: 'Blocks', type: 'INCOME' },
        { name: 'Pagamentos', icon: 'CircleDollarSign', type: 'INCOME' },
        { name: 'Rendimentos', icon: 'Coins', type: 'INCOME' },
        { name: 'Salário', icon: 'DollarSign', type: 'INCOME' },
        { name: 'Serviços', icon: 'Wrench', type: 'INCOME' },
        { name: 'Vendas', icon: 'Store', type: 'INCOME' },

        { name: 'Carteira', icon: 'Wallet', type: 'ACCOUNT' },
        { name: 'Conta Corrente', icon: 'Landmark', type: 'ACCOUNT' },
        { name: 'Investimentos', icon: 'TrendingUp', type: 'ACCOUNT' },
        { name: 'Outros', icon: 'PiggyBank', type: 'ACCOUNT' },
      ],
    });

    console.info(categories);
  }
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async () => await prisma.$disconnect());
