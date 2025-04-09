/* eslint-disable prettier/prettier */
import { Router } from 'express';

import { UsersAuth } from '../../../shared/middlewares/users-auth';
import { Validate } from './../../../shared/middlewares/validate';
import { CategoriesController } from './controller';
import { CategoriesValidation } from './validation';

export const CategoriesRoute = Router();

CategoriesRoute.get('/', UsersAuth, CategoriesController.getAll);
CategoriesRoute.post('/', UsersAuth, Validate(CategoriesValidation.create), CategoriesController.create);
CategoriesRoute.put('/:id', UsersAuth, Validate(CategoriesValidation.update), CategoriesController.update);
CategoriesRoute.delete('/:id', UsersAuth, Validate(CategoriesValidation.destroy), CategoriesController.destroy);
