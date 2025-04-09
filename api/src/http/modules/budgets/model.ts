/* eslint-disable prettier/prettier */

import { AccountsModel } from "../accounts/model";
import { CategoriesModel } from "../categories/model";


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