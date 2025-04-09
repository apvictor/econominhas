import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Input as InputBase } from "@/components/ui/input"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { useController } from "./use-controller"
import { Select } from "@/view/components/select"
import { Label } from "@/components/ui/label"
import { DatePicker } from "@/components/ui/date-picker"
import { useEffect, useState } from "react"
import { formatCurrencyFloat } from "@/lib/format-currency-float"
import { Input } from "@/view/components/input"
import { Loader } from "@/view/components/loader"
import { Icon } from "@/view/components/icon"
import { useBudgets } from "../../contexts"

export function EditBudgetModal() {
  const {
    openEditModal,
    setOpenEditModal,
    setOpenDestroyModal,
    openDestroyModal,
    budget,
  } = useBudgets()

  const { formik } = useController()
  const [category, setCategory] = useState<"INCOME" | "EXPENSE" | string>(
    "EXPENSE"
  )

  useEffect(() => {
    if (budget) {
      setCategory(budget?.category.type)

      formik.setValues({
        accountId: Number(budget?.accountId) || 0,
        categoryId: budget?.categoryId || 0,
        date: budget?.date || String(new Date()),
        title: budget?.title || "",
        value: budget?.value || 0,
      })
    }
  }, [budget])

  return (
    <Drawer
      open={openEditModal}
      onOpenChange={() => setOpenEditModal(!openEditModal)}
    >
      <DrawerContent>
        <DrawerHeader className="flex items-center justify-between">
          <div className="w-[50px] h-9" />
          <DrawerTitle>Editar transação do orçamento</DrawerTitle>
          <Button
            variant={"ghost"}
            className="!text-red-400"
            onClick={() => setOpenDestroyModal(!openDestroyModal)}
          >
            <Icon name="Trash2" />
          </Button>
        </DrawerHeader>

        <form
          id="EditTransactionModal"
          className="p-4 space-y-5"
          onSubmit={formik.handleSubmit}
        >
          <ToggleGroup
            type="single"
            defaultValue={budget?.category.type}
            onValueChange={(value) => setCategory(value)}
            className="flex items-center w-full gap-4"
          >
            <ToggleGroupItem
              value="EXPENSE"
              className="flex-1 border border-red-400 data-[state='on']:!bg-red-800 rounded min-h-9 h-full"
            >
              Despesas
            </ToggleGroupItem>
            <ToggleGroupItem
              value="INCOME"
              className="flex-1 border border-green-400 data-[state='on']:!bg-green-800 rounded min-h-9"
            >
              Receitas
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="pt-5">
            <Input.Money
              id="value"
              name="value"
              placeholder="R$ 0,00"
              onBlur={formik.handleBlur}
              onChange={(value) => {
                formik.setFieldValue(
                  "value",
                  formatCurrencyFloat(value.target.value)
                )
              }}
              value={formik.values.value}
            />
          </div>

          <div>
            <Label className="font-bold">Título</Label>
            <InputBase
              name="title"
              placeholder="Digite o título"
              onBlur={formik.handleBlur}
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </div>

          <div>
            <Label className="font-bold">Escolha uma categoria</Label>
            <Select.Category
              columnCount={2}
              type={category}
              value={formik.values.categoryId}
              onSelect={(categoryId) =>
                formik.setFieldValue("categoryId", categoryId)
              }
            />
          </div>

          <div>
            <Label className="font-bold">Escolha uma conta</Label>
            <Select.Account
              columnCount={2}
              value={formik.values.accountId}
              onSelect={(accountId) =>
                formik.setFieldValue("accountId", accountId)
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label className="font-bold">Escolha uma data</Label>
            <DatePicker
              value={new Date(formik.values.date)}
              onChange={(date) => formik.setFieldValue("date", date)}
            />
          </div>
        </form>

        <DrawerFooter>
          <Button
            type="submit"
            form="EditTransactionModal"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? <Loader /> : "Salvar"}
          </Button>
          <DrawerClose asChild>
            <Button className="!bg-transparent !text-white" type="button">
              Cancelar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
