import { BudgetsModel } from "@/shared/models/budgets"
import {
  BudgetsService,
  getAllBudgetsResponse,
} from "@/shared/services/budgets"
import { useQuery } from "@tanstack/react-query"
import { createContext, ReactNode, useContext, useState } from "react"

interface Props {
  budgets: getAllBudgetsResponse
  budgetsLoading: boolean

  budget?: BudgetsModel
  setBudget(value: BudgetsModel): void

  openAddModal: boolean
  setOpenAddModal(value: boolean): void

  openEditModal: boolean
  setOpenEditModal(value: boolean): void

  openDestroyModal: boolean
  setOpenDestroyModal(value: boolean): void
}
const BudgetsContext = createContext({} as Props)

export function BudgetsProvider({ children }: { children: ReactNode }) {
  const [openAddModal, setOpenAddModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDestroyModal, setOpenDestroyModal] = useState(false)

  const [budget, setBudget] = useState<BudgetsModel | undefined>()

  const { data: budgets, isFetching: budgetsLoading } = useQuery({
    queryKey: ["budgets"],
    queryFn: async () => await BudgetsService.getAll(),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <BudgetsContext.Provider
      value={{
        openAddModal,
        setOpenAddModal,

        openEditModal,
        setOpenEditModal,

        openDestroyModal,
        setOpenDestroyModal,

        budget,
        setBudget,

        budgets,
        budgetsLoading,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  )
}

export function useBudgets() {
  return useContext(BudgetsContext)
}
