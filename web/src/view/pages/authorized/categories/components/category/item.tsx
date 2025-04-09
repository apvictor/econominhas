import { cn } from "@/lib/utils"
import { Icon } from "@/view/components/icon"
import { CategoriesModel } from "@/shared/models/categories"
import { Button } from "@/components/ui/button"
import { useCategories } from "../../contexts"

export function Item(category: CategoriesModel) {
  const { openEditModal, setOpenEditModal, setCategory } = useCategories()

  return (
    <Button
      variant={"outline"}
      onClick={() => {
        setCategory(category)
        setOpenEditModal(!openEditModal)
      }}
      className="border border-zinc-800 p-1 rounded-lg flex items-center justify-start gap-1 w-full"
    >
      <div className="size-10 flex items-center justify-center">
        <Icon
          name={category.icon}
          className={cn(
            category.type === "INCOME" && "text-teal-400",
            category.type === "EXPENSE" && "text-red-400",
            category.type === "ACCOUNT" && "text-blue-400"
          )}
        />
      </div>
      <p className="text-sm">{category.name}</p>
    </Button>
  )
}
