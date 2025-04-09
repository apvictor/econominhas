import {
  ArrowRight,
  BarChart3,
  CreditCard,
  DollarSign,
  LineChart,
  PiggyBank,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function MarketingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/10 backdrop-blur-md">
        <div className="mx-auto px-8 2xl:max-w-[1400px] flex h-16 items-center justify-between">
          <a href="#start" className="flex items-center gap-2 text-white">
            <DollarSign className="h-6 w-6 text-white" />
            <span className="text-xl font-bold">FinTrack</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Recursos
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Preços
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/signin">
              <Button
                className="hover:text-white hover:bg-white/10"
                variant="ghost"
                size="sm"
              >
                Entrar
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                size="sm"
                className="text-zinc-950 bg-white hover:bg-white/50"
              >
                Cadastre-se grátis
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section id="start" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="mx-auto px-8 2xl:max-w-[1400px] md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Assuma o controle das suas finanças
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Acompanhe despesas, gerencie orçamentos e alcance seus
                    objetivos financeiros com nossa plataforma completa.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/signup">
                    <Button
                      size="lg"
                      className="gap-1.5 bg-white text-zinc-950 hover:bg-white/80"
                    >
                      Experimente grátis
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="#features">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-zinc-800 hover:bg-zinc-800 hover:text-white"
                    >
                      Saiba mais
                    </Button>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-zinc-800/50 p-4 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/20" />
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="rounded-lg bg-zinc-950 p-4 shadow">
                      <div className="mb-2 text-sm font-medium">
                        Saldo Total
                      </div>
                      <div className="text-2xl font-bold">R$ 12.345,67</div>
                      <div className="mt-2 h-2 w-full rounded-full bg-zinc-800">
                        <div className="h-2 w-3/4 rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-zinc-950 p-4 shadow">
                        <div className="mb-2 text-sm font-medium">Receitas</div>
                        <div className="text-xl font-bold text-green-700">
                          R$ 5.432,10
                        </div>
                      </div>
                      <div className="rounded-lg bg-zinc-950 p-4 shadow">
                        <div className="mb-2 text-sm font-medium">Despesas</div>
                        <div className="text-xl font-bold text-red-700">
                          R$ 3.210,45
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-zinc-950 p-4 shadow">
                      <div className="mb-2 text-sm font-medium">
                        Transações Recentes
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Supermercado</span>
                          <span className="text-sm font-medium text-red-700">
                            -R$ 89,74
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Depósito de Salário</span>
                          <span className="text-sm font-medium text-green-700">
                            +R$ 2.750,00
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Conta de Luz</span>
                          <span className="text-sm font-medium text-red-700">
                            -R$ 124,30
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-zinc-800/50"
        >
          <div className="md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-zinc-950">
                  Recursos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Tudo o que você precisa para gerenciar suas finanças
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa plataforma oferece ferramentas poderosas para ajudar
                  você a acompanhar despesas, gerenciar orçamentos e alcançar
                  seus objetivos financeiros.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-zinc-950 p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Gestão de Orçamento</h3>
                <p className="text-center text-muted-foreground">
                  Defina orçamentos mensais para diferentes categorias e
                  acompanhe seus gastos.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-zinc-950 p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Controle de Transações</h3>
                <p className="text-center text-muted-foreground">
                  Registre e categorize todas as suas transações, incluindo
                  pagamentos parcelados.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-zinc-950 p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <PiggyBank className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Metas Financeiras</h3>
                <p className="text-center text-muted-foreground">
                  Defina metas de economia e acompanhe seu progresso para
                  alcançá-las.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-zinc-950 p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <LineChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Relatórios e Análises</h3>
                <p className="text-center text-muted-foreground">
                  Visualize seus dados financeiros com gráficos interativos e
                  relatórios detalhados.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-zinc-950 p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Lembretes de Contas</h3>
                <p className="text-center text-muted-foreground">
                  Nunca perca um pagamento com lembretes automáticos de contas e
                  notificações.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-zinc-950">
                  Preços
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Preços simples e transparentes
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Escolha o plano que melhor se adapta a você. Todos os planos
                  incluem um período de teste gratuito de 14 dias.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-zinc-950 p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Gratuito</h3>
                  <p className="text-muted-foreground">
                    Comece com o controle financeiro básico
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">R$ 0</span>
                  <span className="ml-1 text-muted-foreground">/mês</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Até 50 transações</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Orçamento básico</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>1 meta financeira</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/signup">
                    <Button className="w-full">Começar Agora</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-primary p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-zinc-950">Pro</h3>
                  <p className="text-zinc-950/90">
                    Perfeito para indivíduos e famílias
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold text-zinc-950">
                    R$ 49,90
                  </span>
                  <span className="ml-1 text-zinc-950/90">/mês</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center text-zinc-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Transações ilimitadas</span>
                  </li>
                  <li className="flex items-center text-zinc-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Orçamento avançado</span>
                  </li>
                  <li className="flex items-center text-zinc-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Até 10 metas financeiras</span>
                  </li>
                  <li className="flex items-center text-zinc-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Lembretes de contas</span>
                  </li>
                  <li className="flex items-center text-zinc-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Exportação CSV/PDF</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/signup">
                    <Button variant="secondary" className="w-full">
                      Começar Agora
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-zinc-950 p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Empresarial</h3>
                  <p className="text-muted-foreground">
                    Para pequenas empresas e empreendedores
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">R$ 99,90</span>
                  <span className="ml-1 text-muted-foreground">/mês</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Tudo do plano Pro</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Categorização empresarial</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Relatórios fiscais</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Múltiplos usuários</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/signup">
                    <Button className="w-full">Começar Agora</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-zinc-950">
                  Depoimentos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  O que nossos usuários dizem
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Não acredite apenas em nossa palavra. Veja o que nossos
                  usuários têm a dizer sobre o FinTrack.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-zinc-950 p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10" />
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Freelancer</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    "O FinTrack transformou completamente a forma como gerencio
                    minhas finanças. Como freelancer, acompanhar receitas e
                    despesas sempre foi um desafio, mas agora é simples."
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-zinc-950 p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10" />
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">
                      Pequeno Empresário
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    "O plano empresarial foi um divisor de águas para minha
                    pequena loja. Os recursos de relatórios fiscais sozinhos
                    economizaram horas de trabalho por mês."
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-zinc-950 p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10" />
                  <div>
                    <h4 className="font-bold">Emily Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Estudante</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    "Como estudante com orçamento apertado, o FinTrack me ajudou
                    a controlar meus gastos e economizar para meus objetivos. O
                    plano gratuito tem tudo o que eu preciso!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-zinc-950">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Perguntas frequentes
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Encontre respostas para perguntas comuns sobre o FinTrack.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <div className="rounded-lg border border-zinc-800 p-6 shadow-sm">
                <h3 className="text-lg font-bold">
                  Meus dados financeiros estão seguros?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Sim, levamos a segurança muito a sério. Todos os dados são
                  criptografados tanto em trânsito quanto em repouso. Utilizamos
                  medidas de segurança de nível bancário para proteger suas
                  informações.
                </p>
              </div>
              <div className="rounded-lg border border-zinc-800 p-6 shadow-sm">
                <h3 className="text-lg font-bold">
                  Posso conectar minhas contas bancárias?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Sim, o FinTrack suporta conexões seguras com milhares de
                  instituições financeiras. Você pode importar transações
                  automaticamente de suas contas bancárias.
                </p>
              </div>
              <div className="rounded-lg border border-zinc-800 p-6 shadow-sm">
                <h3 className="text-lg font-bold">
                  Posso cancelar minha assinatura a qualquer momento?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Absolutamente. Você pode cancelar sua assinatura a qualquer
                  momento. Se cancelar, continuará tendo acesso até o final do
                  período de cobrança.
                </p>
              </div>
              <div className="rounded-lg border border-zinc-800 p-6 shadow-sm">
                <h3 className="text-lg font-bold">
                  Existe um aplicativo móvel?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Sim, o FinTrack está disponível para iOS e Android. Você pode
                  acompanhar suas finanças em movimento e receber notificações
                  sobre contas próximas do vencimento.
                </p>
              </div>
              <div className="rounded-lg border border-zinc-800 p-6 shadow-sm">
                <h3 className="text-lg font-bold">Como começar?</h3>
                <p className="mt-2 text-muted-foreground">
                  Basta criar uma conta gratuita e você pode começar a
                  acompanhar suas finanças imediatamente. Oferecemos um período
                  de teste gratuito de 14 dias para nossos planos Pro e
                  Empresarial.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-zinc-800">
        <div className="mx-auto px-8 2xl:max-w-[1400px] flex flex-col gap-6 py-12 md:flex-row md:gap-8">
          <div className="flex flex-col gap-3 md:w-1/3">
            <div className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-white" />
              <span className="text-xl font-bold">FinTrack</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Assuma o controle de suas finanças com nossa plataforma completa
              de gestão financeira.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Produto</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link to="#features" className="hover:underline">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link to="#pricing" className="hover:underline">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Integrações
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Empresa</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link to="#" className="hover:underline">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Carreiras
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link to="#" className="hover:underline">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Termos de Serviço
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Política de Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800">
          <div className="mx-auto px-8 2xl:max-w-[1400px] flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} FinTrack. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-muted-foreground hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
