import { Account } from "./account"
import { useAccounts } from "../contexts"
import { cn } from "@/lib/utils"

export function Content() {
  const { accountsData, accountsLoading } = useAccounts()

  return (
    <Account.List
      className={cn(
        accountsData?.length === 0 && "flex-1 flex items-center justify-center"
      )}
    >
      {accountsLoading ? (
        <Account.ItemSkeleton />
      ) : accountsData?.length === 0 ? (
        <div className="flex flex-col h-full items-center justify-center">
          <img width={140} src="empty.svg" alt="Nenhuma conta encontrada" />
          <p className="text-nowrap text-xs">Nenhuma conta encontrada</p>
        </div>
      ) : (
        accountsData &&
        accountsData.map((account) => (
          <Account.Item key={account.id} {...account} />
        ))
      )}
    </Account.List>
  )
}
