import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAccounts } from "../../contexts";
import { AccountsService } from "@/shared/services/accounts";

export function useController() {
  const queryClient = useQueryClient();
  const { setOpenEditModal, setOpenDestroyModal, account } = useAccounts();

  const mutation = useMutation({
    mutationFn: async () => {
      if (account) await AccountsService.destroy(account.id)
        .then(({ message, data }) => {
          toast.success(message);
          return data;
        }).catch(({ response }) => toast.error(response.data.error));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      setOpenDestroyModal(false);
      setOpenEditModal(false);
    },
  });

  return { handleDestroy: mutation.mutateAsync }
}
