import { cn } from "@/lib/utils"
import { icons } from "lucide-react"
import { NavLink } from "react-router-dom"
import { Icon } from "../icon"

interface Routes {
  url: string
  title: string
  icon: keyof typeof icons
}

export function Fab() {
  const routes: Routes[] = [
    {
      title: "Home",
      url: "/home",
      icon: "House",
    },
    {
      title: "Transações",
      url: "/transactions",
      icon: "ArrowUpDown",
    },
    {
      title: "Perfil",
      url: "/profile",
      icon: "UserRound",
    },
  ]

  return (
    <footer className="fixed bottom-5 w-full flex items-center justify-center">
      <div className="flex items-center justify-center gap-4 p-1 bg-transparent w-fit backdrop-blur rounded-full shadow-[0px_0px_10px_1px_rgba(255,255,255,0.1)]">
        {routes.map((route) => (
          <NavLink key={route.url} to={route.url}>
            {({ isActive }) => (
              <div
                className={cn(
                  "size-12 flex items-center justify-center text-zinc-400",
                  isActive && "rounded-full bg-teal-400 text-zinc-950"
                )}
              >
                <Icon name={route.icon} />
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </footer>
  )
}
