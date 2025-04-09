import { Header } from "./components/header"
import { Content } from "./components/content"
import { FiltersModal } from "./modals/filters-modal"
import { ReportsProvider } from "./contexts"

export function Reports() {
  return (
    <ReportsProvider>
      <main className="min-h-screen h-full flex flex-col p-5">
        <Header />

        <Content />

        <FiltersModal />
      </main>
    </ReportsProvider>
  )
}
