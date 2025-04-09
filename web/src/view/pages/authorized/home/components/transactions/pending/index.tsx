import { Button } from "@/components/ui/button"
import { useHome } from "../../../contexts"
import { Icon } from "@/view/components/icon"
import { useNavigate } from "react-router-dom"

export function Pending() {
  const { transactionsSummary } = useHome()

  const navigate = useNavigate()

  return (
    <>
      {transactionsSummary &&
        transactionsSummary?.totalPendingTransactions > 0 && (
          <Button
            variant={"ghost"}
            onClick={() => navigate("/transactions/pending")}
            className="p-3 bg-zinc-900 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center gap-2 text-xs">
              <Icon name="TriangleAlert" className="text-yellow-500" />
              <p>
                Você possui{" "}
                <strong>
                  {transactionsSummary?.totalPendingTransactions} transações
                  pendentes
                </strong>
              </p>
            </div>
            <Icon name="ChevronRight" />
          </Button>
        )}
    </>
  )
}
