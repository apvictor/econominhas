import { formatCurrency } from "@/lib/format-currency"
import { cn } from "@/lib/utils"
import { Icon } from "@/view/components/icon"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { BudgetsModel } from "@/shared/models/budgets"
import { useBudgets } from "@/view/pages/authorized/budgets/contexts"

interface Props {
  budget: BudgetsModel
}
export function Item({ budget }: Props) {
  const { category, account, title, value, date } = budget
  const { setBudget, setOpenEditModal, openEditModal } = useBudgets()

  return (
    <button
      onClick={() => {
        setOpenEditModal(!openEditModal)
        setBudget(budget)
      }}
      className="bg-zinc-900 p-3 rounded-lg flex items-center justify-between w-full"
    >
      <div className="flex items-center justify-center gap-3">
        <div className="bg-zinc-950 rounded-sm size-10 flex items-center justify-center">
          <Icon
            name={category.icon}
            className={cn(
              category.type === "INCOME" ? "text-teal-400" : "text-red-400"
            )}
          />
        </div>
        <div className="text-start">
          <p className="text-sm">{title}</p>
          <p className="text-xs text-zinc-400">{account.name}</p>
        </div>
      </div>
      <div className="text-end">
        <p
          className={cn(
            "font-bold text-sm",
            category.type === "INCOME" ? "text-teal-400" : "text-red-400"
          )}
        >
          {category.type === "INCOME" ? "+" : "-"} {formatCurrency(value)}
        </p>
        {date && (
          <p className="text-[10px] text-zinc-400">
            {format(date, "d/MM/y", { locale: ptBR })}
          </p>
        )}
      </div>
    </button>
  )
}
