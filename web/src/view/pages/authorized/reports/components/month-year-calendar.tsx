import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDown } from "lucide-react"

export function MonthYearCalendar({
  filters,
  setFilters,
}: {
  filters: { month?: number; year?: number }
  setFilters: (filters: { month?: number; year?: number }) => void
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {filters.month && filters.year
            ? `${new Date(filters.year, filters.month).toLocaleString("pt-BR", {
                month: "long",
                year: "numeric",
              })}`
            : "Selecione uma data"}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[300px]">
        <div className="flex justify-between items-center gap-4">
          {/* Seleção de Mês */}
          <Select
            value={filters.month?.toString()}
            onValueChange={(value) =>
              setFilters({ ...filters, month: Number(value) })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Mês" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 12 }).map((_, i) => (
                <SelectItem key={i} value={String(i)}>
                  {new Date(2022, i).toLocaleString("pt-BR", { month: "long" })}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Seleção de Ano */}
          <Select
            value={filters.year?.toString()}
            onValueChange={(value) =>
              setFilters({ ...filters, year: Number(value) })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Ano" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }).map((_, i) => {
                const year = new Date().getFullYear() - 1 + i
                return (
                  <SelectItem key={year} value={String(year)}>
                    {year}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
      </PopoverContent>
    </Popover>
  )
}
