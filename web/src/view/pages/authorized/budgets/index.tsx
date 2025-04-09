import { Header } from "./components/header"
import { Content } from "./components/content"
import { BudgetsProvider } from "./contexts"
import { AddBudgetModal } from "./modals/add-budget-modal"
import { EditBudgetModal } from "./modals/edit-budget-modal"
import { DestroyBudgetModal } from "./modals/destroy-budget-modal"

export function Budgets() {
  return (
    <BudgetsProvider>
      <main className="min-h-screen h-full flex flex-col p-5">
        <Header />

        <Content />
      </main>

      <AddBudgetModal />
      <EditBudgetModal />
      <DestroyBudgetModal />
    </BudgetsProvider>
  )
}
