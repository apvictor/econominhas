import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { number, object, string } from "yup";
import { useAccounts } from "../../contexts";
import { AccountsFormModel } from "@/shared/models/accounts";
import { AccountsService } from "@/shared/services/accounts";

const validationSchema = object().shape({
  name: string().required("Campo obrigatório"),
  bank: string().required("Campo obrigatório"),
  categoryId: number().required("Campo obrigatório"),
})

const initialValues = {
  name: "",
  bank: "",
  categoryId: 0,
}

export function useController() {
  const queryClient = useQueryClient();
  const { setOpenEditModal, account } = useAccounts();

  const mutation = useMutation({
    mutationFn: async (values: AccountsFormModel) => {
      if (account) await AccountsService.edit(account.id, values)
        .then(({ message, data }) => {
          toast.success(message);
          return data;
        }).catch(({ response }) => toast.error(response.data.error));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      setOpenEditModal(false);
    },
  });

  const formik = useFormik({
    onSubmit: (values, { resetForm }) => {
      mutation.mutateAsync(values).then(() => resetForm());
    },
    initialValues,
    validationSchema,
  });

  return { formik }
}
