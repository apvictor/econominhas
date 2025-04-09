import { Request, Response } from 'express';

import { MapErrors } from '../../../config/errors/map-errors';
import { UsersAuthRequest } from '../users/model';
import { TransactionsFiltersModel, TransactionsFormModel } from './model';
import { TransactionsRepository } from './repository';

const getAll = MapErrors(async (request: Request, response: Response) => {
  const filters = request.query as TransactionsFiltersModel;

  const transactions = await TransactionsRepository.findMany(filters);

  return response.json(transactions);
});

const getAllPending = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const user = request.user;
    const filters = request.query as TransactionsFiltersModel;

    const transactions = await TransactionsRepository.findManyPending(
      user.id,
      filters,
    );

    return response.json(transactions);
  },
);

const getGroupedByDate = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const user = request.user;
    const { month, year } = request.query;

    const transactions = await TransactionsRepository.getGroupedByDate(
      user.id,
      Number(month),
      Number(year),
    );

    return response.json(transactions);
  },
);

const getReports = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const user = request.user;
    const { categoryId, ...filters } = request.query;

    const transactions = await TransactionsRepository.getReportsGroupedByDate(
      user.id,
      { ...filters, categoryId: categoryId ? Number(categoryId) : undefined },
    );

    return response.json(transactions);
  },
);

const getMonthlySummary = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const user = request.user;
    const { month, year } = request.query;

    const summary = await TransactionsRepository.getMonthlySummary(
      user.id,
      Number(month),
      Number(year),
    );

    return response.json(summary);
  },
);

const getBudgets = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const user = request.user;

    const budgets = await TransactionsRepository.getBudgets(user.id);

    return response.json(budgets);
  },
);

const create = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const body = request.body as TransactionsFormModel;

    const transactions = await TransactionsRepository.create(body);

    return response.json({ transactions, message: 'Adicionado com sucesso' });
  },
);

const update = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const params = request.params;
    const id = Number(params.id);

    const body = request.body as TransactionsFormModel;

    const transactions = await TransactionsRepository.update(id, { ...body });

    return response.json({ transactions, message: 'Atualizado com sucesso' });
  },
);

const destroy = MapErrors(
  async (request: UsersAuthRequest, response: Response) => {
    const params = request.params;
    const id = Number(params.id);

    const transactions = await TransactionsRepository.destroy(id);

    return response.json({ transactions, message: 'Deletado com sucesso' });
  },
);

export const TransactionsController = {
  getAll,
  getBudgets,
  getAllPending,
  getGroupedByDate,
  getMonthlySummary,
  getReports,
  create,
  update,
  destroy,
};
