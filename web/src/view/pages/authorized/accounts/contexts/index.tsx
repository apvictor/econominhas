import { AccountsModel } from "@/shared/models/accounts"
import { AccountsService } from "@/shared/services/accounts"
import { useQuery } from "@tanstack/react-query"
import { createContext, ReactNode, useContext, useState } from "react"

interface Props {
  accountsData?: AccountsModel[]
  accountsLoading: boolean

  account?: AccountsModel
  setAccount(value: AccountsModel): void

  openAddModal: boolean
  setOpenAddModal(value: boolean): void

  openEditModal: boolean
  setOpenEditModal(value: boolean): void

  openDestroyModal: boolean
  setOpenDestroyModal(value: boolean): void
}
const AccountsContext = createContext({} as Props)

export function AccountsProvider({ children }: { children: ReactNode }) {
  const [openAddModal, setOpenAddModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDestroyModal, setOpenDestroyModal] = useState(false)
  const [account, setAccount] = useState<AccountsModel | undefined>()

  const { data: accountsData, isFetching: accountsLoading } = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => await AccountsService.getAll(),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <AccountsContext.Provider
      value={{
        openAddModal,
        setOpenAddModal,

        openEditModal,
        setOpenEditModal,

        openDestroyModal,
        setOpenDestroyModal,

        account,
        setAccount,

        accountsData,
        accountsLoading,
      }}
    >
      {children}
    </AccountsContext.Provider>
  )
}

export function useAccounts() {
  return useContext(AccountsContext)
}
