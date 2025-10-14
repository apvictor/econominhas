import { Prisma } from '../../../shared/services/prisma';
import { FeedbacksFormModel } from './model';

async function create(data: FeedbacksFormModel) {
  const feedbacks = await Prisma.feedbacks.create({ data });

  return { data: feedbacks };
}

async function getByUserId(userId: number) {
  const feedback = await Prisma.feedbacks.findUnique({ where: { userId } });

  return { data: feedback };
}

export const FeedbacksRepository = { create, getByUserId };
