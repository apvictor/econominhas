/* eslint-disable prettier/prettier */
export interface FeedbacksModel {
  id: number;
  value: boolean;
  userId: number;
}

export interface FeedbacksFormModel extends Omit<FeedbacksModel, "id"> { }
