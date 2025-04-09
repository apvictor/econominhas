/* eslint-disable prettier/prettier */
import { Router } from 'express';

import { UsersAuth } from '../../../shared/middlewares/users-auth';
import { Validate } from './../../../shared/middlewares/validate';
import { AccountsController } from './controller';
import { AccountsValidation } from './validation';

export const AccountsRoute = Router();

AccountsRoute.get('/', UsersAuth, AccountsController.getAll);
AccountsRoute.post('/', UsersAuth, Validate(AccountsValidation.create), AccountsController.create);
AccountsRoute.put('/:id', UsersAuth, Validate(AccountsValidation.update), AccountsController.update);
AccountsRoute.delete('/:id', UsersAuth, Validate(AccountsValidation.destroy), AccountsController.destroy);