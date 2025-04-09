import { Button } from "@/components/ui/button"
import { useGlobal } from "@/shared/contexts/global-context"
import { Icon } from "@/view/components/icon"
import { useNavigate } from "react-router-dom"

export function Header() {
  const navigate = useNavigate()

  const {
    openTransactionDestroyModal,
    setOpenTransactionDestroyModal,
    transaction,
  } = useGlobal()

  return (
    <header className="flex items-center justify-between mb-5">
      <Button variant={"ghost"} onClick={() => navigate(-1)}>
        <Icon name="ChevronLeft" />
      </Button>
      <h2 className="font-bold">{transaction ? "Editar" : "Nova"} transação</h2>
      {transaction ? (
        <Button
          variant={"ghost"}
          className="!text-red-400"
          onClick={() =>
            setOpenTransactionDestroyModal(!openTransactionDestroyModal)
          }
        >
          <Icon name="Trash2" />
        </Button>
      ) : (
        <Button variant={"ghost"} className="invisible">
          <Icon name="ChevronLeft" />
        </Button>
      )}
    </header>
  )
}
