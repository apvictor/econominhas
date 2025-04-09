import { boolean, object } from 'yup';

export const FeedbacksValidation = {
  create: object({
    body: object({
      value: boolean().required('Campo obrigatório'),
    }),
  }),
};
