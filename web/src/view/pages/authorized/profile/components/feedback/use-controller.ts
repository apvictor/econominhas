import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FeedbacksFormModel } from "@/shared/models/feedbacks";
import { FeedbacksService } from "@/shared/services/feedbacks";

export function useController() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (values: FeedbacksFormModel) => {
      await FeedbacksService.add(values)
        .then(({ message, data }) => {
          toast.success(message);
          return data;
        }).catch(({ response }) => toast.error(response.data.error));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] });
    },
  });

  return { handleFeedback: mutation.mutateAsync }
}
