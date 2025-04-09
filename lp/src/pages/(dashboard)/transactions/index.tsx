import { useState } from "react"
import {
  ArrowDown,
  ArrowUp,
  Calendar,
  CreditCard,
  DollarSign,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function TransactionsPage() {
  const [showInstallments, setShowInstallments] = useState(false)
  const [installments, setInstallments] = useState(1)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [transactionToDelete, setTransactionToDelete] = useState<number | null>(
    null
  )
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingTransaction, setEditingTransaction] = useState<any>(null)

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      description: "Supermercado",
      amount: -89.74,
      date: "2025-03-15",
      category: "Alimentação",
      account: "Conta Corrente",
      type: "expense",
    },
    {
      id: 2,
      description: "Depósito de Salário",
      amount: 2750.0,
      date: "2025-03-10",
      category: "Receita",
      account: "Conta Corrente",
      type: "income",
    },
    {
      id: 3,
      description: "Conta de Luz",
      amount: -124.3,
      date: "2025-03-05",
      category: "Utilidades",
      account: "Cartão de Crédito",
      type: "expense",
    },
    {
      id: 4,
      description: "Notebook Novo (Parcela 1/6)",
      amount: -249.99,
      date: "2025-03-01",
      category: "Eletrônicos",
      account: "Cartão de Crédito",
      type: "expense",
      isInstallment: true,
    },
  ])

  const handleDeleteTransaction = (id: number) => {
    setTransactionToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (transactionToDelete) {
      setTransactions(transactions.filter((t) => t.id !== transactionToDelete))
      setIsDeleteDialogOpen(false)
      setTransactionToDelete(null)
    }
  }

  const handleEditTransaction = (transaction: any) => {
    setEditingTransaction(transaction)
    setIsEditDialogOpen(true)
  }

  const saveEditedTransaction = () => {
    if (editingTransaction) {
      setTransactions(
        transactions.map((t) =>
          t.id === editingTransaction.id ? editingTransaction : t
        )
      )
      setIsEditDialogOpen(false)
      setEditingTransaction(null)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transações</h1>
          <p className="text-muted-foreground">
            Gerencie e acompanhe todas as suas transações financeiras.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Nova Transação
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Adicionar Nova Transação</DialogTitle>
                <DialogDescription>
                  Insira os detalhes da sua transação abaixo.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="transaction-type">Tipo de Transação</Label>
                  <RadioGroup defaultValue="expense" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="expense" id="expense" />
                      <Label
                        htmlFor="expense"
                        className="flex items-center gap-1"
                      >
                        <ArrowDown className="h-4 w-4 text-red-500" />
                        Despesa
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="income" id="income" />
                      <Label
                        htmlFor="income"
                        className="flex items-center gap-1"
                      >
                        <ArrowUp className="h-4 w-4 text-green-500" />
                        Receita
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Input
                    id="description"
                    placeholder="ex., Compras no Supermercado"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="amount">Valor</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="amount"
                        type="number"
                        step="0.01"
                        min="0"
                        className="pl-8"
                        placeholder="0,00"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="date">Data</Label>
                    <div className="relative">
                      <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="date" type="date" className="pl-8" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="category">Categoria</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Selecione a categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="food">Alimentação</SelectItem>
                        <SelectItem value="transportation">
                          Transporte
                        </SelectItem>
                        <SelectItem value="utilities">Utilidades</SelectItem>
                        <SelectItem value="entertainment">
                          Entretenimento
                        </SelectItem>
                        <SelectItem value="housing">Moradia</SelectItem>
                        <SelectItem value="income">Receita</SelectItem>
                        <SelectItem value="other">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="account">Conta</Label>
                    <Select>
                      <SelectTrigger id="account">
                        <SelectValue placeholder="Selecione a conta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="checking">Conta Corrente</SelectItem>
                        <SelectItem value="savings">Conta Poupança</SelectItem>
                        <SelectItem value="credit">
                          Cartão de Crédito
                        </SelectItem>
                        <SelectItem value="cash">Dinheiro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="installments"
                    checked={showInstallments}
                    onCheckedChange={setShowInstallments}
                  />
                  <Label htmlFor="installments">Pagar em parcelas</Label>
                </div>
                {showInstallments && (
                  <div className="grid gap-2">
                    <Label htmlFor="installment-count">
                      Número de Parcelas
                    </Label>
                    <Input
                      id="installment-count"
                      type="number"
                      min="2"
                      max="36"
                      value={installments}
                      onChange={(e) =>
                        setInstallments(Number.parseInt(e.target.value))
                      }
                    />
                    <p className="text-xs text-muted-foreground">
                      Isso criará {installments} transações separadas de valor
                      igual.
                    </p>
                  </div>
                )}
                <div className="grid gap-2">
                  <Label htmlFor="notes">Observações (Opcional)</Label>
                  <Input
                    id="notes"
                    placeholder="Adicione detalhes adicionais"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Salvar Transação</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Transações
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">152</div>
            <p className="text-xs text-muted-foreground">nos últimos 30 dias</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Receitas
            </CardTitle>
            <ArrowUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">R$ 5.432,10</div>
            <p className="text-xs text-muted-foreground">nos últimos 30 dias</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Despesas
            </CardTitle>
            <ArrowDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">R$ 3.210,45</div>
            <p className="text-xs text-muted-foreground">nos últimos 30 dias</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Transações</CardTitle>
          <CardDescription>
            Visualize e gerencie todas as suas transações
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar transações..." className="pl-8" />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtrar
                </Button>
                <Select defaultValue="30days">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione o período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">Últimos 7 dias</SelectItem>
                    <SelectItem value="30days">Últimos 30 dias</SelectItem>
                    <SelectItem value="90days">Últimos 90 dias</SelectItem>
                    <SelectItem value="year">Este ano</SelectItem>
                    <SelectItem value="all">Todo o período</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">Todas</TabsTrigger>
                <TabsTrigger value="income">Receitas</TabsTrigger>
                <TabsTrigger value="expenses">Despesas</TabsTrigger>
                <TabsTrigger value="installments">Parcelamentos</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4 pt-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="rounded-md border">
                    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 p-4 sm:grid-cols-[1fr_auto_auto_auto]">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          {transaction.type === "income" ? (
                            <DollarSign className="h-4 w-4 text-green-500" />
                          ) : (
                            <CreditCard className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">
                            {transaction.description}
                          </div>
                          <div className="hidden text-sm text-muted-foreground sm:block">
                            {transaction.category}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(transaction.date).toLocaleDateString("pt-BR")}
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-medium ${
                            transaction.amount < 0
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {transaction.amount < 0 ? "-" : "+"}R${" "}
                          {Math.abs(transaction.amount)
                            .toFixed(2)
                            .replace(".", ",")}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.account}
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        <Dialog
                          open={
                            isEditDialogOpen &&
                            editingTransaction?.id === transaction.id
                          }
                          onOpenChange={(open) => {
                            if (!open) setEditingTransaction(null)
                            setIsEditDialogOpen(open)
                          }}
                        >
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEditTransaction(transaction)}
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Menu</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[525px]">
                            <DialogHeader>
                              <DialogTitle>Editar Transação</DialogTitle>
                              <DialogDescription>
                                Modifique os detalhes da transação abaixo.
                              </DialogDescription>
                            </DialogHeader>
                            {editingTransaction && (
                              <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="edit-description">
                                    Descrição
                                  </Label>
                                  <Input
                                    id="edit-description"
                                    value={editingTransaction.description}
                                    onChange={(e) =>
                                      setEditingTransaction({
                                        ...editingTransaction,
                                        description: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="grid gap-2">
                                    <Label htmlFor="edit-amount">Valor</Label>
                                    <div className="relative">
                                      <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                      <Input
                                        id="edit-amount"
                                        type="number"
                                        step="0.01"
                                        value={Math.abs(
                                          editingTransaction.amount
                                        )}
                                        onChange={(e) =>
                                          setEditingTransaction({
                                            ...editingTransaction,
                                            amount:
                                              (editingTransaction.type ===
                                              "expense"
                                                ? -1
                                                : 1) *
                                              Math.abs(
                                                Number.parseFloat(
                                                  e.target.value
                                                )
                                              ),
                                          })
                                        }
                                        className="pl-8"
                                      />
                                    </div>
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor="edit-date">Data</Label>
                                    <div className="relative">
                                      <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                      <Input
                                        id="edit-date"
                                        type="date"
                                        value={editingTransaction.date}
                                        onChange={(e) =>
                                          setEditingTransaction({
                                            ...editingTransaction,
                                            date: e.target.value,
                                          })
                                        }
                                        className="pl-8"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="grid gap-2">
                                    <Label htmlFor="edit-category">
                                      Categoria
                                    </Label>
                                    <Select
                                      value={editingTransaction.category}
                                      onValueChange={(value) =>
                                        setEditingTransaction({
                                          ...editingTransaction,
                                          category: value,
                                        })
                                      }
                                    >
                                      <SelectTrigger id="edit-category">
                                        <SelectValue placeholder="Selecione a categoria" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Alimentação">
                                          Alimentação
                                        </SelectItem>
                                        <SelectItem value="Transporte">
                                          Transporte
                                        </SelectItem>
                                        <SelectItem value="Utilidades">
                                          Utilidades
                                        </SelectItem>
                                        <SelectItem value="Entretenimento">
                                          Entretenimento
                                        </SelectItem>
                                        <SelectItem value="Moradia">
                                          Moradia
                                        </SelectItem>
                                        <SelectItem value="Receita">
                                          Receita
                                        </SelectItem>
                                        <SelectItem value="Eletrônicos">
                                          Eletrônicos
                                        </SelectItem>
                                        <SelectItem value="Outros">
                                          Outros
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor="edit-account">Conta</Label>
                                    <Select
                                      value={editingTransaction.account}
                                      onValueChange={(value) =>
                                        setEditingTransaction({
                                          ...editingTransaction,
                                          account: value,
                                        })
                                      }
                                    >
                                      <SelectTrigger id="edit-account">
                                        <SelectValue placeholder="Selecione a conta" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Conta Corrente">
                                          Conta Corrente
                                        </SelectItem>
                                        <SelectItem value="Conta Poupança">
                                          Conta Poupança
                                        </SelectItem>
                                        <SelectItem value="Cartão de Crédito">
                                          Cartão de Crédito
                                        </SelectItem>
                                        <SelectItem value="Dinheiro">
                                          Dinheiro
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                              </div>
                            )}
                            <DialogFooter>
                              <Button
                                variant="outline"
                                onClick={() =>
                                  handleDeleteTransaction(transaction.id)
                                }
                              >
                                Excluir
                              </Button>
                              <Button onClick={saveEditedTransaction}>
                                Salvar Alterações
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="income" className="space-y-4 pt-4">
                {transactions
                  .filter((t) => t.type === "income")
                  .map((transaction) => (
                    <div key={transaction.id} className="rounded-md border">
                      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 p-4 sm:grid-cols-[1fr_auto_auto_auto]">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-green-500/10 p-2">
                            <DollarSign className="h-4 w-4 text-green-500" />
                          </div>
                          <div>
                            <div className="font-medium">
                              {transaction.description}
                            </div>
                            <div className="hidden text-sm text-muted-foreground sm:block">
                              {transaction.category}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(transaction.date).toLocaleDateString(
                            "pt-BR"
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-500">
                            +R${" "}
                            {Math.abs(transaction.amount)
                              .toFixed(2)
                              .replace(".", ",")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {transaction.account}
                          </div>
                        </div>
                        <div className="hidden sm:block">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditTransaction(transaction)}
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Menu</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>
              <TabsContent value="expenses" className="space-y-4 pt-4">
                {transactions
                  .filter((t) => t.type === "expense" && !t.isInstallment)
                  .map((transaction) => (
                    <div key={transaction.id} className="rounded-md border">
                      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 p-4 sm:grid-cols-[1fr_auto_auto_auto]">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <CreditCard className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">
                              {transaction.description}
                            </div>
                            <div className="hidden text-sm text-muted-foreground sm:block">
                              {transaction.category}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(transaction.date).toLocaleDateString(
                            "pt-BR"
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-red-500">
                            -R${" "}
                            {Math.abs(transaction.amount)
                              .toFixed(2)
                              .replace(".", ",")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {transaction.account}
                          </div>
                        </div>
                        <div className="hidden sm:block">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditTransaction(transaction)}
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Menu</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>
              <TabsContent value="installments" className="space-y-4 pt-4">
                {transactions
                  .filter((t) => t.isInstallment)
                  .map((transaction) => (
                    <div key={transaction.id} className="rounded-md border">
                      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 p-4 sm:grid-cols-[1fr_auto_auto_auto]">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <CreditCard className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">
                              {transaction.description}
                            </div>
                            <div className="hidden text-sm text-muted-foreground sm:block">
                              {transaction.category}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(transaction.date).toLocaleDateString(
                            "pt-BR"
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-red-500">
                            -R${" "}
                            {Math.abs(transaction.amount)
                              .toFixed(2)
                              .replace(".", ",")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {transaction.account}
                          </div>
                        </div>
                        <div className="hidden sm:block">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditTransaction(transaction)}
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Menu</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Diálogo de confirmação de exclusão */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir esta transação? Esta ação não pode
              ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-500 hover:bg-red-600"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
