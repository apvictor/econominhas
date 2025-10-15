import { icons } from "lucide-react"
import { Select, SelectTrigger, SelectContent } from "@/components/ui/select"
import { Icon } from "@/view/components/icon"
import { FixedSizeGrid as Grid } from "react-window"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Props {
  name?: string
  value?: keyof typeof icons
  onSelect: (icon: string) => void
  error?: string | boolean
}
export function IconSelect({ onSelect, value, name, error }: Props) {
  const [selected, setSelected] = useState<keyof typeof icons | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setSelected(value ?? null)
  }, [value])

  const iconNames = Object.keys(icons) as Array<keyof typeof icons>

  const columnCount = 4
  const itemHeight = 50
  const itemWidth = 50
  const rowCount = Math.ceil(iconNames.length / columnCount)

  const handleSelect = (iconName: keyof typeof icons) => {
    setSelected(iconName)
    onSelect(iconName)
    setIsOpen(false)
  }

  const Cell = ({ columnIndex, rowIndex, style }: any) => {
    const index = rowIndex * columnCount + columnIndex
    const iconName = iconNames[index]

    if (!iconName) return null

    return (
      <div style={style} onClick={() => handleSelect(iconName)}>
        <Icon name={iconName} className="size-6" />
      </div>
    )
  }

  return (
    <Select open={isOpen} onOpenChange={setIsOpen} name={name}>
      <SelectTrigger
        className={cn(
          "flex items-center gap-2 border",
          error &&
            "dark:border-red-500 dark:focus-visible:ring-red-500 dark:focus-visible:border-red-500"
        )}
      >
        {selected ? (
          <Icon name={selected} className="size-6" />
        ) : (
          <Icon name={"CirclePlus"} className="size-6 text-zinc-500" />
        )}
      </SelectTrigger>
      <SelectContent className="max-w-fit overflow-y-auto p-2">
        <Grid
          columnCount={columnCount}
          rowCount={rowCount}
          columnWidth={itemWidth}
          rowHeight={itemHeight}
          height={300}
          width={itemWidth * columnCount}
        >
          {Cell}
        </Grid>
      </SelectContent>
    </Select>
  )
}
