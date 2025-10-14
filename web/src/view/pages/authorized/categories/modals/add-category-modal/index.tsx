import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { useCategories } from "../../contexts"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { useController } from "./use-controller"
import { Select } from "@/view/components/select"
import { Loader } from "@/view/components/loader"
import { Label } from "@/components/ui/label"

export function AddCategoryModal() {
  const { formik } = useController()
  const { openAddModal, setOpenAddModal } = useCategories()

  return (
    <Drawer open={openAddModal} onOpenChange={setOpenAddModal}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Nova categoria</DrawerTitle>
        </DrawerHeader>

        <form
          id="AddCategoryModal"
          className="p-4 space-y-5"
          onSubmit={formik.handleSubmit}
        >
          <ToggleGroup
            type="single"
            defaultValue={formik.values.type}
            onValueChange={(value) => formik.setFieldValue("type", value)}
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
            <ToggleGroupItem
              value="ACCOUNT"
              className="flex-1 border border-blue-400 data-[state='on']:!bg-blue-800 rounded min-h-9"
            >
              Contas
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="flex justify-start w-full gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <Label className="font-bold">Nome da categoria</Label>
              <Input
                name="name"
                placeholder="Ex. Educação"
                onBlur={formik.handleBlur}
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="font-bold">Escolha um ícone</Label>
              <Select.Icon
                onSelect={(icon) => formik.setFieldValue("icon", icon)}
              />
            </div>
          </div>
        </form>

        <DrawerFooter>
          <Button
            type="submit"
            form="AddCategoryModal"
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
