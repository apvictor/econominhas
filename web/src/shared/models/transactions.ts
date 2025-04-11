import { AccountsModel } from "./accounts";
import { CategoriesModel } from "./categories";

export interface TransactionsModel {
  id: number;
  accountId: number;
  account: AccountsModel
  categoryId: number;
  category: CategoriesModel;
  title: string;
  value: number;
  date?: string;
  paid: boolean;
}
export interface TransactionsDateModel {
  transactions: TransactionsModel[]
  date: string
}

export interface TransactionsFiltersModel {
  take?: number
  paid?: number
  month?: number
  year?: number
  categoryId?: number
}

export interface TransactionsFormModel extends Omit<TransactionsModel, "id" | "account" | "category" | "currentInstallment"> { }


export interface TransactionsFormResponseModel {
  message: string;
  data: TransactionsModel;
}