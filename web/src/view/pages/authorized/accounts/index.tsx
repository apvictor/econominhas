import { Content } from "./components/content"
import { Header } from "./components/header"
import { AccountsProvider } from "./contexts"
import { AddAccountModal } from "./modals/add-account-modal"
import { DestroyAccountModal } from "./modals/destroy-account-modal"
import { EditAccountModal } from "./modals/edit-account-modal"

export function Accounts() {
  return (
    <AccountsProvider>
      <main className="min-h-screen h-full flex flex-col p-5 space-y-5">
        <Header />
        <Content />
      </main>

      <AddAccountModal />
      <EditAccountModal />
      <DestroyAccountModal />
    </AccountsProvider>
  )
}
