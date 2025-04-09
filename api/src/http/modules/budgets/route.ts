/* eslint-disable prettier/prettier */
import { Router } from 'express';

import { UsersAuth } from '../../../shared/middlewares/users-auth';
import { Validate } from './../../../shared/middlewares/validate';
import { BudgetsController } from './controller';
import { BudgetsValidation } from './validation';

export const BudgetsRoute = Router();

BudgetsRoute.get('/', UsersAuth, BudgetsController.getAll);
BudgetsRoute.post('/', UsersAuth, Validate(BudgetsValidation.create), BudgetsController.create);
BudgetsRoute.put('/:id', UsersAuth, Validate(BudgetsValidation.update), BudgetsController.update);
BudgetsRoute.delete('/:id', UsersAuth, Validate(BudgetsValidation.destroy), BudgetsController.destroy);