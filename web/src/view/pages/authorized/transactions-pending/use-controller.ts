import { useQuery } from "@tanstack/react-query";
import { TransactionsService } from "@/shared/services/transactions";

export function useController() {

  const { data: transactionsData, isFetching: transactionsLoading } = useQuery({
    queryKey: ["transactions", "pending"],
    queryFn: async () => await TransactionsService.getAllPending({ paid: 0 }),
    staleTime: 1000 * 60 * 5,
  })

  return { transactionsData, transactionsLoading }

}
