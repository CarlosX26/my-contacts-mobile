import { z } from "zod"
import { LoginForm } from "./loginForm"
import { RegisterUserForm, UpdateUserForm } from "./userForm"
import { RegisterContactForm, UpdateContactForm } from "./contactForm"

type Login = z.infer<typeof LoginForm>

type RegisterUser = z.infer<typeof RegisterUserForm>

type UpdateUser = z.infer<typeof UpdateUserForm>

type RegisterContact = z.infer<typeof RegisterContactForm>

type UpdateContact = z.infer<typeof UpdateContactForm>

export { Login, RegisterUser, UpdateUser, RegisterContact, UpdateContact }
