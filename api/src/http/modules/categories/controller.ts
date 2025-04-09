/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response } from 'express';

import { MapErrors } from '../../../config/errors/map-errors';
import { UsersAuthRequest } from '../users/model';
import { CategoriesFiltersModel, CategoriesFormModel } from './model';
import { CategoriesRepository } from './repository';

const getAll = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const user = request.user;
    const filters = request.query as CategoriesFiltersModel;

    const categories = await CategoriesRepository.findMany(user.id, filters);

    return response.json(categories);
  },
);

const create = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const user = request.user;
    const body = request.body as CategoriesFormModel;

    const categories = await CategoriesRepository.create({
      ...body,
      userId: user.id,
    });

    return response.json({ categories, message: 'Adicionado com sucesso' });
  },
);

const update = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const params = request.params;
    const id = Number(params.id);

    const body = request.body as CategoriesFormModel;

    const categories = await CategoriesRepository.update(id, { ...body });

    return response.json({ categories, message: 'Atualizado com sucesso' });
  },
);

const destroy = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const params = request.params;
    const id = Number(params.id);

    const categories = await CategoriesRepository.destroy(id);

    return response.json({ categories, message: 'Deletado com sucesso' });
  },
);

export const CategoriesController = {
  getAll,
  create,
  update,
  destroy,
};
