import { Category } from "./category"
import { useCategories } from "../contexts"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function Content() {
  const { categoriesData, categoriesLoading, setFilters } = useCategories()

  return (
    <>
      <ToggleGroup
        type="single"
        defaultValue="EXPENSE"
        className="flex items-center w-full gap-4"
        onValueChange={(type) => setFilters({ type })}
      >
        <ToggleGroupItem
          value="EXPENSE"
          className="flex-1 border border-red-400 data-[state='on']:!bg-red-800"
        >
          Despesas
        </ToggleGroupItem>
        <ToggleGroupItem
          value="INCOME"
          className="flex-1 border border-green-400 data-[state='on']:!bg-green-800"
        >
          Receitas
        </ToggleGroupItem>
        <ToggleGroupItem
          value="ACCOUNT"
          className="flex-1 border border-blue-400 data-[state='on']:!bg-blue-800"
        >
          Contas
        </ToggleGroupItem>
      </ToggleGroup>

      <Category.List>
        {categoriesLoading ? (
          <Category.ItemSkeleton />
        ) : (
          <>
            {categoriesData?.map((category) => (
              <Category.Item key={category.id} {...category} />
            ))}
          </>
        )}
      </Category.List>
    </>
  )
}
