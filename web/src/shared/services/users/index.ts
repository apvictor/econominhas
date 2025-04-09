import { api } from "../api";
import { UsersFormModel, UsersFormResponseModel, UsersModel } from "@/shared/models/users";

async function me() {
  const data = await api.get<UsersModel>("/users/me");

  return data;
}

async function edit(params: UsersFormModel) {
  const { data } = await api.put<UsersFormResponseModel>("/users", params);

  return data;
}

export const UsersService = { me, edit }