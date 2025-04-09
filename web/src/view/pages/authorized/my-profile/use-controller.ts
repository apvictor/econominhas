import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { object, string } from "yup";
import { UsersFormModel } from "@/shared/models/users";
import { UsersService } from "@/shared/services/users";

const validationSchema = object().shape({
  name: string().required("Campo obrigatório"),
  email: string().required("Campo obrigatório"),
  cpf: string(),
  phone: string()
})

const initialValues = {
  name: "",
  email: "",
  cpf: "",
  phone: "",
}

export function useController() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (values: UsersFormModel) => {
      await UsersService.edit(values)
        .then(({ message, data }) => {
          toast.success(message);
          return data;
        }).catch(({ response }) => toast.error(response.data.error));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] });
    },
  });

  const formik = useFormik({
    onSubmit: (value, { resetForm }) => {
      mutation.mutateAsync(value).then(() => resetForm());
    },
    initialValues,
    validationSchema,
  });

  return { formik }
}
