import { z } from "zod"

const LoginForm = z.object({
  email: z
    .string({
      required_error: "Campo vazio",
    })
    .email("Email inválido"),
  password: z
    .string({
      required_error: "Campo vazio",
    })
    .nonempty(),
})

export { LoginForm }
