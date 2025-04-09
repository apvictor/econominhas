import { Header } from "./components/header"
import { Content } from "./components/content"
import { TransactionsProvider } from "./contexts"

export function Transactions() {
  return (
    <TransactionsProvider>
      <main className="min-h-screen h-full">
        <Header />

        <Content />
      </main>
    </TransactionsProvider>
  )
}
