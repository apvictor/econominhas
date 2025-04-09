import { useController } from "./use-controller"
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
import { useGlobal } from "@/shared/contexts/global-context"

export function DestroyTransactionModal() {
  const { openTransactionDestroyModal, setOpenTransactionDestroyModal } =
    useGlobal()

  const { handleDestroy } = useController()

  return (
    <AlertDialog
      open={openTransactionDestroyModal}
      onOpenChange={() =>
        setOpenTransactionDestroyModal(!openTransactionDestroyModal)
      }
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              handleDestroy()
            }}
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
