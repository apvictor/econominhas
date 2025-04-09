import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select"
import { FixedSizeGrid as Grid } from "react-window"
import { useEffect, useState } from "react"
import { useController } from "./use-controller"
import { CategoriesModel } from "@/shared/models/categories"
import { Loader } from "../../loader"
import { Icon } from "../../icon"
import { Link } from "react-router-dom"

interface Props {
  value?: number
  columnCount?: number
  type?: "ACCOUNT" | "INCOME" | "EXPENSE" | string
  onSelect: (categoryId: number) => void
}
export function CategorySelect({
  onSelect,
  type,
  columnCount = 2,
  value,
}: Props) {
  const { categories } = useController(type)
  const [selected, setSelected] = useState<CategoriesModel | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (categories && value) {
      const category = categories.find((c: CategoriesModel) => c.id === value)
      setSelected(category || null)
    }
  }, [categories, value, type])

  if (!categories) return <Loader />

  const itemHeight = 70
  const itemWidth = 150
  const rowCount = Math.ceil(categories.length / columnCount)

  const handleSelect = (category: CategoriesModel) => {
    setSelected(category)
    onSelect(category.id)
    setIsOpen(false)
  }

  const Cell = ({ columnIndex, rowIndex, style }: any) => {
    const index = rowIndex * columnCount + columnIndex
    const category = categories[index]

    if (!category) return

    return (
      <button style={style} onClick={() => handleSelect(category)}>
        <div className="flex gap-2">
          <Icon name={category.icon} />
          <p className="text-nowrap">{category.name}</p>
        </div>
      </button>
    )
  }

  return (
    <Select open={isOpen} onOpenChange={setIsOpen}>
      <SelectTrigger className="flex items-center gap-2">
        {selected ? (
          <div className="flex items-center gap-2">
            <Icon name={selected.icon} />
            <p className="text-nowrap">{selected.name}</p>
          </div>
        ) : (
          <SelectValue placeholder="Selecione uma categoria" />
        )}
      </SelectTrigger>
      <SelectContent className="max-w-fit overflow-y-auto p-2">
        {categories.length > 0 ? (
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
        ) : (
          <Link
            to={"/categories"}
            className="flex items-center justify-center gap-2"
          >
            <Icon name="Plus" />
            <span>Cadastre uma categoria</span>
          </Link>
        )}
      </SelectContent>
    </Select>
  )
}
