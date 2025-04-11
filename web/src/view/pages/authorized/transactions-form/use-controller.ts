import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { object, string } from "yup";
import { TransactionsFormModel } from "@/shared/models/transactions";
import { TransactionsService } from "@/shared/services/transactions";
import { useGlobal } from "@/shared/contexts/global-context";
import { useNavigate } from "react-router-dom";

const validationSchema = object().shape({
  title: string().required("Campo obrigatório"),
  value: string().required("Campo obrigatório"),
  date: string().required("Campo obrigatório"),
  paid: string().required("Campo obrigatório"),
  accountId: string().required("Campo obrigatório"),
  categoryId: string().required("Campo obrigatório"),
})

const initialValues = {
  title: "",
  date: String(new Date()),
  value: 0.00,
  paid: 0,
  accountId: "",
  categoryId: "",
}

export function useController() {
  const { transaction } = useGlobal()
  const navigate = useNavigate()

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (values: TransactionsFormModel) => {
      if (transaction) {
        await TransactionsService.edit(transaction.id, values)
          .then(({ message, data }) => {
            toast.success(message);
            return data;
          }).catch(({ response }) => toast.error(response.data.error));
      } else {
        await TransactionsService.add(values)
          .then(({ message, data }) => {
            toast.success(message);
            return data;
          }).catch(({ response }) => toast.error(response.data.error));

      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions', 'date'] });
      queryClient.invalidateQueries({ queryKey: ['transactions', 'summary'] });
      navigate(-1)
    },
  });

  const formik = useFormik({


    onSubmit: ({ paid, date, accountId, categoryId, ...values }, { resetForm }) => {
      const data = {
        paid: Boolean(Number(paid)),
        date: new Date(date).toISOString(),
        accountId: Number(accountId),
        categoryId: Number(categoryId),
        ...values
      }

      mutation.mutateAsync(data).then(() => resetForm());
    },
    initialValues,
    validationSchema,
  });

  return { formik }
}
