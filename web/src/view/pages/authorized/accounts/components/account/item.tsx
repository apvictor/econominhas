import { formatCurrency } from "@/lib/format-currency"
import { AccountsModel } from "@/shared/models/accounts"
import { banks } from "@/view/components/select/bank"
import { useAccounts } from "../../contexts"

export function Item(account: AccountsModel) {
  const bankProps = banks.find((b) => b.name === account.bank)

  const { openEditModal, setOpenEditModal, setAccount } = useAccounts()

  return (
    <button
      onClick={() => {
        setAccount(account)
        setOpenEditModal(!openEditModal)
      }}
      className="bg-zinc-800 p-2 rounded-lg flex items-center justify-between w-full"
    >
      <div className="flex items-center gap-2">
        {bankProps && (
          <img
            src={bankProps?.img}
            alt={account.bank}
            className="size-8 object-contain rounded-full"
          />
        )}
        <div className="text-start">
          <p className="text-xs text-zinc-400">{account.category.name}</p>
          <p className="text-sm font-bold">{account.name}</p>
        </div>
      </div>
      <div className="text-end">
        <p className="text-xs text-zinc-400">Saldo</p>
        <p className="text-sm font-bold text-nowrap">
          {formatCurrency(account.total)}
        </p>
      </div>
    </button>
  )
}
