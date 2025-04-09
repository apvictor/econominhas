import { Icon } from "@/view/components/icon"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useReports } from "../contexts"
import { useState } from "react"
import ReactPDF from "@react-pdf/renderer"
import { Pdf } from "./pdf"

export function Header() {
  const { setOpenFiltersModal, openFiltersModal, transactionsData } =
    useReports()
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleOpenFilters = () => {
    setDropdownOpen(false)
    setTimeout(() => setOpenFiltersModal(!openFiltersModal), 100)
  }

  const handleDownload = () => {
    const timestamp = new Date().getTime()
    ReactPDF.pdf(<Pdf transactions={transactionsData} />)
      .toBlob()
      .then((blob) => {
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = String(timestamp)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      })
  }

  return (
    <header className="flex items-center justify-between mb-5">
      <Button variant={"ghost"} onClick={() => navigate(-1)}>
        <Icon name="ChevronLeft" />
      </Button>
      <h2 className="font-bold">Relatórios</h2>
      <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"}>
            <Icon name="EllipsisVertical" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleOpenFilters}>
            Filtros
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDownload}>Exportar</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
