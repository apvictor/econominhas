import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/shared/contexts/auth-context"

export function Header() {
  const { user } = useAuth()

  return (
    <header className="flex flex-col justify-center items-center gap-2">
      <Avatar className="h-20 w-20">
        <AvatarImage className="rounded-full" src={user?.picture} />
        <AvatarFallback className="h-20 w-20 rounded-full bg-teal-900 flex items-center justify-center font-bold uppercase">
          {user?.name[0]}
          {user?.name[1]}
        </AvatarFallback>
      </Avatar>
      <p className="font-bold">{user?.name}</p>
    </header>
  )
}
