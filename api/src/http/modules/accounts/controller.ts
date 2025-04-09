/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response } from 'express';

import { MapErrors } from '../../../config/errors/map-errors';
import { UsersAuthRequest } from '../users/model';
import { AccountsFormModel } from './model';
import { AccountsRepository } from './repository';

const getAll = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const user = request.user;

    const accounts = await AccountsRepository.findMany(user.id);

    return response.json(accounts);
  },
);

const create = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const user = request.user;
    const body = request.body as AccountsFormModel;

    const accounts = await AccountsRepository.create({
      ...body,
      userId: user.id,
    });

    return response.json({ accounts, message: 'Adicionado com sucesso' });
  },
);

const update = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const params = request.params;
    const id = Number(params.id);

    const body = request.body as AccountsFormModel;

    const categories = await AccountsRepository.update(id, { ...body });

    return response.json({ categories, message: 'Atualizado com sucesso' });
  },
);

const destroy = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const params = request.params;
    const id = Number(params.id);

    const categories = await AccountsRepository.destroy(id);

    return response.json({ categories, message: 'Deletado com sucesso' });
  },
);

export const AccountsController = {
  getAll,
  create,
  update,
  destroy,
};
