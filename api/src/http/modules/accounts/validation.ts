import { object, string } from 'yup';

export const AccountsValidation = {
  create: object({
    body: object({
      bank: string().required('Campo obrigatório'),
      name: string().required('Campo obrigatório'),
      categoryId: string().required('Campo obrigatório'),
    }),
  }),
  update: object({
    params: object({
      id: string().required('Campo obrigatório'),
    }),
    body: object({
      bank: string().required('Campo obrigatório'),
      name: string().required('Campo obrigatório'),
      categoryId: string().required('Campo obrigatório'),
    }),
  }),
  destroy: object({
    params: object({
      id: string().required('Campo obrigatório'),
    }),
  }),
};
