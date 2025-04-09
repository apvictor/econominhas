import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Header } from "./components/header"
import { useAuth } from "@/shared/contexts/auth-context"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useController } from "./use-controller"
import { Button } from "@/components/ui/button"
import { Loader } from "@/view/components/loader"
import { useEffect } from "react"

export function MyProfile() {
  const { user } = useAuth()

  const { formik } = useController()

  useEffect(() => {
    formik.setValues({
      name: user?.name || "",
      email: user?.email || "",
      cpf: user?.cpf || "",
      phone: user?.phone || "",
    })
  }, [])

  return (
    <main className="min-h-screen h-full flex flex-col p-5 space-y-5">
      <Header />

      <div className="flex items-center justify-center">
        <Avatar className="h-28 w-28">
          <AvatarImage className="rounded-full" src={user?.picture} />
          <AvatarFallback className="h-28 w-28 rounded-full bg-teal-900 flex items-center justify-center font-bold uppercase">
            {user?.name[0]}
            {user?.name[1]}
          </AvatarFallback>
        </Avatar>
      </div>

      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        <div>
          <Label>Nome</Label>
          <Input
            name="name"
            placeholder="Nome"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <Label>E-mail</Label>
          <Input
            name="email"
            placeholder="contato@econominhas.com"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <Label>CPF</Label>
          <Input
            name="cpf"
            placeholder="000.000.000-00"
            value={formik.values.cpf}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <Label>Telefone</Label>
          <Input
            name="phone"
            placeholder="(00) 00000-0000"
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          {formik.isSubmitting ? <Loader /> : "Salvar"}
        </Button>
      </form>
    </main>
  )
}
