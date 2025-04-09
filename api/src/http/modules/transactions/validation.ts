import { object, string } from 'yup';

export const TransactionsValidation = {
  create: object({
    body: object({
      title: string().required('Campo obrigatório'),
      value: string().required('Campo obrigatório'),
      date: string().required('Campo obrigatório'),
      paid: string().required('Campo obrigatório'),
      accountId: string().required('Campo obrigatório'),
      categoryId: string().required('Campo obrigatório'),
    }),
  }),
  update: object({
    params: object({
      id: string().required('Campo obrigatório'),
    }),
    body: object({
      title: string().required('Campo obrigatório'),
      value: string().required('Campo obrigatório'),
      date: string().required('Campo obrigatório'),
      paid: string().required('Campo obrigatório'),
      accountId: string().required('Campo obrigatório'),
      categoryId: string().required('Campo obrigatório'),
    }),
  }),
  destroy: object({
    params: object({
      id: string().required('Campo obrigatório'),
    }),
  }),
};
