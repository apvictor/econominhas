import { Icon } from "@/view/components/icon"
import { ActionButtons } from "./action-buttons"
import { Transactions } from "./transactions"
import { useHome } from "../contexts"
import { formatCurrency } from "@/lib/format-currency"

export function Content() {
  const { transactionsSummary } = useHome()

  return (
    <div className="flex flex-col gap-8 p-5 flex-1 h-full">
      <div className="flex items-center justify-center gap-5">
        <div className="p-3 bg-zinc-900 rounded-lg flex items-center gap-3 w-full">
          <div className="rounded-full bg-zinc-950 size-10 flex items-center justify-center text-teal-400">
            <Icon name="ArrowUp" />
          </div>
          <div className="flex flex-col">
            <p className="font-light text-[10px]">Receitas</p>
            <p className="text-teal-400 text-xs font-bold text-nowrap">
              {formatCurrency(transactionsSummary?.income.total)}
            </p>
            <p className="font-light text-zinc-400 text-nowrap text-[10px]">
              {formatCurrency(transactionsSummary?.income.forecast)} previsto
            </p>
          </div>
        </div>
        <div className="p-3 bg-zinc-900 rounded-lg flex items-center gap-3 w-full">
          <div className="rounded-full bg-zinc-950 size-10 flex items-center justify-center text-red-400">
            <Icon name="ArrowDown" />
          </div>
          <div className="flex flex-col">
            <p className="font-light text-[10px]">Despesas</p>
            <p className="text-red-400 text-xs font-bold text-nowrap">
              {formatCurrency(transactionsSummary?.expenses.total)}
            </p>
            <p className="font-light text-zinc-400 text-nowrap text-[10px]">
              {formatCurrency(transactionsSummary?.expenses.forecast)} previsto
            </p>
          </div>
        </div>
      </div>

      <Transactions.Pending />

      <ActionButtons />

      <Transactions.Latest />
    </div>
  )
}
