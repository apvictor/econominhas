import { object, string } from 'yup';

export const CategoriesValidation = {
  create: object({
    body: object({
      type: string().required('Campo obrigatório'),
      name: string().required('Campo obrigatório'),
      icon: string().required('Campo obrigatório'),
    }),
  }),
  update: object({
    params: object({
      id: string().required('Campo obrigatório'),
    }),
    body: object({
      type: string().required('Campo obrigatório'),
      name: string().required('Campo obrigatório'),
      icon: string().required('Campo obrigatório'),
    }),
  }),
  destroy: object({
    params: object({
      id: string().required('Campo obrigatório'),
    }),
  }),
};
