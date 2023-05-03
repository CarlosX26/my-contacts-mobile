import { z } from "zod"
import { LoginForm } from "./loginForm"

export type Login = z.infer<typeof LoginForm>
