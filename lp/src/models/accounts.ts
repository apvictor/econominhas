import { CategoriesModel } from "./categories";

export interface AccountsModel {
  id: number;
  name: string;
  bank: string;
  userId: number;
  category: CategoriesModel
  categoryId: number;
  total?: number;
}

export interface AccountsFormModel extends Omit<AccountsModel, "id" | "userId" | "category"> { }

export interface AccountsFormResponseModel {
  message: string;
  data: AccountsModel;
}