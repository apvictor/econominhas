/* eslint-disable prettier/prettier */

import { RecurrenceEnum } from "@prisma/client";

export interface TransactionsModel {
  id: number;
  accountId: number;
  categoryId: number;
  title: string;
  value: number;
  date: string;
  paid: boolean;
  recurrence: RecurrenceEnum
  totalInstallments?: number
}

export interface TransactionsFormModel extends Omit<TransactionsModel, "id"> { }

export interface TransactionsFiltersModel {
  take?: number
  paid?: boolean
  year?: number
  month?: number
  userId?: number
}
