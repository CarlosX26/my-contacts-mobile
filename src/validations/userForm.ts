import { z } from "zod"

const RegisterUserForm = z.object({
  fullName: z
    .string({
      required_error: "Campo vazio",
    })
    .min(3, "Mínimo 3 caractere")
    .max(128, "Máximo 128 caractere"),
  email: z
    .string({
      required_error: "Campo vazio",
    })
    .email({
      message: "Email inválido",
    }),
  phoneNumber: z
    .string({
      required_error: "Campo vazio",
    })
    .min(11, "Número inválido")
    .max(11, "Número inválido"),
  password: z
    .string({
      required_error: "Campo vazio",
    })
    .regex(/[A-Z]/, "Mínimo de 1 letra maiúscula.")
    .regex(/[a-z]/, "Mínimo de 1 letra minuscula.")
    .regex(/(\d)/, "Mínimo 1 número.")
    .regex(/(\W)|_/, "Mínimo de 1 caractere especial.")
    .regex(/(.{8,})|_/, "Mínimo de 8 caracteres."),
})

const UpdateUserForm = RegisterUserForm.partial()

export { RegisterUserForm, UpdateUserForm }
