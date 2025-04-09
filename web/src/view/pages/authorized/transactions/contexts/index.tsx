import {
  getGroupedByDateResponse,
  TransactionsService,
} from "@/shared/services/transactions"
import { useQuery } from "@tanstack/react-query"
import { createContext, ReactNode, useContext, useState } from "react"
import { useAuth } from "@/shared/contexts/auth-context"

interface Props {
  transactions: getGroupedByDateResponse | undefined
  transactionsLoading: boolean

  openPendingTransactionsModal: boolean
  setOpenPendingTransactionsModal(value: boolean): void
}
const TransactionsContext = createContext({} as Props)

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const { filters } = useAuth()

  const [openPendingTransactionsModal, setOpenPendingTransactionsModal] =
    useState(false)

  const { data: transactions, isFetching: transactionsLoading } = useQuery({
    queryKey: ["transactions", "date", filters],
    queryFn: async () => await TransactionsService.getGroupedByDate(filters),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        transactionsLoading,

        openPendingTransactionsModal,
        setOpenPendingTransactionsModal,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  return useContext(TransactionsContext)
}
