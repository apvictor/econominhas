/* eslint-disable prettier/prettier */
import { Router } from 'express';

import { UsersAuth } from '../../../shared/middlewares/users-auth';
import { Validate } from './../../../shared/middlewares/validate';
import { TransactionsController } from './controller';
import { TransactionsValidation } from './validation';

export const TransactionsRoute = Router();

TransactionsRoute.get('/', TransactionsController.getAll);
TransactionsRoute.get('/pending', UsersAuth, TransactionsController.getAllPending);
TransactionsRoute.get('/date', UsersAuth, TransactionsController.getGroupedByDate);
TransactionsRoute.get('/reports', UsersAuth, TransactionsController.getReports);
TransactionsRoute.get('/summary', UsersAuth, TransactionsController.getMonthlySummary);
TransactionsRoute.get('/budgets', UsersAuth, TransactionsController.getBudgets);
TransactionsRoute.post('/', UsersAuth, Validate(TransactionsValidation.create), TransactionsController.create);
TransactionsRoute.put('/:id', UsersAuth, Validate(TransactionsValidation.update), TransactionsController.update);
TransactionsRoute.delete('/:id', UsersAuth, Validate(TransactionsValidation.destroy), TransactionsController.destroy);