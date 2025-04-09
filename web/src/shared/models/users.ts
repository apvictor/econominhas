import { FeedbacksModel } from "./feedbacks"

export interface UsersModel {
  id: number
  cpf: string
  name: string
  email: string
  phone: string
  picture?: string
  feedbacks: FeedbacksModel[]
}
export interface UsersFormModel extends Omit<UsersModel, "id" | "picture" | "feedbacks"> { }


export interface UsersFormResponseModel {
  message: string;
  data: UsersModel;
}