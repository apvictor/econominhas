import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Header } from "./components/header"
import { useAuth } from "@/shared/contexts/auth-context"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useController } from "./use-controller"
import { Button } from "@/components/ui/button"
import { Loader } from "@/view/components/loader"
import { useEffect } from "react"
import { PatternFormat } from "react-number-format"

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

      <div className="h-full flex-1 flex flex-col justify-between">
        <form
          id="form-my-profile"
          className="space-y-5"
          onSubmit={formik.handleSubmit}
        >
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
            <PatternFormat
              name="cpf"
              onBlur={formik.handleBlur}
              value={formik.values.cpf}
              onChange={formik.handleChange}
              format="###.###.###-##"
              placeholder="000.000.000-00"
              customInput={Input}
            />
          </div>

          <div>
            <Label>Telefone</Label>
            <PatternFormat
              name="phone"
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              onChange={formik.handleChange}
              format="(##) #####-####"
              placeholder="(00) 00000-0000"
              customInput={Input}
            />
          </div>
        </form>

        <Button
          type="submit"
          form="form-my-profile"
          className="disabled:bg-white/50"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          {formik.isSubmitting && <Loader />} Salvar
        </Button>
      </div>
    </main>
  )
}
