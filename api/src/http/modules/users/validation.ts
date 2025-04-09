import { object, string } from 'yup';

export const UsersValidation = {
  update: object({
    body: object({
      name: string().required('Campo obrigatório'),
      email: string().required('Campo obrigatório'),
      cpf: string(),
      phone: string(),
    }),
  }),
};
