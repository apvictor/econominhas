import { Router } from "./router"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { AuthProvider } from "./contexts/auth-context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import { BrowserRouter } from "react-router-dom"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
          <Toaster />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  )
}
