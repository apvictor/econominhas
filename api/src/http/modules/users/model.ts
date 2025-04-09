/* eslint-disable prettier/prettier */
import { Request } from 'express';

export interface UsersFilterModel {
  page: number;
  perPage: number;
  search: string | undefined;
  role: string | undefined;
}

export type UsersDTO = Omit<UsersModel, 'password' | 'googleId' | 'photo'>;

export interface UsersAuthRequest extends Request {
  user: UsersDTO;
}
export interface UsersModel {
  id: number;
  role: string;
  name: string;
  email: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UsersCreateModel
  extends Omit<UsersModel, 'id' | 'role' | 'createdAt' | 'updatedAt'> { }

export interface UsersFormModel
  extends Omit<UsersModel, 'id' | 'picture' | 'role' | 'createdAt' | 'updatedAt'> { }
