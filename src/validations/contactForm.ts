import { z } from "zod"

const RegisterContactForm = z.object({
  fullName: z
    .string({
      required_error: "Campo vazio",
    })
    .max(128, "Máximo 128 caractere")
    .nonempty("Campo vazio"),
  email: z
    .string({
      required_error: "Campo vazio",
    })
    .email()
    .max(128, "Máximo 128 caractere")
    .nonempty("Campo vazio"),
  phoneNumber: z
    .string({
      required_error: "Campo vazio",
    })
    .min(11, "Número inválido")
    .max(11, "Número inválido")
    .nonempty("Campo vazio"),
})

const UpdateContactForm = RegisterContactForm.extend({})

export { RegisterContactForm, UpdateContactForm }
