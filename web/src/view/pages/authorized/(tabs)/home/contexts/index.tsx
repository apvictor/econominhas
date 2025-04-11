import {
  getMonthlySummaryResponse,
  TransactionsService,
} from "@/shared/services/transactions"
import { useQuery } from "@tanstack/react-query"
import { createContext, ReactNode, useContext } from "react"
import { useAuth } from "@/shared/contexts/auth-context"

interface Props {
  transactionsSummary: getMonthlySummaryResponse | undefined
  transactionsSummaryLoading: boolean
}
const HomeContext = createContext({} as Props)

export function HomeProvider({ children }: { children: ReactNode }) {
  const { filters } = useAuth()

  const { data: transactionsSummary, isFetching: transactionsSummaryLoading } =
    useQuery({
      queryKey: ["transactions", "summary", filters],
      queryFn: async () => await TransactionsService.getMonthlySummary(filters),
      staleTime: 1000 * 60 * 5,
    })

  return (
    <HomeContext.Provider
      value={{
        transactionsSummary,
        transactionsSummaryLoading,
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}

export function useHome() {
  return useContext(HomeContext)
}
