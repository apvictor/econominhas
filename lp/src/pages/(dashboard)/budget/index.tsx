import { useState } from "react"
import { Edit, Plus, Trash } from "lucide-react"

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
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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

export default function BudgetPage() {
  const [budgets, setBudgets] = useState([
    {
      id: 1,
      category: "Alimentação",
      amount: 500,
      spent: 350,
      color: "#ef4444",
    },
    {
      id: 2,
      category: "Transporte",
      amount: 250,
      spent: 180,
      color: "#3b82f6",
    },
    {
      id: 3,
      category: "Entretenimento",
      amount: 200,
      spent: 120,
      color: "#8b5cf6",
    },
    {
      id: 4,
      category: "Utilidades",
      amount: 300,
      spent: 150,
      color: "#f59e0b",
    },
    {
      id: 5,
      category: "Restaurantes",
      amount: 300,
      spent: 290,
      color: "#10b981",
    },
  ])

  const [newBudget, setNewBudget] = useState({
    category: "",
    amount: 0,
  })

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [budgetToDelete, setBudgetToDelete] = useState<number | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingBudget, setEditingBudget] = useState<any>(null)

  const handleAddBudget = () => {
    const id = Math.max(0, ...budgets.map((b) => b.id)) + 1
    setBudgets([
      ...budgets,
      {
        id,
        category: newBudget.category,
        amount: newBudget.amount,
        spent: 0,
        color: "#6b7280", // Cor padrão
      },
    ])
    setNewBudget({ category: "", amount: 0 })
  }

  const handleDeleteBudget = (id: number) => {
    setBudgetToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (budgetToDelete) {
      setBudgets(budgets.filter((budget) => budget.id !== budgetToDelete))
      setIsDeleteDialogOpen(false)
      setBudgetToDelete(null)
    }
  }

  const handleEditBudget = (budget: any) => {
    setEditingBudget({ ...budget })
    setIsEditDialogOpen(true)
  }

  const saveEditedBudget = () => {
    if (editingBudget) {
      setBudgets(
        budgets.map((b) => (b.id === editingBudget.id ? editingBudget : b))
      )
      setIsEditDialogOpen(false)
      setEditingBudget(null)
    }
  }

  const totalBudget = budgets.reduce((sum, budget) => sum + budget.amount, 0)
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0)
  const percentSpent = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orçamento</h1>
          <p className="text-muted-foreground">
            Gerencie seus limites de gastos mensais.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Novo Orçamento
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Adicionar Novo Orçamento</DialogTitle>
                <DialogDescription>
                  Defina um orçamento mensal para uma categoria específica.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Select
                    value={newBudget.category}
                    onValueChange={(value) =>
                      setNewBudget({ ...newBudget, category: value })
                    }
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Alimentação">Alimentação</SelectItem>
                      <SelectItem value="Transporte">Transporte</SelectItem>
                      <SelectItem value="Entretenimento">
                        Entretenimento
                      </SelectItem>
                      <SelectItem value="Utilidades">Utilidades</SelectItem>
                      <SelectItem value="Moradia">Moradia</SelectItem>
                      <SelectItem value="Restaurantes">Restaurantes</SelectItem>
                      <SelectItem value="Compras">Compras</SelectItem>
                      <SelectItem value="Outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="amount">Valor Mensal do Orçamento</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5">R$</span>
                    <Input
                      id="amount"
                      type="number"
                      step="0.01"
                      min="0"
                      value={newBudget.amount}
                      onChange={(e) =>
                        setNewBudget({
                          ...newBudget,
                          amount: Number.parseFloat(e.target.value),
                        })
                      }
                      className="pl-7"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddBudget}>
                  Adicionar Orçamento
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Visão Geral do Orçamento Mensal</CardTitle>
          <CardDescription>
            Seu progresso geral de orçamento para este mês
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Orçamento Total</div>
              <div className="text-2xl font-bold">
                R$ {totalBudget.toFixed(2).replace(".", ",")}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium">Total Gasto</div>
              <div className="text-2xl font-bold">
                R$ {totalSpent.toFixed(2).replace(".", ",")}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium">Restante</div>
              <div className="text-2xl font-bold">
                R$ {(totalBudget - totalSpent).toFixed(2).replace(".", ",")}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Progresso Geral</div>
              <div className="text-sm text-muted-foreground">
                {percentSpent.toFixed(0)}%
              </div>
            </div>
            <Progress value={percentSpent} className="h-2" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Orçamentos por Categoria</CardTitle>
          <CardDescription>Acompanhe gastos por categoria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {budgets.map((budget) => (
              <div key={budget.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: budget.color }}
                    />
                    <div className="font-medium">{budget.category}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-muted-foreground">
                      R$ {budget.spent.toFixed(2).replace(".", ",")} / R${" "}
                      {budget.amount.toFixed(2).replace(".", ",")}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditBudget(budget)}
                    >
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Editar</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteBudget(budget.id)}
                    >
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">Excluir</span>
                    </Button>
                  </div>
                </div>
                <Progress
                  value={(budget.spent / budget.amount) * 100}
                  className="h-2"
                  indicatorClassName={
                    budget.spent > budget.amount ? "bg-destructive" : ""
                  }
                />
                {budget.spent > budget.amount && (
                  <p className="text-xs text-destructive">
                    Orçamento excedido em R${" "}
                    {(budget.spent - budget.amount)
                      .toFixed(2)
                      .replace(".", ",")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Diálogo de edição */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar Orçamento</DialogTitle>
            <DialogDescription>
              Modifique os detalhes do orçamento.
            </DialogDescription>
          </DialogHeader>
          {editingBudget && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-category">Categoria</Label>
                <Select
                  value={editingBudget.category}
                  onValueChange={(value) =>
                    setEditingBudget({ ...editingBudget, category: value })
                  }
                >
                  <SelectTrigger id="edit-category">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Alimentação">Alimentação</SelectItem>
                    <SelectItem value="Transporte">Transporte</SelectItem>
                    <SelectItem value="Entretenimento">
                      Entretenimento
                    </SelectItem>
                    <SelectItem value="Utilidades">Utilidades</SelectItem>
                    <SelectItem value="Moradia">Moradia</SelectItem>
                    <SelectItem value="Restaurantes">Restaurantes</SelectItem>
                    <SelectItem value="Compras">Compras</SelectItem>
                    <SelectItem value="Outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-amount">Valor do Orçamento</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">R$</span>
                  <Input
                    id="edit-amount"
                    type="number"
                    step="0.01"
                    min="0"
                    value={editingBudget.amount}
                    onChange={(e) =>
                      setEditingBudget({
                        ...editingBudget,
                        amount: Number.parseFloat(e.target.value),
                      })
                    }
                    className="pl-7"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-spent">Valor Gasto</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">R$</span>
                  <Input
                    id="edit-spent"
                    type="number"
                    step="0.01"
                    min="0"
                    value={editingBudget.spent}
                    onChange={(e) =>
                      setEditingBudget({
                        ...editingBudget,
                        spent: Number.parseFloat(e.target.value),
                      })
                    }
                    className="pl-7"
                  />
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button onClick={saveEditedBudget}>Salvar Alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Diálogo de confirmação de exclusão */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este orçamento? Esta ação não pode
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
