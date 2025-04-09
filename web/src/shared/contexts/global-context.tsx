import { createContext } from "react"
import { ReactNode, useState } from "react"
import { useContext } from "react"

import {
  TransactionsFiltersModel,
  TransactionsModel,
} from "../models/transactions"
import { TransactionModal } from "@/view/modals/transaction"

interface Props {
  filters: TransactionsFiltersModel
  setFilters(value: TransactionsFiltersModel): void

  openTransactionDestroyModal: boolean
  setOpenTransactionDestroyModal: (value: boolean) => void

  transaction: TransactionsModel | undefined
  setTransaction(value: TransactionsModel | undefined): void
}
const GlobalContext = createContext({} as Props)

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [openTransactionDestroyModal, setOpenTransactionDestroyModal] =
    useState<boolean>(false)

  const [filters, setFilters] = useState<TransactionsFiltersModel>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  })

  const [transaction, setTransaction] = useState<
    TransactionsModel | undefined
  >()

  return (
    <GlobalContext.Provider
      value={{
        filters,
        setFilters,
        transaction,
        setTransaction,
        openTransactionDestroyModal,
        setOpenTransactionDestroyModal,
      }}
    >
      {children}
      <TransactionModal.Destroy />
    </GlobalContext.Provider>
  )
}

export function useGlobal() {
  return useContext(GlobalContext)
}
