import { Icon } from "@/components/icon"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { icons } from "lucide-react"

interface CardTotal {
  title: string
  value: string
  className?: string
  percentage: number
  icon: keyof typeof icons
}

export function CardTotal({
  title,
  value,
  icon,
  className,
  percentage,
}: CardTotal) {
  return (
    <Card className="bg-transparent text-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={cn("h-4 w-4 text-black", className)} name={icon} />
      </CardHeader>
      <CardContent>
        <div className={cn("text-2xl font-bold", className)}>{value}</div>
        <p className="text-xs text-black">
          {percentage}% em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
