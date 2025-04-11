import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Input as InputBase } from "@/components/ui/input"
import { Input } from "@/view/components/input"
import { useEffect, useState } from "react"
import { formatCurrencyFloat } from "@/lib/format-currency-float"
import { Label } from "@/components/ui/label"
import { Select } from "@/view/components/select"
import { DatePicker } from "@/components/ui/date-picker"
import {
  Select as SelectBase,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useController } from "../use-controller"
import { Button } from "@/components/ui/button"
import { Loader } from "@/view/components/loader"
import { useGlobal } from "@/shared/contexts/global-context"

export function Content() {
  const { formik } = useController()

  const { transaction } = useGlobal()

  const [type, setType] = useState<"INCOME" | "EXPENSE" | string>("EXPENSE")

  useEffect(() => {
    if (transaction) {
      setType(transaction?.category.type)

      formik.setValues({
        accountId: String(transaction?.accountId) || "",
        categoryId: String(transaction?.categoryId) || "",
        date: transaction?.date || String(new Date()),
        paid: Number(transaction?.paid) || 0,
        title: transaction?.title || "",
        value: transaction?.value || 0,
        recurrence: transaction?.recurrence || "NONRECURRING",
        totalInstallments: transaction.totalInstallments ?? 1,
      })
    }
  }, [transaction])

  return (
    <div className="flex-1 flex flex-col justify-between">
      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        <ToggleGroup
          type="single"
          value={type}
          className="flex items-center w-full gap-4"
          onValueChange={(value) => setType(value)}
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
            value={formik.values.value}
            onChange={(value) => {
              formik.setFieldValue(
                "value",
                formatCurrencyFloat(value.target.value)
              )
            }}
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
            type={type}
            value={Number(formik.values.categoryId)}
            onSelect={(categoryId) =>
              formik.setFieldValue("categoryId", categoryId)
            }
          />
        </div>

        <div>
          <Label className="font-bold">Escolha uma conta</Label>
          <Select.Account
            columnCount={2}
            value={Number(formik.values.accountId)}
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

        <div>
          <Label className="font-bold">Já foi pago?</Label>
          <SelectBase
            value={String(formik.values.paid)}
            onValueChange={(value) => formik.setFieldValue("paid", value)}
          >
            <SelectTrigger id="paid">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Não</SelectItem>
              <SelectItem value="1">Sim</SelectItem>
            </SelectContent>
          </SelectBase>
        </div>
      </form>

      <Button
        type="submit"
        className="w-full"
        disabled={!formik.isValid || formik.isSubmitting}
      >
        {formik.isSubmitting ? <Loader /> : "Salvar"}
      </Button>
    </div>
  )
}
