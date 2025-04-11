/* eslint-disable prettier/prettier */


export interface TransactionsModel {
  id: number;
  accountId: number;
  categoryId: number;
  title: string;
  value: number;
  date: string;
  paid: boolean;
}

export interface TransactionsFormModel extends Omit<TransactionsModel, "id"> { }

export interface TransactionsFiltersModel {
  take?: number
  paid?: boolean
  year?: number
  month?: number
  userId?: number
}
