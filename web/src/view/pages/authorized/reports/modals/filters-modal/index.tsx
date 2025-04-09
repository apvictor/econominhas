import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useReports } from "../../contexts"
import { MonthYearCalendar } from "../../components/month-year-calendar"
import { Label } from "@/components/ui/label"
import { Select } from "@/view/components/select"

export function FiltersModal() {
  const { openFiltersModal, setOpenFiltersModal, filters, setFilters } =
    useReports()

  return (
    <AlertDialog
      open={openFiltersModal}
      onOpenChange={() => setOpenFiltersModal(!openFiltersModal)}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Filtros</AlertDialogTitle>
          <AlertDialogDescription>
            Exporte o relatório com os filtros
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="pb-5">
          <Label>Mês e Ano</Label>
          <MonthYearCalendar filters={filters} setFilters={setFilters} />
        </div>

        <div className="pb-5">
          <Label>Categoria</Label>
          <Select.Category
            onSelect={(categoryId) =>
              setFilters({ ...filters, categoryId: Number(categoryId) })
            }
          />
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => setOpenFiltersModal(!openFiltersModal)}
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
