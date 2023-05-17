import { z } from "zod"

const LoginForm = z.object({
  email: z
    .string({
      required_error: "Campo vazio",
    })
    .trim()
    .email("Email inválido"),
  password: z
    .string({
      required_error: "Campo vazio",
    })
    .nonempty("Campo vazio"),
})

export { LoginForm }
