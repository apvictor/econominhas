import { formatCurrency } from "@/lib/format-currency"
import { cn } from "@/lib/utils"
import { TransactionsModel } from "@/shared/models/transactions"
import { Icon } from "@/view/components/icon"
import { Check } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useGlobal } from "@/shared/contexts/global-context"
import { useNavigate } from "react-router-dom"

interface Props {
  showDate?: boolean
  transaction: TransactionsModel
}

export function Item({ transaction, showDate = true }: Props) {
  const navigate = useNavigate()
  const { setTransaction } = useGlobal()

  const { category, account, title, paid, value, date } = transaction
  const isIncome = category.type === "INCOME"
  const amountColor = isIncome ? "text-teal-400" : "text-red-400"

  const handleClick = () => {
    setTransaction(transaction)
    navigate("/transactions/form")
  }

  return (
    <button
      onClick={handleClick}
      className="bg-zinc-900 p-3 rounded-lg flex items-center justify-between w-full"
    >
      <div className="flex items-center gap-3">
        <div className="relative bg-zinc-950 rounded-sm size-10 flex items-center justify-center">
          <Icon name={category.icon} className={amountColor} />
          {paid && (
            <div className="absolute -top-1 -right-1 size-3 bg-teal-400 rounded-full flex items-center justify-center">
              <Check size={8} strokeWidth={4} className="text-zinc-950" />
            </div>
          )}
        </div>
        <div className="text-start">
          <p className="text-sm">{title}</p>
          <div className="text-xs text-zinc-400 flex items-center gap-0.5">
            <p>{account.name}</p>
            <p>・</p>
            <p>{category.name}</p>
          </div>
        </div>
      </div>

      <div className="text-end">
        <p className={cn("font-bold text-sm", amountColor)}>
          {isIncome ? "+" : "-"} {formatCurrency(value)}
        </p>
        {date && showDate && (
          <p className="text-xs text-zinc-400">
            {format(date, "d/MM/y", { locale: ptBR })}
          </p>
        )}
      </div>
    </button>
  )
}
