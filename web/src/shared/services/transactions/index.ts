import { TransactionsDateModel, TransactionsFiltersModel, TransactionsFormModel, TransactionsFormResponseModel, TransactionsModel } from "@/shared/models/transactions";
import { api } from "../api";

async function getAll(filters?: TransactionsFiltersModel) {
  const { data } = (await api.get<{ data: TransactionsModel[] }>('/transactions',
    { params: filters })).data;

  return data;
}

async function getAllPending(filters?: TransactionsFiltersModel) {
  const { data } = (await api.get<{ data: TransactionsModel[] }>('/transactions/pending', { params: filters })).data;

  return data;
}

export interface getGroupedByDateResponse {
  transactions: TransactionsDateModel[]
  total: number;
  balance: number;
  balanceForecast: number;
  month: number;
  income: {
    total: number;
    forecast: number;
  };
  expenses: {
    total: number;
    forecast: number;
  };
}
async function getGroupedByDate(filters: TransactionsFiltersModel) {
  const { data } = await api.get<getGroupedByDateResponse>('/transactions/date', { params: filters });

  return data;
}


export interface getReportsResponse {
  transactions: TransactionsDateModel[]
  total: number;
  balance: number;
  balanceForecast: number;
  month: number;
  income: {
    total: number;
    forecast: number;
  };
  expenses: {
    total: number;
    forecast: number;
  };
}
async function getReports(filters?: TransactionsFiltersModel) {
  const { data } = await api.get<getReportsResponse>('/transactions/reports', { params: filters });

  return data;
}


export interface getMonthlySummaryResponse {
  transactions: TransactionsModel[]
  totalPendingTransactions: number;
  total: number;
  balance: number;
  balanceForecast: number;
  month: number;
  income: {
    total: number;
    forecast: number;
  };
  expenses: {
    total: number;
    forecast: number;
  };
}
async function getMonthlySummary(filters: TransactionsFiltersModel) {
  const { data } = await api.get<getMonthlySummaryResponse>('/transactions/summary', { params: filters });

  return data;
}


export interface getBudgetsResponse {
  total: number;
  income: {
    total: number;
    forecast: number;
  };
  expenses: {
    total: number;
    forecast: number;
  };
  transactions: TransactionsModel[]
}
async function getBudgets() {
  const { data } = await api.get<getBudgetsResponse>('/transactions/budgets');

  return data;
}

async function add(params: TransactionsFormModel) {
  const { data } = await api.post<TransactionsFormResponseModel>("/transactions", params);

  return data;
}

async function edit(id: number, params: TransactionsFormModel) {
  const { data } = await api.put<TransactionsFormResponseModel>(`/transactions/${id}`, params);

  return data;
}

async function destroy(id: number) {
  const { data } = await api.delete<TransactionsFormResponseModel>(`/transactions/${id}`);

  return data;
}

export const TransactionsService = {
  getAll,
  getBudgets,
  getReports,
  getAllPending,
  getGroupedByDate,
  add,
  edit,
  destroy,
  getMonthlySummary
}
