import { Response } from 'express';

import { MapErrors } from '../../../config/errors/map-errors';
import { UsersAuthRequest } from '../users/model';
import { FeedbacksFormModel } from './model';
import { FeedbacksRepository } from './repository';

const create = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const user = request.user;
    const body = request.body as FeedbacksFormModel;

    const feedbacks = await FeedbacksRepository.create({
      ...body,
      userId: user.id,
    });

    return response.json({ feedbacks, message: 'Obrigado por seu feedback!' });
  },
);

const me = MapErrors(async (request: UsersAuthRequest, response: Response) => {
  const user = request.user;

  const feedback = await FeedbacksRepository.getByUserId(user.id);

  return response.json(feedback);
});

export const FeedbacksController = {
  create,
  me,
};
