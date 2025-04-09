import { Prisma } from '../../../shared/services/prisma';
import { FeedbacksFormModel } from './model';

async function create(data: FeedbacksFormModel) {
  const feedbacks = await Prisma.feedbacks.create({ data });

  return { data: feedbacks };
}

export const FeedbacksRepository = { create };
