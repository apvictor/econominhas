import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
}
export function List({ children, className }: Props) {
  return <section className={cn("space-y-4", className)}>{children}</section>
}
