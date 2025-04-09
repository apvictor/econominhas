/* eslint-disable @typescript-eslint/no-unused-vars */

import { ApiError } from '../../../config/errors/api-error';
import { Prisma } from '../../../shared/services/prisma';
import { UsersCreateModel, UsersFormModel } from './model';

async function create(user: UsersCreateModel) {
  const userExist = await getByEmail(user.email);

  if (userExist) throw new ApiError(400, 'E-mail registrado em outra conta');

  const { password, ...rest } = await Prisma.users.create({
    data: user,
  });

  return rest;
}

async function createGoogle(data: UsersCreateModel) {
  const user = await Prisma.users.create({ data });

  return user;
}

async function getByEmail(email: string) {
  const data = await Prisma.users.findUnique({ where: { email } });

  return data;
}

async function getAll() {
  const data = await Prisma.users.findMany();

  return { data };
}

async function getById(id: number) {
  const data = await Prisma.users.findUnique({
    where: { id },
    include: { feedbacks: true },
  });

  if (!data) throw new ApiError(400, 'Não foi possível encontrar users.id');

  return data;
}

async function update(id: number, data: UsersFormModel) {
  const users = await Prisma.users.update({
    where: { id },
    data,
  });

  return users.id;
}

export const UsersRepository = {
  createGoogle,
  create,
  getByEmail,
  getAll,
  getById,
  update,
};
