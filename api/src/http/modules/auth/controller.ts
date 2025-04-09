import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../../../config';
import { MapErrors } from '../../../config/errors/map-errors';
import { UsersRepository } from '../users/repository';

export const loginGoogle = MapErrors(
  async (request: Request, response: Response) => {
    const userData = request.body;

    let user = await UsersRepository.getByEmail(userData.email);

    if (!user) {
      user = await UsersRepository.createGoogle({ ...userData });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: '7d',
    });

    return response.json({
      token,
      message: 'Usuário autenticado com sucesso!',
    });
  },
);

export const AuthController = { loginGoogle };
