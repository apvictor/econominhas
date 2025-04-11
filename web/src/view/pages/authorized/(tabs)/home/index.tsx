import { Header } from "./components/header"
import { Content } from "./components/content"
import { HomeProvider } from "./contexts"

export function Home() {
  return (
    <HomeProvider>
      <main className="min-h-screen h-full flex flex-col">
        <Header />

        <Content />
      </main>
    </HomeProvider>
  )
}
