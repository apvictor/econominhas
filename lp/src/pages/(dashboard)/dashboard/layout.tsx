import { Link, Outlet, useLocation } from "react-router-dom"
import {
  BarChart3,
  CreditCard,
  DollarSign,
  Home,
  LineChart,
  LogOut,
  PiggyBank,
  Settings,
  Target,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardLayout() {
  const { pathname } = useLocation()

  const routes = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      title: "Transactions",
      icon: CreditCard,
      href: "/dashboard/transactions",
      active: pathname === "/dashboard/transactions",
    },
    {
      title: "Categories",
      icon: BarChart3,
      href: "/dashboard/categories",
      active: pathname === "/dashboard/categories",
    },
    {
      title: "Accounts",
      icon: DollarSign,
      href: "/dashboard/accounts",
      active: pathname === "/dashboard/accounts",
    },
    {
      title: "Budget",
      icon: PiggyBank,
      href: "/dashboard/budget",
      active: pathname === "/dashboard/budget",
    },
    {
      title: "Goals",
      icon: Target,
      href: "/dashboard/goals",
      active: pathname === "/dashboard/goals",
    },
    {
      title: "Reports",
      icon: LineChart,
      href: "/dashboard/reports",
      active: pathname === "/dashboard/reports",
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col w-full">
        <div className="flex flex-1">
          <Sidebar>
            <SidebarHeader>
              <div className="flex h-16 items-center px-4">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 font-semibold"
                >
                  <DollarSign className="h-6 w-6 text-primary" />
                  <span>FinTrack</span>
                </Link>
              </div>
            </SidebarHeader>

            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Principal</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {routes.map((route) => (
                      <SidebarMenuItem key={route.href}>
                        <SidebarMenuButton asChild isActive={route.active}>
                          <Link to={route.href}>
                            <route.icon />
                            <span>{route.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <div className="flex items-center justify-center p-4">
                <SidebarSeparator />
              </div>

              <SidebarGroup>
                <SidebarGroupLabel>Configurações</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/dashboard/settings">
                          <Settings />
                          <span>Configurações</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/">
                      <LogOut />
                      <span>Logout</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>

          <main className="flex-1 p-4 pt-0 md:p-6 md:pt-0">
            <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-zinc-950">
              <SidebarTrigger />

              <div className="ml-auto flex items-center gap-4">
                <Button variant="outline" size="sm">
                  Plano de atualização
                </Button>
                <ThemeToggle />
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User</span>
                </Button>
              </div>
            </header>
            <div className="pt-2">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
