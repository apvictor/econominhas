/* eslint-disable prettier/prettier */
import { Router } from 'express';

import { UsersAuth } from '../../../shared/middlewares/users-auth';
import { Validate } from './../../../shared/middlewares/validate';
import { FeedbacksController } from './controller';
import { FeedbacksValidation } from './validation';

export const FeedbacksRoute = Router();

FeedbacksRoute.post('/', UsersAuth, Validate(FeedbacksValidation.create), FeedbacksController.create);
