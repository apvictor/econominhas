import { Button } from "@/components/ui/button"
import { Icon } from "@/view/components/icon"
import { useNavigate } from "react-router-dom"

export function Header() {
  const navigate = useNavigate()

  return (
    <header className="flex items-center justify-between mb-5">
      <Button variant={"ghost"} onClick={() => navigate(-1)}>
        <Icon name="ChevronLeft" />
      </Button>
      <h2 className="font-bold">Meu perfil</h2>

      <Button variant={"ghost"}>
        <Icon className="invisible" name="ChevronLeft" />
      </Button>
    </header>
  )
}
