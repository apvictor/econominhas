import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { TransactionsService } from "@/shared/services/transactions";
import { useGlobal } from "@/shared/contexts/global-context";
import { useNavigate } from "react-router-dom";

export function useController() {
  const { setOpenTransactionDestroyModal, transaction } = useGlobal()

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async () => {
      if (transaction) await TransactionsService.destroy(transaction.id)
        .then(({ message, data }) => {
          toast.success(message);
          return data;
        }).catch(({ response }) => toast.error(response.data.error));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      setOpenTransactionDestroyModal(false);
      navigate(-1);
    },
  });

  return { handleDestroy: mutation.mutateAsync }
}
