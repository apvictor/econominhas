import { Icon } from "@/view/components/icon"
import { useNavigate } from "react-router-dom"
import { useBudgets } from "../contexts"
import { Button } from "@/components/ui/button"

export function Header() {
  const navigate = useNavigate()
  const { openAddModal, setOpenAddModal } = useBudgets()

  return (
    <header className="flex items-center justify-between mb-5">
      <Button variant={"ghost"} onClick={() => navigate(-1)}>
        <Icon name="ChevronLeft" />
      </Button>
      <h2 className="font-bold">Orçamentos</h2>
      <Button variant={"ghost"} onClick={() => setOpenAddModal(!openAddModal)}>
        <Icon name="Plus" />
      </Button>
    </header>
  )
}
