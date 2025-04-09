import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';

export function formatDate(value: string | number | Date, formatting: string = "dd/MM/yyyy") {
  const adjustedDate = new Date(value);
  adjustedDate.setUTCHours(adjustedDate.getUTCHours() + 3);

  return format(adjustedDate, formatting, { locale: ptBR });
}
