import {
  CategoriesFiltersModel,
  CategoriesModel,
} from "@/shared/models/categories"
import { CategoriesService } from "@/shared/services/categories"
import { useQuery } from "@tanstack/react-query"
import { createContext, ReactNode, useContext, useState } from "react"

interface Props {
  categoriesData?: CategoriesModel[]
  categoriesLoading: boolean

  category?: CategoriesModel
  setCategory(value: CategoriesModel): void

  openAddModal: boolean
  setOpenAddModal(value: boolean): void

  openEditModal: boolean
  setOpenEditModal(value: boolean): void

  openDestroyModal: boolean
  setOpenDestroyModal(value: boolean): void

  setFilters(value: CategoriesFiltersModel): void
  filters: CategoriesFiltersModel
}
const CategoriesContext = createContext({} as Props)

export function CategoriesProvider({ children }: { children: ReactNode }) {
  const [openAddModal, setOpenAddModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDestroyModal, setOpenDestroyModal] = useState(false)
  const [category, setCategory] = useState<CategoriesModel | undefined>()
  const [filters, setFilters] = useState<CategoriesFiltersModel>({
    type: "EXPENSE",
  })

  const { data: categoriesData, isFetching: categoriesLoading } = useQuery({
    queryKey: ["categories", filters.type],
    queryFn: async () => await CategoriesService.getAll(filters),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <CategoriesContext.Provider
      value={{
        openAddModal,
        setOpenAddModal,
        openEditModal,
        setOpenEditModal,
        openDestroyModal,
        setOpenDestroyModal,
        categoriesData,
        categoriesLoading,
        category,
        setCategory,
        setFilters,
        filters,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}

export function useCategories() {
  return useContext(CategoriesContext)
}
