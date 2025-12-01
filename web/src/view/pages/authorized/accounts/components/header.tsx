import { Icon } from "@/view/components/icon"
import { useNavigate } from "react-router-dom"
import { useAccounts } from "../contexts"
import { Button } from "@/components/ui/button"

export function Header() {
  const navigate = useNavigate()
  const { openAddModal, setOpenAddModal } = useAccounts()

  return (
    <header className="flex items-center justify-between">
      <Button variant={"ghost"} onClick={() => navigate(-1)}>
        <Icon name="ChevronLeft" />
      </Button>
      <h2 className="font-bold">Contas</h2>
      <Button variant={"ghost"} onClick={() => setOpenAddModal(!openAddModal)}>
        <Icon name="Plus" />
      </Button>
    </header>
  )
}
