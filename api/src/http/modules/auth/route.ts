/* eslint-disable prettier/prettier */

import { Router } from 'express';

import { Validate } from '../../../shared/middlewares/validate';
import { AuthController } from './controller';
import { AuthValidation } from './validation';

export const AuthRoute = Router();

AuthRoute.post("/login/google", Validate(AuthValidation.loginGoogle), AuthController.loginGoogle);
