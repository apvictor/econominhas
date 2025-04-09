import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BudgetsService } from "@/shared/services/budgets";
import { useBudgets } from "../../contexts";

export function useController() {
  const { setOpenDestroyModal, budget } = useBudgets()

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      if (budget) await BudgetsService.destroy(budget.id)
        .then(({ message, data }) => {
          toast.success(message);
          return data;
        }).catch(({ response }) => toast.error(response.data.error));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budgets'] });
      setOpenDestroyModal(false);
    },
  });

  return { handleDestroy: mutation.mutateAsync }
}
