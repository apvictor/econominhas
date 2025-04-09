import toast from "react-hot-toast";

import { AuthService } from "@/shared/services/auth";
import { useAuth } from "@/shared/contexts/auth-context";
import { GoogleService } from "@/shared/services/google";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";

export function useController() {
  const { signIn } = useAuth();

  const mutation = useMutation({
    mutationFn: async (values: {
      name: string;
      email: string;
      picture: string;
    }) => {
      await AuthService.loginGoogle(values)
        .then(({ token }) => {
          signIn(token);
          return;
        }).catch(({ response }) => toast.error(response.data.error));
    }
  });

  const handleLoginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse: TokenResponse) => {
      try {
        const { access_token } = tokenResponse;
        const values = await GoogleService.getUser(access_token);
        mutation.mutateAsync(values)
      } catch {
        setTimeout(() => toast.error("Falha ao autenticar com o google!"), 2000);
      }
    },
  })
  return { handleLoginGoogle, isPending: mutation.isPending };
}