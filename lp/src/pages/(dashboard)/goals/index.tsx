import { useState } from "react"
import { Calendar, Edit, Plus, Target, Trash } from "lucide-react"

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

export default function GoalsPage() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      name: "Fundo de Emergência",
      target: 10000,
      current: 5000,
      deadline: "2025-12-31",
      category: "Poupança",
    },
    {
      id: 2,
      name: "Carro Novo",
      target: 25000,
      current: 8000,
      deadline: "2026-06-30",
      category: "Transporte",
    },
    {
      id: 3,
      name: "Viagem de Férias",
      target: 5000,
      current: 2500,
      deadline: "2025-07-15",
      category: "Viagem",
    },
  ])

  const [newGoal, setNewGoal] = useState({
    name: "",
    target: 0,
    current: 0,
    deadline: "",
    category: "",
  })

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [goalToDelete, setGoalToDelete] = useState<number | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingGoal, setEditingGoal] = useState<any>(null)
  const [addFundsDialogOpen, setAddFundsDialogOpen] = useState(false)
  const [selectedGoal, setSelectedGoal] = useState<any>(null)
  const [amountToAdd, setAmountToAdd] = useState(0)

  const handleAddGoal = () => {
    const id = Math.max(0, ...goals.map((g) => g.id)) + 1
    setGoals([...goals, { id, ...newGoal }])
    setNewGoal({ name: "", target: 0, current: 0, deadline: "", category: "" })
  }

  const handleDeleteGoal = (id: number) => {
    setGoalToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (goalToDelete) {
      setGoals(goals.filter((goal) => goal.id !== goalToDelete))
      setIsDeleteDialogOpen(false)
      setGoalToDelete(null)
    }
  }

  const handleEditGoal = (goal: any) => {
    setEditingGoal({ ...goal })
    setIsEditDialogOpen(true)
  }

  const saveEditedGoal = () => {
    if (editingGoal) {
      setGoals(goals.map((g) => (g.id === editingGoal.id ? editingGoal : g)))
      setIsEditDialogOpen(false)
      setEditingGoal(null)
    }
  }

  const handleAddFunds = (goal: any) => {
    setSelectedGoal(goal)
    setAmountToAdd(0)
    setAddFundsDialogOpen(true)
  }

  const confirmAddFunds = () => {
    if (selectedGoal && amountToAdd > 0) {
      setGoals(
        goals.map((g) =>
          g.id === selectedGoal.id
            ? { ...g, current: g.current + amountToAdd }
            : g
        )
      )
      setAddFundsDialogOpen(false)
      setSelectedGoal(null)
      setAmountToAdd(0)
    }
  }

  // Formatar data para o formato brasileiro
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR")
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Metas Financeiras
          </h1>
          <p className="text-muted-foreground">
            Acompanhe seu progresso em direção às suas metas financeiras.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Nova Meta
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Adicionar Nova Meta</DialogTitle>
                <DialogDescription>
                  Crie uma nova meta financeira para acompanhar seu progresso.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome da Meta</Label>
                  <Input
                    id="name"
                    value={newGoal.name}
                    onChange={(e) =>
                      setNewGoal({ ...newGoal, name: e.target.value })
                    }
                    placeholder="ex., Fundo de Emergência"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="target">Valor Alvo</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5">R$</span>
                    <Input
                      id="target"
                      type="number"
                      step="0.01"
                      min="0"
                      value={newGoal.target}
                      onChange={(e) =>
                        setNewGoal({
                          ...newGoal,
                          target: Number.parseFloat(e.target.value),
                        })
                      }
                      className="pl-7"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="current">Valor Atual</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5">R$</span>
                    <Input
                      id="current"
                      type="number"
                      step="0.01"
                      min="0"
                      value={newGoal.current}
                      onChange={(e) =>
                        setNewGoal({
                          ...newGoal,
                          current: Number.parseFloat(e.target.value),
                        })
                      }
                      className="pl-7"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="deadline">Data Alvo</Label>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="deadline"
                      type="date"
                      value={newGoal.deadline}
                      onChange={(e) =>
                        setNewGoal({ ...newGoal, deadline: e.target.value })
                      }
                      className="pl-8"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Select
                    value={newGoal.category}
                    onValueChange={(value) =>
                      setNewGoal({ ...newGoal, category: value })
                    }
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Poupança">Poupança</SelectItem>
                      <SelectItem value="Investimento">Investimento</SelectItem>
                      <SelectItem value="Aposentadoria">
                        Aposentadoria
                      </SelectItem>
                      <SelectItem value="Educação">Educação</SelectItem>
                      <SelectItem value="Moradia">Moradia</SelectItem>
                      <SelectItem value="Transporte">Transporte</SelectItem>
                      <SelectItem value="Viagem">Viagem</SelectItem>
                      <SelectItem value="Outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddGoal}>
                  Adicionar Meta
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal) => (
          <Card key={goal.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>{goal.name}</CardTitle>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditGoal(goal)}
                  >
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Editar</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteGoal(goal.id)}
                  >
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Excluir</span>
                  </Button>
                </div>
              </div>
              <CardDescription>{goal.category}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Atual</div>
                  <div className="text-xl font-bold">
                    R$ {goal.current.toFixed(2).replace(".", ",")}
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Meta</div>
                  <div className="text-xl font-bold">
                    R$ {goal.target.toFixed(2).replace(".", ",")}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Progresso</div>
                  <div className="text-sm text-muted-foreground">
                    {((goal.current / goal.target) * 100).toFixed(0)}%
                  </div>
                </div>
                <Progress
                  value={(goal.current / goal.target) * 100}
                  className="h-2"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="text-muted-foreground">
                  R$ {(goal.target - goal.current).toFixed(2).replace(".", ",")}{" "}
                  restantes
                </div>
                <div className="text-muted-foreground">
                  Data alvo: {formatDate(goal.deadline)}
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleAddFunds(goal)}
              >
                Adicionar Fundos
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Diálogo de edição */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar Meta</DialogTitle>
            <DialogDescription>
              Modifique os detalhes da sua meta financeira.
            </DialogDescription>
          </DialogHeader>
          {editingGoal && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-name">Nome da Meta</Label>
                <Input
                  id="edit-name"
                  value={editingGoal.name}
                  onChange={(e) =>
                    setEditingGoal({ ...editingGoal, name: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-target">Valor Alvo</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">R$</span>
                  <Input
                    id="edit-target"
                    type="number"
                    step="0.01"
                    min="0"
                    value={editingGoal.target}
                    onChange={(e) =>
                      setEditingGoal({
                        ...editingGoal,
                        target: Number.parseFloat(e.target.value),
                      })
                    }
                    className="pl-7"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-current">Valor Atual</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">R$</span>
                  <Input
                    id="edit-current"
                    type="number"
                    step="0.01"
                    min="0"
                    value={editingGoal.current}
                    onChange={(e) =>
                      setEditingGoal({
                        ...editingGoal,
                        current: Number.parseFloat(e.target.value),
                      })
                    }
                    className="pl-7"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-deadline">Data Alvo</Label>
                <div className="relative">
                  <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="edit-deadline"
                    type="date"
                    value={editingGoal.deadline}
                    onChange={(e) =>
                      setEditingGoal({
                        ...editingGoal,
                        deadline: e.target.value,
                      })
                    }
                    className="pl-8"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-category">Categoria</Label>
                <Select
                  value={editingGoal.category}
                  onValueChange={(value) =>
                    setEditingGoal({ ...editingGoal, category: value })
                  }
                >
                  <SelectTrigger id="edit-category">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Poupança">Poupança</SelectItem>
                    <SelectItem value="Investimento">Investimento</SelectItem>
                    <SelectItem value="Aposentadoria">Aposentadoria</SelectItem>
                    <SelectItem value="Educação">Educação</SelectItem>
                    <SelectItem value="Moradia">Moradia</SelectItem>
                    <SelectItem value="Transporte">Transporte</SelectItem>
                    <SelectItem value="Viagem">Viagem</SelectItem>
                    <SelectItem value="Outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
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
            <Button onClick={saveEditedGoal}>Salvar Alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Diálogo de adicionar fundos */}
      <Dialog open={addFundsDialogOpen} onOpenChange={setAddFundsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar Fundos</DialogTitle>
            <DialogDescription>
              {selectedGoal &&
                `Adicione fundos à sua meta "${selectedGoal.name}"`}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="amount">Valor a Adicionar</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5">R$</span>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  min="0"
                  value={amountToAdd}
                  onChange={(e) =>
                    setAmountToAdd(Number.parseFloat(e.target.value) || 0)
                  }
                  className="pl-7"
                />
              </div>
            </div>
            {selectedGoal && (
              <div className="rounded-md bg-muted p-3">
                <div className="flex justify-between">
                  <span>Valor atual:</span>
                  <span>
                    R$ {selectedGoal.current.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Após adição:</span>
                  <span>
                    R${" "}
                    {(selectedGoal.current + amountToAdd)
                      .toFixed(2)
                      .replace(".", ",")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Meta:</span>
                  <span>
                    R$ {selectedGoal.target.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setAddFundsDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button onClick={confirmAddFunds}>Adicionar</Button>
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
              Tem certeza que deseja excluir esta meta? Esta ação não pode ser
              desfeita.
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
