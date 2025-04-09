/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { JWT_SECRET } from '../../config';
import { ApiError } from '../../config/errors/api-error';
import { MapErrors } from '../../config/errors/map-errors';
import { UsersAuthRequest } from '../../http/modules/users/model';
import { UsersRepository } from '../../http/modules/users/repository';

export const UsersAuth = MapErrors(
  async (request: UsersAuthRequest, _: Response, next: NextFunction) => {
    // #swagger.auto = false

    const { authorization } = request.headers;

    if (!authorization) throw new ApiError(400, 'Token não fornecido');

    const token = authorization.replace('Bearer ', '');

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload & {
      userId: number;
    };

    if (!decoded || !decoded.userId) throw new ApiError(401, 'Token inválido');

    const { password, ...user } = await UsersRepository.getById(decoded.userId);

    request.user = user;

    next();
  },
);
