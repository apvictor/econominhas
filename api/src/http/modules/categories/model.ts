/* eslint-disable prettier/prettier */

export interface CategoriesModel {
  id: number;
  name: string;
  userId: number;
  icon: string;
  type: string;
}

export interface CategoriesFiltersModel {
  type?: string;
}

export interface CategoriesFormModel {
  name: string;
  icon: string;
  userId: number;
  type: string;
}