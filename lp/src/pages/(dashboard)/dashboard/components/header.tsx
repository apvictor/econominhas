import { Button } from "@/components/ui/button"
import { Bell, Plus } from "lucide-react"

export function Header() {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-zinc-400">
          Bem-vindo de volta! Aqui está uma visão geral das suas finanças.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          className="bg-transparent border-zinc-800 hover:bg-zinc-800 hover:text-white"
          variant="outline"
          size="sm"
        >
          <Bell className="mr-2 h-4 w-4" />
          Alertas
        </Button>
        <Button
          className="gap-1.5 bg-white text-zinc-950 hover:bg-white/80"
          size="sm"
        >
          <Plus className="h-4 w-4" />
          Nova Transação
        </Button>
      </div>
    </header>
  )
}
