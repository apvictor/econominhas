/* eslint-disable @typescript-eslint/no-explicit-any */

import { format } from 'date-fns';

export function formatDate(value: any, formatting: string = 'dd/MM/yyyy') {
  const adjustedDate = new Date(value);
  adjustedDate.setUTCHours(adjustedDate.getUTCHours() + 3);

  return format(adjustedDate, formatting);
}
