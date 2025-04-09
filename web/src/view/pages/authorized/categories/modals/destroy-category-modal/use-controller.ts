import { CategoriesService } from "@/shared/services/categories";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useCategories } from "../../contexts";

export function useController() {
  const queryClient = useQueryClient();
  const { setOpenEditModal, setOpenDestroyModal, category } = useCategories();

  const mutation = useMutation({
    mutationFn: async () => {
      if (category) await CategoriesService.destroy(category.id)
        .then(({ message, data }) => {
          toast.success(message);
          return data;
        }).catch(({ response }) => toast.error(response.data.error));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      setOpenDestroyModal(false);
      setOpenEditModal(false);
    },
  });

  return { handleDestroy: mutation.mutateAsync }
}
