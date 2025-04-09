import { Icon } from "@/view/components/icon"
import { useBudgets } from "../contexts"
import { formatCurrency } from "@/lib/format-currency"
import { Budget } from "@/view/components/budget"

export function Content() {
  const { budgets, budgetsLoading } = useBudgets()

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="text-center flex-1 font-bold">
          <p className="text-sm">Saldo</p>
          <p className="text-2xl text-nowrap">
            {formatCurrency(budgets?.total)}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="p-3 bg-zinc-900 rounded-lg flex items-center gap-3 w-full">
          <div className="rounded-full bg-zinc-950 size-10 flex items-center justify-center text-teal-400">
            <Icon name="ArrowUp" />
          </div>
          <div className="flex flex-col">
            <p className="font-light text-xs">Receitas</p>
            <p className="text-teal-400 text-sm font-bold text-nowrap">
              {formatCurrency(budgets?.income.total)}
            </p>
          </div>
        </div>
        <div className="p-3 bg-zinc-900 rounded-lg flex items-center gap-3 w-full">
          <div className="rounded-full bg-zinc-950 size-10 flex items-center justify-center text-red-400">
            <Icon name="ArrowDown" />
          </div>
          <div className="flex flex-col">
            <p className="font-light text-xs">Despesas</p>
            <p className="text-red-400 text-sm font-bold text-nowrap">
              {formatCurrency(budgets?.expenses.total)}
            </p>
          </div>
        </div>
      </div>

      <section className="space-y-4 mb-20">
        <div className="flex items-center justify-between font-bold">
          <p className="font-bold">Transações fixas</p>
        </div>
        <Budget.List>
          {budgetsLoading ? (
            <Budget.ItemSkeleton />
          ) : (
            <>
              {budgets &&
                budgets.budgets.map((budget) => (
                  <Budget.Item key={budget.id} budget={budget} />
                ))}
            </>
          )}
        </Budget.List>
      </section>
    </div>
  )
}
