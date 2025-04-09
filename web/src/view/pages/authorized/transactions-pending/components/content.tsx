import { Transaction } from "@/view/components/transaction"
import { useController } from "../use-controller"

export function Content() {
  const { transactionsData, transactionsLoading } = useController()
  return (
    <Transaction.List>
      {transactionsLoading ? (
        <Transaction.ItemSkeleton />
      ) : transactionsData?.length === 0 ? (
        <div className="flex flex-col h-full items-center justify-center">
          <img width={140} src="empty.svg" alt="Nenhuma conta encontrada" />
          <p className="text-nowrap text-xs">Nenhuma conta encontrada</p>
        </div>
      ) : (
        <>
          {transactionsData &&
            transactionsData.map((transaction) => (
              <Transaction.Item
                key={transaction.id}
                transaction={transaction}
              />
            ))}
        </>
      )}
    </Transaction.List>
  )
}
