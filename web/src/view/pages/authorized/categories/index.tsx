import { CategoriesProvider } from "./contexts"
import { Content } from "./components/content"
import { Header } from "./components/header"
import { AddCategoryModal } from "./modals/add-category-modal"
import { EditCategoryModal } from "./modals/edit-category-modal"
import { DestroyCategoryModal } from "./modals/destroy-category-modal"

export function Categories() {
  return (
    <CategoriesProvider>
      <main className="min-h-screen h-full flex flex-col p-5 space-y-5">
        <Header />
        <Content />
      </main>

      <AddCategoryModal />
      <EditCategoryModal />
      <DestroyCategoryModal />
    </CategoriesProvider>
  )
}
