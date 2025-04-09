/* eslint-disable prettier/prettier */

import { Router } from 'express';

import { UsersAuth } from '../../../shared/middlewares/users-auth';
import { Validate } from '../../../shared/middlewares/validate';
import { UsersController } from './controller';
import { UsersValidation } from './validation';

export const UsersRoute = Router();

UsersRoute.get('/me', UsersAuth, UsersController.me);
UsersRoute.put('/', UsersAuth, Validate(UsersValidation.update), UsersController.update);
