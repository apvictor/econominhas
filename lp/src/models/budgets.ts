import { AccountsModel } from "./accounts";
import { CategoriesModel } from "./categories";

export interface BudgetsModel {
  id: number;
  accountId: number;
  account: AccountsModel
  categoryId: number;
  category: CategoriesModel;
  title: string;
  value: number;
  date?: string;
}
export interface BudgetsDateModel {
  budgets: BudgetsModel[]
  date: string
}

export interface BudgetsFormModel extends Omit<BudgetsModel, "id" | "account" | "category"> { }


export interface BudgetsFormResponseModel {
  message: string;
  data: BudgetsModel;
}