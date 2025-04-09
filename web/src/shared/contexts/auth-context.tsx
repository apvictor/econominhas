import { createContext } from "react"
import { useQuery } from "@tanstack/react-query"
import { ReactNode, useEffect, useState } from "react"
import { useContext } from "react"
import { UsersModel } from "../models/users"
import { Loading } from "@/view/components/loading"

import { UsersService } from "../services/users"
import { TransactionsFiltersModel } from "../models/transactions"

interface Props {
  signedIn: boolean
  signOut(): void
  signIn(accessToken: string): void
  user?: UsersModel

  filters: TransactionsFiltersModel
  setFilters(value: any): void
}
const AuthContext = createContext({} as Props)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<TransactionsFiltersModel>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  })

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
        filters,
        setFilters,
      }}
    >
      {!isFetching && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
