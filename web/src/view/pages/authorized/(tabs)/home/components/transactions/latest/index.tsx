import { Transaction } from "@/view/components/transaction"
import { Link } from "react-router-dom"
import { useHome } from "../../../contexts"
import { cn } from "@/lib/utils"

export function Latest() {
  const { transactionsSummary, transactionsSummaryLoading } = useHome()
  const transactions = transactionsSummary?.transactions ?? []

  return (
    <section
      className={cn(
        "space-y-4 h-full flex flex-col flex-1",
        transactions.length > 0 ? "mb-20" : "justify-center"
      )}
    >
      {transactions.length > 0 && (
        <div className="flex items-center justify-between font-bold">
          <p className="font-bold">Últimas transações</p>
          {transactions.length >= 5 && (
            <Link to={"/transactions"}>
              <p className="text-sm text-teal-400">Ver mais</p>
            </Link>
          )}
        </div>
      )}

      <Transaction.List className="flex flex-col h-full flex-1">
        {transactionsSummaryLoading ? (
          <Transaction.ItemSkeleton />
        ) : transactions.length === 0 ? (
          <div className="flex flex-col h-full items-center justify-center">
            <img
              width={100}
              src="empty.svg"
              alt="Nenhuma transação encontrada"
            />
            <p className="text-nowrap text-xs">Nenhuma transação encontrada</p>
          </div>
        ) : (
          transactions.map((transaction) => (
            <Transaction.Item key={transaction.id} transaction={transaction} />
          ))
        )}
      </Transaction.List>
    </section>
  )
}
