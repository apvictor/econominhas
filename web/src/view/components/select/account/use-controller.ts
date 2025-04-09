import { useQuery } from "@tanstack/react-query";
import { AccountsService } from "@/shared/services/accounts";

export function useController() {
  const { data: accounts } = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => await AccountsService.getAll(),
    staleTime: 1000 * 60 * 5,
  });

  return { accounts }
}
