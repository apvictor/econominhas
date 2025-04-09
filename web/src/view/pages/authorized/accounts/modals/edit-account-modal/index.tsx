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
import { useEffect } from "react"
import { Loader } from "@/view/components/loader"
import { Icon } from "@/view/components/icon"
import { Label } from "@/components/ui/label"

export function EditAccountModal() {
  const { formik } = useController()
  const {
    account,
    openEditModal,
    setOpenEditModal,
    setOpenDestroyModal,
    openDestroyModal,
  } = useAccounts()

  useEffect(() => {
    formik.setValues({
      name: account?.name || "",
      bank: account?.bank || "Circle",
      categoryId: account?.categoryId || 0,
    })
  }, [account])

  return (
    <Drawer open={openEditModal} onOpenChange={setOpenEditModal}>
      <DrawerContent>
        <DrawerHeader className="flex items-center justify-between">
          <div className="w-[50px] h-9" />
          <DrawerTitle>Editar conta</DrawerTitle>
          <Button
            variant={"ghost"}
            className="!text-red-400"
            onClick={() => setOpenDestroyModal(!openDestroyModal)}
          >
            <Icon name="Trash2" />
          </Button>
        </DrawerHeader>

        <form
          id="EditAccountModal"
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
                value={formik.values.bank}
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
              value={formik.values.categoryId}
              onSelect={(categoryId) =>
                formik.setFieldValue("categoryId", categoryId)
              }
            />
          </div>
        </form>

        <DrawerFooter>
          <Button
            type="submit"
            form="EditAccountModal"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? <Loader /> : "Salvar"}
          </Button>
          <DrawerClose asChild>
            <Button variant={"ghost"} type="button">
              Cancelar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
