/* eslint-disable prettier/prettier */

import { CategoryType } from "@prisma/client";

export interface CategoriesModel {
  id: number;
  name: string;
  userId: number;
  icon: string;
  type: CategoryType;
}

export interface CategoriesFiltersModel {
  type?: CategoryType;
}

export interface CategoriesFormModel {
  name: string;
  icon: string;
  userId: number;
  type: CategoryType;
}