import { TransactionsFiltersModel } from "@/shared/models/transactions"
import {
  getReportsResponse,
  TransactionsService,
} from "@/shared/services/transactions"
import { useQuery } from "@tanstack/react-query"
import { createContext, ReactNode, useContext, useState } from "react"

interface Props {
  transactionsData: getReportsResponse | undefined
  transactionsLoading: boolean

  openFiltersModal: boolean
  setOpenFiltersModal(value: boolean): void

  setFilters(value: TransactionsFiltersModel): void
  filters: TransactionsFiltersModel
}
const ReportsContext = createContext({} as Props)

export function ReportsProvider({ children }: { children: ReactNode }) {
  const [openFiltersModal, setOpenFiltersModal] = useState(false)

  const [filters, setFilters] = useState<TransactionsFiltersModel>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  })

  const { data: transactionsData, isFetching: transactionsLoading } = useQuery({
    queryKey: ["transactions", "reports", filters],
    queryFn: async () => await TransactionsService.getReports(filters),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <ReportsContext.Provider
      value={{
        openFiltersModal,
        setOpenFiltersModal,

        transactionsData,
        transactionsLoading,

        setFilters,
        filters,
      }}
    >
      {children}
    </ReportsContext.Provider>
  )
}

export function useReports() {
  return useContext(ReportsContext)
}
