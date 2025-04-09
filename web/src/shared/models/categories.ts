import { icons } from "lucide-react";

export interface CategoriesModel {
  id: number;
  name: string;
  userId: number;
  icon: keyof typeof icons;
  type: "INCOME" | "EXPENSE" | "ACCOUNT" | string;
}

export interface CategoriesFiltersModel {
  type?: "INCOME" | "EXPENSE" | "ACCOUNT" | string;
}

export interface CategoriesFormModel extends Omit<CategoriesModel, "id" | "userId"> { }

export interface CategoriesFormResponseModel {
  message: string;
  data: CategoriesModel;
}