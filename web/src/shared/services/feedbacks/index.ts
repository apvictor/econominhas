import { api } from "../api";
import { FeedbacksFormModel, FeedbacksFormResponseModel } from "@/shared/models/feedbacks";

async function add(params: FeedbacksFormModel) {
  const { data } = await api.post<FeedbacksFormResponseModel>("/feedbacks", params);

  return data;
}

export const FeedbacksService = { add }