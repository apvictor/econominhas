import { api } from "../api";

interface Params {
  name: string;
  email: string;
  picture: string;
}

interface Response {
  token: string;
  message: string;
}

export async function loginGoogle(params: Params) {
  const { data } = await api.post<Response>('/auth/login/google', params);

  return data;
}