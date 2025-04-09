import { api } from "../api";
import { AccountsFormModel, AccountsFormResponseModel, AccountsModel } from "@/shared/models/accounts";

async function getAll() {
  const { data } = (await api.get<{ data: AccountsModel[] }>('/accounts')).data;

  return data;
}

async function add(params: AccountsFormModel) {
  const { data } = await api.post<AccountsFormResponseModel>("/accounts", params);

  return data;
}

async function edit(id: number, params: AccountsFormModel) {
  const { data } = await api.put<AccountsFormResponseModel>(`/accounts/${id}`, params);

  return data;
}


async function destroy(id: number) {
  const { data } = await api.delete<AccountsFormResponseModel>(`/accounts/${id}`);

  return data;
}

export const AccountsService = { getAll, add, edit, destroy }