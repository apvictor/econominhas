import { Response } from 'express';

import { MapErrors } from '../../../config/errors/map-errors';
import { UsersAuthRequest } from '../users/model';
import { BudgetsFormModel } from './model';
import { BudgetsRepository } from './repository';

const getAll = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const user = request.user;

    const budgets = await BudgetsRepository.getAll(user.id);

    return response.json(budgets);
  },
);

const create = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const body = request.body as BudgetsFormModel;

    const budget = await BudgetsRepository.create(body);

    return response.json({ budget, message: 'Adicionado com sucesso' });
  },
);

const update = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const params = request.params;
    const id = Number(params.id);

    const body = request.body as BudgetsFormModel;

    const budget = await BudgetsRepository.update(id, { ...body });

    return response.json({ budget, message: 'Atualizado com sucesso' });
  },
);

const destroy = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const params = request.params;
    const id = Number(params.id);

    const budget = await BudgetsRepository.destroy(id);

    return response.json({ budget, message: 'Deletado com sucesso' });
  },
);

export const BudgetsController = {
  getAll,
  create,
  update,
  destroy,
};
