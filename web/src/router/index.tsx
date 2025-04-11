import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import { AuthGuard } from "./auth-guard"
import { AuthorizedLayout } from "@/view/layouts/authorized"

import { Login } from "@/view/pages/unauthorized/login"
import { Categories } from "@/view/pages/authorized/categories"
import { Accounts } from "@/view/pages/authorized/accounts"
import { MyProfile } from "@/view/pages/authorized/my-profile"
import { Budgets } from "@/view/pages/authorized/budgets"
import { TransactionsForm } from "@/view/pages/authorized/transactions-form"
import { TransactionsPending } from "@/view/pages/authorized/transactions-pending"
import { Reports } from "@/view/pages/authorized/reports"
import { Home } from "@/view/pages/authorized/(tabs)/home"
import { Profile } from "@/view/pages/authorized/(tabs)/profile"
import { Transactions } from "@/view/pages/authorized/(tabs)/transactions"

export function Router() {
  const location = useLocation()

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, x: 0, transition: { duration: 0.2 } },
  }
  const pageVariants2 = {
    initial: { y: 50 },
    animate: { y: 0, transition: { duration: 0.4 } },
    exit: { y: 0, transition: { duration: 0.4 } },
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route
            path="/"
            element={
              <motion.div {...pageVariants}>
                <Login />
              </motion.div>
            }
          />
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route element={<AuthorizedLayout />}>
            <Route
              path="/home"
              element={
                <motion.div {...pageVariants}>
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/profile"
              element={
                <motion.div {...pageVariants}>
                  <Profile />
                </motion.div>
              }
            />
            <Route
              path="/transactions"
              element={
                <motion.div {...pageVariants}>
                  <Transactions />
                </motion.div>
              }
            />
          </Route>

          <Route
            path="/accounts"
            element={
              <motion.div {...pageVariants2}>
                <Accounts />
              </motion.div>
            }
          />
          <Route
            path="/my-profile"
            element={
              <motion.div {...pageVariants2}>
                <MyProfile />
              </motion.div>
            }
          />
          <Route
            path="/reports"
            element={
              <motion.div {...pageVariants2}>
                <Reports />
              </motion.div>
            }
          />
          <Route
            path="/categories"
            element={
              <motion.div {...pageVariants2}>
                <Categories />
              </motion.div>
            }
          />
          <Route
            path="/budgets"
            element={
              <motion.div {...pageVariants2}>
                <Budgets />
              </motion.div>
            }
          />
          <Route
            path="/transactions/form"
            element={
              <motion.div {...pageVariants2}>
                <TransactionsForm />
              </motion.div>
            }
          />
          <Route
            path="/transactions/pending"
            element={
              <motion.div {...pageVariants2}>
                <TransactionsPending />
              </motion.div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
