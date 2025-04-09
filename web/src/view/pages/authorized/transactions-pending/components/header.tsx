import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icon } from "@/view/components/icon"
import { useNavigate } from "react-router-dom"

export function Header() {
  const navigate = useNavigate()

  return (
    <header className="flex items-center justify-between mb-5">
      <Button variant={"ghost"} onClick={() => navigate(-1)}>
        <Icon name="ChevronLeft" />
      </Button>
      <h2 className="font-bold">Transações pendentes</h2>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"}>
            <Icon name="EllipsisVertical" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* <DropdownMenuItem>Filtros</DropdownMenuItem>
          <DropdownMenuItem>Exportar</DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
