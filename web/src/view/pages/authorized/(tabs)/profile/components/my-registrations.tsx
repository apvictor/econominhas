import { Icon } from "@/view/components/icon"
import { icons } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function MyRegistrations() {
  const navigate = useNavigate()

  const data: {
    url: string
    name: string
    icon: keyof typeof icons
  }[] = [
    {
      url: "/my-profile",
      name: "Meu perfil",
      icon: "SquareUserRound",
    },
    {
      url: "/categories",
      name: "Categorias",
      icon: "Library",
    },
    {
      url: "/accounts",
      name: "Contas",
      icon: "Landmark",
    },
    {
      url: "/budgets",
      name: "Orçamentos",
      icon: "Percent",
    },
    {
      url: "/#",
      name: "Metas",
      icon: "Goal",
    },
    {
      url: "/reports",
      name: "Relatórios",
      icon: "ReceiptText",
    },
  ]

  return (
    <div className="space-y-3">
      <p className="font-bold">Meus cadastros</p>
      <div className="space-y-2">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.url)}
            className="p-3 bg-zinc-900 rounded-lg flex items-center justify-between w-full"
          >
            <div className="flex items-center gap-3">
              <Icon name={item.icon} />
              <p className="text-sm">{item.name}</p>
            </div>
            <Icon name="ChevronRight" />
          </button>
        ))}
      </div>
    </div>
  )
}
