import { useReports } from "../contexts"
import { Transaction } from "@/view/components/transaction"

export function Content() {
  const { transactionsData } = useReports()

  return (
    <Transaction.List className="mb-20">
      {transactionsData &&
        transactionsData.transactions.map(({ date, transactions }) => (
          <div key={date} className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-sm font-bold text-zinc-400">
              <span>{date}</span>
              {/* <span>{formatCurrency(800)}</span> */}
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
        ))}
    </Transaction.List>
  )
}
