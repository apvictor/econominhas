import { Icon } from "@/view/components/icon"
import { Header } from "./components/header"
import { useAuth } from "@/shared/contexts/auth-context"
import { MyRegistrations } from "./components/my-registrations"
import { Settings } from "./components/settings"
import { Feedback } from "./components/feedback"

export function Profile() {
  const { signOut, user } = useAuth()

  return (
    <main className="min-h-screen h-full flex flex-col p-5 space-y-5">
      <Header />

      <div className="flex flex-col gap-10 justify-between flex-1 h-full">
        <MyRegistrations />

        {user && user.feedbacks.length <= 0 && <Feedback />}

        <Settings />

        <button
          onClick={signOut}
          className="p-3 bg-zinc-900 rounded-lg flex items-center justify-between w-full mb-20"
        >
          <div className="flex items-center gap-3">
            <Icon name="DoorOpen" className="text-red-400" />
            <p className="text-sm">Sair</p>
          </div>
          <Icon name="ChevronRight" className="text-red-400" />
        </button>
      </div>
    </main>
  )
}
