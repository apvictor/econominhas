import pig from "@/assets/pig.svg"
import { Button } from "@/components/ui/button"
import { useController } from "./use-controller"
import { Loader } from "@/view/components/loader"

export function Login() {
  const year = new Date().getFullYear()

  const { handleLoginGoogle, isPending } = useController()

  return (
    <main className="min-h-screen h-full p-5 flex flex-col justify-between">
      <header className="flex space-x-2">
        <img src="/logo.svg" alt="logo" />
      </header>
      <div className="space-y-1">
        <h2 className="font-bold text-2xl">Gerencie suas finanças</h2>
        <p className="text-sm font-light text-zinc-400">
          Controle suas finanças com o melhor aplicativo de gerenciamento
        </p>
      </div>

      <div className="flex items-center justify-center">
        <img src={pig} alt="Pig" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <Button
          disabled={isPending}
          className="font-bold w-full"
          onClick={() => handleLoginGoogle()}
        >
          {isPending ? <Loader /> : "Entrar com Google"}
        </Button>
        <p className="text-sm font-light text-zinc-400">
          Entre para acessar nossos serviços
        </p>
      </div>
      <p className="text-center text-sm font-light text-zinc-400">© {year}</p>
    </main>
  )
}
