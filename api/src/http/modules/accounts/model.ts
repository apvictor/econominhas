/* eslint-disable prettier/prettier */

export interface AccountsModel {
  id: number;
  name: string;
  bank: string;
  userId: number;
  categoryId: number;
}

export interface AccountsFormModel extends Omit<AccountsModel, "id"> { }