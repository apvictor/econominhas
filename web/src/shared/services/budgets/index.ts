import { api } from "../api";
import { BudgetsFormModel, BudgetsFormResponseModel, BudgetsModel } from "@/shared/models/budgets";


export interface getAllBudgetsResponse {
  total: number;
  income: {
    total: number;
    forecast: number;
  };
  expenses: {
    total: number;
    forecast: number;
  };
  budgets: BudgetsModel[]
}

async function getAll() {
  const { data } = await api.get('/budgets');

  return data;
}

async function add(params: BudgetsFormModel) {
  const { data } = await api.post<BudgetsFormResponseModel>("/budgets", params);

  return data;
}

async function edit(id: number, params: BudgetsFormModel) {
  const { data } = await api.put<BudgetsFormResponseModel>(`/budgets/${id}`, params);

  return data;
}

async function destroy(id: number) {
  const { data } = await api.delete<BudgetsFormResponseModel>(`/budgets/${id}`);

  return data;
}

export const BudgetsService = {
  add,
  edit,
  destroy,
  getAll
}