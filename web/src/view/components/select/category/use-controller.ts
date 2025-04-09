import { useQuery } from "@tanstack/react-query";
import { CategoriesService } from "@/shared/services/categories";

export function useController(type?: string) {
  const { data: categories } = useQuery({
    queryKey: ["categories", type],
    queryFn: async () => await CategoriesService.getAll({ type }),
    staleTime: 1000 * 60 * 5,
  });

  return { categories }
}
