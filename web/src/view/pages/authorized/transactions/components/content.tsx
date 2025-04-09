import { Icon } from "@/view/components/icon"
import { Transaction } from "@/view/components/transaction"
import { useTransactions } from "../contexts"
import { formatCurrency } from "@/lib/format-currency"

export function Content() {
  const { transactions, transactionsLoading } = useTransactions()

  return (
    <div className="flex flex-col gap-8 p-5">
      <div className="flex items-center justify-center gap-5">
        <div className="p-3 bg-zinc-900 rounded-lg flex items-center gap-3 w-full">
          <div className="rounded-full bg-zinc-950 size-10 flex items-center justify-center text-teal-400">
            <Icon name="ArrowUp" />
          </div>
          <div className="flex flex-col">
            <p className="font-light text-[10px]">Receitas</p>
            <p className="text-teal-400 text-xs font-bold text-nowrap">
              {formatCurrency(transactions?.income.total)}
            </p>
            <p className="font-light text-zinc-400 text-nowrap text-[10px]">
              {formatCurrency(transactions?.income.forecast)} previsto
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
              {formatCurrency(transactions?.expenses.total)}
            </p>
            <p className="font-light text-zinc-400 text-nowrap text-[10px]">
              {formatCurrency(transactions?.expenses.forecast)} previsto
            </p>
          </div>
        </div>
      </div>

      <Transaction.List className="mb-20">
        {transactionsLoading ? (
          <Transaction.ItemSkeleton />
        ) : transactions && transactions.transactions.length === 0 ? (
          <div className="flex flex-col h-full items-center justify-center">
            <img
              width={140}
              src="empty.svg"
              alt="Nenhuma transação encontrada"
            />
            <p className="text-nowrap text-xs">Nenhuma transação encontrada</p>
          </div>
        ) : (
          transactions &&
          transactions.transactions.map(({ date, transactions }) => (
            <div key={date} className="flex flex-col gap-1">
              <div className="flex items-center justify-between text-sm font-bold text-zinc-400">
                <span>{date}</span>
              </div>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <Transaction.Item
                    showDate={false}
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </Transaction.List>
    </div>
  )
}
