import { AccountsModel } from "./accounts";
import { CategoriesModel } from "./categories";
import { InstallmentsModel } from "./installments";

export interface TransactionsModel {
  id: number;
  accountId: number;
  account: AccountsModel
  categoryId: number;
  category: CategoriesModel;
  installments?: InstallmentsModel[];
  title: string;
  value: number;
  date?: string;
  paid: boolean;
  recurrence: "NONRECURRING" | "INSTALLMENT" | "FIXEDMONTHLY" | string
  currentInstallment?: number
  totalInstallments?: number
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