import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FeedbacksFormModel } from "@/shared/models/feedbacks";
import { FeedbacksService } from "@/shared/services/feedbacks";

export function useController() {
  const queryClient = useQueryClient();


  const feedbackQuery = useQuery({
    queryKey: ["feedback"],
    queryFn: async () => (await FeedbacksService.getByUser())?.data,
  });


  const mutation = useMutation({
    mutationFn: async (values: FeedbacksFormModel) => {
      const { message, data } = await FeedbacksService.add(values);
      toast.success(message);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feedback"] });
    },

    onError: ({ response }: any) => {
      toast.error(response?.data?.error || "Erro ao enviar feedback");
    },
  });

  return {
    handleFeedback: mutation.mutateAsync,
    isSuccess: feedbackQuery.isSuccess,
    feedback: feedbackQuery.data,
  };
}
