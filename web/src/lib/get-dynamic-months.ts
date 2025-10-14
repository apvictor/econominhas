import { format, addMonths } from "date-fns"
import { ptBR } from "date-fns/locale"

export function getDynamicMonths(range: number = 12) {
  const now = new Date()
  const months = []

  for (let i = -range; i <= range; i++) {
    const date = addMonths(now, i)
    months.push({
      label: format(date, "MMM/yy", { locale: ptBR }),
      month: date.getMonth(),
      year: date.getFullYear(),
    })
  }

  return months
}
