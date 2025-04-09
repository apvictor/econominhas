import { Response } from 'express';

import { MapErrors } from '../../../config/errors/map-errors';
import { UsersAuthRequest, UsersFormModel } from './model';
import { UsersRepository } from './repository';

const me = MapErrors(async (request: UsersAuthRequest, response: Response) => {
  const user = request.user;

  return response.json(user);
});

const update = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const user = request.user;
    const body = request.body as UsersFormModel;

    const userUpdated = await UsersRepository.update(user.id, { ...body });

    return response.json({ userUpdated, message: 'Atualizado com sucesso' });
  },
);

export const UsersController = {
  me,
  update,
};
