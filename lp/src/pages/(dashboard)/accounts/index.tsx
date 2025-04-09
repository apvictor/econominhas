"use client"

import { useState } from "react"
import {
  BanknoteIcon as Bank,
  CreditCard,
  Edit,
  Plus,
  Trash,
  Wallet,
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

export default function AccountsPage() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Conta Corrente",
      type: "checking",
      balance: 3245.67,
      institution: "Banco do Brasil",
    },
    {
      id: 2,
      name: "Conta Poupança",
      type: "savings",
      balance: 8750.42,
      institution: "Banco do Brasil",
    },
    {
      id: 3,
      name: "Cartão de Crédito",
      type: "credit",
      balance: -1250.3,
      institution: "Nubank",
    },
    { id: 4, name: "Dinheiro", type: "cash", balance: 350.0, institution: "" },
  ])

  const [newAccount, setNewAccount] = useState({
    name: "",
    type: "checking",
    balance: 0,
    institution: "",
  })

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [accountToDelete, setAccountToDelete] = useState<number | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingAccount, setEditingAccount] = useState<any>(null)

  const handleAddAccount = () => {
    const id = Math.max(0, ...accounts.map((a) => a.id)) + 1
    setAccounts([...accounts, { id, ...newAccount }])
    setNewAccount({ name: "", type: "checking", balance: 0, institution: "" })
  }

  const handleDeleteAccount = (id: number) => {
    setAccountToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (accountToDelete) {
      setAccounts(accounts.filter((account) => account.id !== accountToDelete))
      setIsDeleteDialogOpen(false)
      setAccountToDelete(null)
    }
  }

  const handleEditAccount = (account: any) => {
    setEditingAccount({ ...account })
    setIsEditDialogOpen(true)
  }

  const saveEditedAccount = () => {
    if (editingAccount) {
      setAccounts(
        accounts.map((a) => (a.id === editingAccount.id ? editingAccount : a))
      )
      setIsEditDialogOpen(false)
      setEditingAccount(null)
    }
  }

  const getAccountIcon = (type: string) => {
    switch (type) {
      case "checking":
      case "savings":
        return <Bank className="h-5 w-5" />
      case "credit":
        return <CreditCard className="h-5 w-5" />
      case "cash":
        return <Wallet className="h-5 w-5" />
      default:
        return <Bank className="h-5 w-5" />
    }
  }

  const totalBalance = accounts.reduce(
    (sum, account) => sum + account.balance,
    0
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contas</h1>
          <p className="text-muted-foreground">
            Gerencie suas contas bancárias e acompanhe saldos.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Nova Conta
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Adicionar Nova Conta</DialogTitle>
                <DialogDescription>
                  Adicione uma nova conta bancária ou cartão de crédito para
                  acompanhar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome da Conta</Label>
                  <Input
                    id="name"
                    value={newAccount.name}
                    onChange={(e) =>
                      setNewAccount({ ...newAccount, name: e.target.value })
                    }
                    placeholder="ex., Conta Principal"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Tipo de Conta</Label>
                  <Select
                    value={newAccount.type}
                    onValueChange={(value) =>
                      setNewAccount({ ...newAccount, type: value })
                    }
                  >
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checking">Conta Corrente</SelectItem>
                      <SelectItem value="savings">Conta Poupança</SelectItem>
                      <SelectItem value="credit">Cartão de Crédito</SelectItem>
                      <SelectItem value="cash">Dinheiro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="balance">Saldo Inicial</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5">R$</span>
                    <Input
                      id="balance"
                      type="number"
                      step="0.01"
                      value={newAccount.balance}
                      onChange={(e) =>
                        setNewAccount({
                          ...newAccount,
                          balance: Number.parseFloat(e.target.value),
                        })
                      }
                      className="pl-7"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="institution">
                    Instituição Financeira (Opcional)
                  </Label>
                  <Input
                    id="institution"
                    value={newAccount.institution}
                    onChange={(e) =>
                      setNewAccount({
                        ...newAccount,
                        institution: e.target.value,
                      })
                    }
                    placeholder="ex., Banco do Brasil"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddAccount}>
                  Adicionar Conta
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Saldo Total</CardTitle>
          <CardDescription>Saldo combinado de todas as contas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            R$ {totalBalance.toFixed(2).replace(".", ",")}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Suas Contas</CardTitle>
          <CardDescription>Gerencie suas contas financeiras</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="flex flex-col rounded-lg border p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      {getAccountIcon(account.type)}
                    </div>
                    <div>
                      <div className="font-medium">{account.name}</div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {account.institution
                          ? account.institution
                          : account.type === "checking"
                          ? "Conta Corrente"
                          : account.type === "savings"
                          ? "Conta Poupança"
                          : account.type === "credit"
                          ? "Cartão de Crédito"
                          : "Dinheiro"}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditAccount(account)}
                    >
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Editar</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteAccount(account.id)}
                    >
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">Excluir</span>
                    </Button>
                  </div>
                </div>
                <div className="mt-4">
                  <div
                    className={`text-2xl font-bold ${
                      account.balance < 0 ? "text-red-500" : ""
                    }`}
                  >
                    R$ {account.balance.toFixed(2).replace(".", ",")}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Saldo Atual
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full" size="sm">
                    Ver Transações
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Diálogo de edição */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar Conta</DialogTitle>
            <DialogDescription>
              Modifique os detalhes da conta.
            </DialogDescription>
          </DialogHeader>
          {editingAccount && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-name">Nome da Conta</Label>
                <Input
                  id="edit-name"
                  value={editingAccount.name}
                  onChange={(e) =>
                    setEditingAccount({
                      ...editingAccount,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-type">Tipo de Conta</Label>
                <Select
                  value={editingAccount.type}
                  onValueChange={(value) =>
                    setEditingAccount({ ...editingAccount, type: value })
                  }
                >
                  <SelectTrigger id="edit-type">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checking">Conta Corrente</SelectItem>
                    <SelectItem value="savings">Conta Poupança</SelectItem>
                    <SelectItem value="credit">Cartão de Crédito</SelectItem>
                    <SelectItem value="cash">Dinheiro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-balance">Saldo</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">R$</span>
                  <Input
                    id="edit-balance"
                    type="number"
                    step="0.01"
                    value={editingAccount.balance}
                    onChange={(e) =>
                      setEditingAccount({
                        ...editingAccount,
                        balance: Number.parseFloat(e.target.value),
                      })
                    }
                    className="pl-7"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-institution">Instituição Financeira</Label>
                <Input
                  id="edit-institution"
                  value={editingAccount.institution}
                  onChange={(e) =>
                    setEditingAccount({
                      ...editingAccount,
                      institution: e.target.value,
                    })
                  }
                />
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
            <Button onClick={saveEditedAccount}>Salvar Alterações</Button>
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
              Tem certeza que deseja excluir esta conta? Esta ação não pode ser
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
