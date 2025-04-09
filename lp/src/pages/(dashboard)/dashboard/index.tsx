import {
  ArrowDown,
  ArrowUp,
  Bell,
  CreditCard,
  DollarSign,
  LineChart,
  Plus,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart } from "@/components/charts/bar-chart"
import { monthlyBudgetData } from "@/lib/chart-data"
import { Link } from "react-router-dom"
import { Header } from "./components/header"
import { CardTotal } from "./components/card-total"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <Header />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardTotal
          title="Saldo Total"
          icon="DollarSign"
          value="R$ 12.345,67"
          percentage={2.5}
        />
        <CardTotal
          title="Receitas"
          icon="ArrowUp"
          value="R$ 5.432,10"
          percentage={1.2}
          className="text-green-700"
        />
        <CardTotal
          title="Despesas"
          icon="ArrowDown"
          value="R$ 3.210,45"
          percentage={-0.5}
          className="text-red-700"
        />
        <CardTotal
          title="Economias"
          icon="ChartLine"
          value="R$ 2.221,65"
          percentage={4.3}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Receitas vs Despesas</CardTitle>
            <CardDescription>
              Comparação mensal para o ano atual
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-md">
              <BarChart data={monthlyBudgetData} />
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Visão Geral do Orçamento</CardTitle>
            <CardDescription>Seu progresso orçamentário mensal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Alimentação</div>
                <div className="text-sm text-muted-foreground">
                  R$ 350 / R$ 500
                </div>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Entretenimento</div>
                <div className="text-sm text-muted-foreground">
                  R$ 120 / R$ 200
                </div>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Transporte</div>
                <div className="text-sm text-muted-foreground">
                  R$ 180 / R$ 250
                </div>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Restaurantes</div>
                <div className="text-sm text-muted-foreground">
                  R$ 290 / R$ 300
                </div>
              </div>
              <Progress value={97} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Utilidades</div>
                <div className="text-sm text-muted-foreground">
                  R$ 150 / R$ 200
                </div>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Link
                to="/dashboard/budget"
                className="flex w-full items-center justify-center"
              >
                Ver Todos os Orçamentos
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Transações Recentes</CardTitle>
            <CardDescription>
              Sua atividade financeira mais recente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">Todas</TabsTrigger>
                <TabsTrigger value="income">Receitas</TabsTrigger>
                <TabsTrigger value="expenses">Despesas</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-black/10 p-2">
                      <CreditCard className="h-4 w-4 text-black" />
                    </div>
                    <div>
                      <div className="font-medium">Supermercado</div>
                      <div className="text-sm text-zinc-500">15 mar, 2025</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-red-700">-R$ 89,74</div>
                    <div className="text-sm text-zinc-500">Alimentação</div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-700/10 p-2">
                      <DollarSign className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <div className="font-medium">Depósito de Salário</div>
                      <div className="text-sm text-zinc-500">10 mar, 2025</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-700">
                      +R$ 2.750,00
                    </div>
                    <div className="text-sm text-zinc-500">Receita</div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-black/10 p-2">
                      <CreditCard className="h-4 w-4 text-black" />
                    </div>
                    <div>
                      <div className="font-medium">Conta de Luz</div>
                      <div className="text-sm text-zinc-500">5 mar, 2025</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-red-700">-R$ 124,30</div>
                    <div className="text-sm text-zinc-500">Utilidades</div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-black/10 p-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Restaurante</div>
                      <div className="text-sm text-muted-foreground">
                        3 mar, 2025
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-red-700">-R$ 56,20</div>
                    <div className="text-sm text-muted-foreground">
                      Alimentação
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="income" className="space-y-4">
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-500/10 p-2">
                      <DollarSign className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <div className="font-medium">Depósito de Salário</div>
                      <div className="text-sm text-muted-foreground">
                        10 mar, 2025
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-700">
                      +R$ 2.750,00
                    </div>
                    <div className="text-sm text-muted-foreground">Receita</div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-500/10 p-2">
                      <DollarSign className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <div className="font-medium">Pagamento Freelance</div>
                      <div className="text-sm text-muted-foreground">
                        8 mar, 2025
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-700">+R$ 450,00</div>
                    <div className="text-sm text-muted-foreground">Receita</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="expenses" className="space-y-4">
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Supermercado</div>
                      <div className="text-sm text-muted-foreground">
                        15 mar, 2025
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-red-700">-R$ 89,74</div>
                    <div className="text-sm text-muted-foreground">
                      Alimentação
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Conta de Luz</div>
                      <div className="text-sm text-muted-foreground">
                        5 mar, 2025
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-red-700">-R$ 124,30</div>
                    <div className="text-sm text-muted-foreground">
                      Utilidades
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Link
                to="/dashboard/transactions"
                className="flex w-full items-center justify-center"
              >
                Ver Todas as Transações
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Contas a Pagar</CardTitle>
            <CardDescription>
              Contas com vencimento nos próximos 7 dias
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-md border p-4">
              <div>
                <div className="font-medium">Aluguel</div>
                <div className="text-sm text-muted-foreground">
                  Vence em 2 dias
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-red-700">R$ 1.200,00</div>
                <Button variant="ghost" size="sm">
                  Pagar Agora
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-md border p-4">
              <div>
                <div className="font-medium">Internet</div>
                <div className="text-sm text-muted-foreground">
                  Vence em 5 dias
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-red-700">R$ 65,99</div>
                <Button variant="ghost" size="sm">
                  Pagar Agora
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-md border p-4">
              <div>
                <div className="font-medium">Celular</div>
                <div className="text-sm text-muted-foreground">
                  Vence em 6 dias
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-red-700">R$ 45,00</div>
                <Button variant="ghost" size="sm">
                  Pagar Agora
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Ver Todas as Contas
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
