import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { object, string } from "yup";
import { useBudgets } from "../../contexts";
import { BudgetsFormModel } from "@/shared/models/budgets";
import { BudgetsService } from "@/shared/services/budgets";

const validationSchema = object().shape({
  title: string().required("Campo obrigatório"),
  value: string().required("Campo obrigatório"),
  date: string().required("Campo obrigatório"),
  accountId: string().required("Campo obrigatório"),
  categoryId: string().required("Campo obrigatório"),
})

const initialValues = {
  title: "",
  date: String(new Date()),
  value: 0.00,
  accountId: 0,
  categoryId: 0,
}

export function useController() {
  const { setOpenAddModal } = useBudgets()

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (values: BudgetsFormModel) => {
      await BudgetsService.add(values)
        .then(({ message, data }) => {
          toast.success(message);
          return data;
        }).catch(({ response }) => toast.error(response.data.error));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budgets'] });
      setOpenAddModal(false);
    },
  });

  const formik = useFormik({
    onSubmit: ({ date, ...values }, { resetForm }) => {
      const data = {
        date: new Date(date).toISOString(),
        ...values
      }

      mutation.mutateAsync(data).then(() => resetForm());
    },
    initialValues,
    validationSchema,
  });

  return { formik }
}
