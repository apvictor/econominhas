import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import { AuthGuard } from "./auth-guard"

import { SignInPage } from "@/pages/(auth)/signin"
import { SignUpPage } from "@/pages/(auth)/signup"

import DashboardLayout from "@/pages/(dashboard)/dashboard/layout"
import DashboardPage from "@/pages/(dashboard)/dashboard"
import AccountsPage from "@/pages/(dashboard)/accounts"
import ReportsPage from "@/pages/(dashboard)/reports"
import CategoriesPage from "@/pages/(dashboard)/categories"
import BudgetPage from "@/pages/(dashboard)/budget"
import MarketingPage from "@/pages/(marketing)"
import TransactionsPage from "@/pages/(dashboard)/transactions"
import GoalsPage from "@/pages/(dashboard)/goals"
import SettingsPage from "@/pages/(dashboard)/settings"

export function Router() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="" element={<MarketingPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>

        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="dashboard/*" element={<DashboardLayout />}>
            <Route path="" element={<DashboardPage />} />
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="accounts" element={<AccountsPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="budget" element={<BudgetPage />} />
            <Route path="goals" element={<GoalsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
