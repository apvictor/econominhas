/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react"
import { useQuery } from "@tanstack/react-query"
import { ReactNode, useEffect, useState } from "react"
import { useContext } from "react"
import { UsersModel } from "../models/users"

import { UsersService } from "../services/users"
import { Loading } from "@/components/loading"

interface Props {
  signedIn: boolean
  signOut(): void
  signIn(accessToken: string): void
  user?: UsersModel
}
const AuthContext = createContext({} as Props)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(
    () => !!localStorage.getItem("token")
  )

  function signIn(accessToken: string) {
    localStorage.setItem("token", accessToken)
    setSignedIn(true)
  }

  function signOut() {
    localStorage.clear()
    setSignedIn(false)
  }

  const { isError, isFetching, isSuccess, data } = useQuery({
    queryKey: ["me"],
    queryFn: async () => (await UsersService.me()).data,
    enabled: signedIn,
  })

  useEffect(() => {
    if (isError) signOut()
  }, [isError])

  if (isFetching) return <Loading />

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        signIn,
        signOut,
        user: data,
      }}
    >
      {!isFetching && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
