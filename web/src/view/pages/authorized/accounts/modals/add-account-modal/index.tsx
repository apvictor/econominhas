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
import { useAccounts } from "../../contexts"
import { useController } from "./use-controller"
import { Select } from "@/view/components/select"
import { Loader } from "@/view/components/loader"
import { Label } from "@/components/ui/label"

export function AddAccountModal() {
  const { formik } = useController()
  const { openAddModal, setOpenAddModal } = useAccounts()

  return (
    <Drawer open={openAddModal} onOpenChange={setOpenAddModal}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Nova conta</DrawerTitle>
        </DrawerHeader>

        <form
          id="AddAccountModal"
          className="p-4 space-y-5"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex justify-start w-full">
            <div className="flex flex-1 flex-col gap-2">
              <Label className="font-bold">Nome da conta</Label>
              <Input
                name="name"
                placeholder="Digite o nome da conta"
                onBlur={formik.handleBlur}
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 w-fit">
              <Label className="font-bold">Escolha um ícone</Label>
              <Select.Bank
                onSelect={(bank) => {
                  formik.setFieldValue("bank", bank)
                  formik.setFieldValue("name", bank)
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="font-bold">Escolha uma categoria</Label>
            <Select.Category
              type="ACCOUNT"
              onSelect={(categoryId) =>
                formik.setFieldValue("categoryId", categoryId)
              }
            />
          </div>
        </form>

        <DrawerFooter>
          <Button
            type="submit"
            form="AddAccountModal"
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
