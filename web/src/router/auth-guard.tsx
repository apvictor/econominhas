import { useAuth } from "@/shared/contexts/auth-context"
import { Navigate, Outlet } from "react-router-dom"

interface Props {
  isPrivate: boolean
}
export function AuthGuard({ isPrivate }: Props) {
  const { signedIn } = useAuth()

  if (!signedIn && isPrivate) return <Navigate to="/" replace />

  if (signedIn && !isPrivate) return <Navigate to="/home" replace />

  return (
    <div className="flex justify-center">
      <div className="max-w-md">
        <Outlet />
      </div>
    </div>
  )
}
