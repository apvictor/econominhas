import { api } from "../api";
import { FeedbacksFormModel, FeedbacksFormResponseModel } from "@/shared/models/feedbacks";

async function add(params: FeedbacksFormModel) {
  const { data } = await api.post<FeedbacksFormResponseModel>("/feedbacks", params);

  return data;
}

async function getByUser() {
  const { data } = await api.get<FeedbacksFormResponseModel | null>("/feedbacks/me");
  return data;
}

export const FeedbacksService = { add, getByUser }