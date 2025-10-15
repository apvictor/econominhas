import { CategoriesFormModel } from "@/shared/models/categories";
import { CategoriesService } from "@/shared/services/categories";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { object, string } from "yup";
import { useCategories } from "../../contexts";
import { icons } from "lucide-react";

const validationSchema = object().shape({
  name: string().required("Campo obrigatório"),
  icon: string().required("Campo obrigatório"),
  type: string().required("Campo obrigatório"),
})

export function useController() {
  const { setOpenAddModal, filters } = useCategories();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (values: CategoriesFormModel) => {
      await CategoriesService.add(values)
        .then(({ message, data }) => {
          toast.success(message);
          return data;
        }).catch(({ response }) => toast.error(response.data.error));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      setOpenAddModal(false);
    },
  });

  const formik = useFormik({
    onSubmit: (values, { resetForm }) => {
      mutation.mutateAsync(values).then(() => resetForm());
    },
    initialValues: {
      name: "",
      icon: "" as keyof typeof icons,
      type: filters.type,
    },
    enableReinitialize: true,
    validationSchema
  });

  return { formik }
}
