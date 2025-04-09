import { CategoriesFiltersModel, CategoriesFormModel, CategoriesFormResponseModel } from "@/shared/models/categories";
import { api } from "../api";

async function getAll(filters?: CategoriesFiltersModel) {
  const { data } = (await api.get('/categories', { params: { ...filters } })).data;

  return data;
}

async function add(params: CategoriesFormModel) {
  const { data } = await api.post<CategoriesFormResponseModel>("/categories", params);

  return data;
}

async function edit(id: number, params: CategoriesFormModel) {
  const { data } = await api.put<CategoriesFormResponseModel>(`/categories/${id}`, params);

  return data;
}

async function destroy(id: number) {
  const { data } = await api.delete<CategoriesFormResponseModel>(`/categories/${id}`);

  return data;
}

export const CategoriesService = { getAll, add, edit, destroy }