import { Icon } from "@/view/components/icon"
import { Link } from "react-router-dom"

export function Settings() {
  return (
    <div className="space-y-3">
      <p className="font-bold">Configurações</p>
      <div className="space-y-2">
        <button className="p-3 bg-zinc-900 rounded-lg flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <Icon name="Paintbrush" />
            <p className="text-sm">Apagar transações</p>
          </div>
          <Icon name="ChevronRight" />
        </button>

        <Link
          to={
            "https://api.whatsapp.com/send?phone=5511995052373&text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20sobre%20o%20*econominhas*."
          }
          className="p-3 bg-zinc-900 rounded-lg flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-3">
            <Icon name="MessageCircleQuestion" />
            <p className="text-sm">Suporte</p>
          </div>
          <Icon name="ChevronRight" />
        </Link>
      </div>
    </div>
  )
}
