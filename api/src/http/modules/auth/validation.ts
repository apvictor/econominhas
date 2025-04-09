import { object, string } from 'yup';

export const AuthValidation = {
  loginGoogle: object({
    body: object({
      name: string().required(),
      picture: string(),
      email: string().email().required(),
    }),
  }),
  register: object({
    body: object({
      name: string().required('Campo obrigatório'),
      email: string().email().required('Campo obrigatório'),
      password: string().min(8).required('Campo obrigatório'),
    }),
  }),
  login: object({
    body: object({
      email: string().email().required('Campo obrigatório'),
      password: string().min(8).required('Campo obrigatório'),
    }),
  }),
  forgetPassword: object({
    body: object({
      email: string().email().required('Campo obrigatório'),
    }),
  }),
  verifyCode: object({
    body: object({
      code: string().required('Campo obrigatório'),
    }),
  }),
  resetPassword: object({
    body: object({
      password: string().required('Campo obrigatório'),
      token: string().required('Campo obrigatório'),
    }),
  }),
};
