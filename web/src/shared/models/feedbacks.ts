export interface FeedbacksModel {
  id: number;
  value: boolean;
}

export interface FeedbacksFormModel extends Omit<FeedbacksModel, "id"> { }

export interface FeedbacksFormResponseModel {
  message: string;
  data: FeedbacksModel;
}