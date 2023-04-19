import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Link,
  PresenceTransition,
  Stack,
  Text,
} from "native-base"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAuthContext } from "../../contexts/auth"

interface CardRegisterProps {
  toggleCard(card: string): void
}

const RegisterSchema = z.object({
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

export type Register = z.infer<typeof RegisterSchema>

export const CardRegister = ({ toggleCard }: CardRegisterProps) => {
  const { register } = useAuthContext()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
  })

  const submit = (data: Register) => {
    register(data)
  }

  return (
    <PresenceTransition
      visible
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Box bg="gray.100" p="4" borderRadius="lg">
        <Stack space="4">
          <Heading>Cadastro</Heading>
          <FormControl>
            <Stack space="4">
              <Stack>
                <FormControl.Label>Nome</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      variant="rounded"
                      type="text"
                      placeholder="Digite seu nome"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="fullName"
                />
              </Stack>
              {errors.fullName && (
                <Text color="red.400" fontSize="md">
                  * {errors.fullName.message}
                </Text>
              )}
              <Stack>
                <FormControl.Label>Email</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      variant="rounded"
                      type="text"
                      placeholder="Digite seu email"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="email"
                />
              </Stack>
              {errors.email && (
                <Text color="red.400" fontSize="md">
                  * {errors.email.message}
                </Text>
              )}
              <Stack>
                <FormControl.Label>Telefone</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      variant="rounded"
                      type="text"
                      placeholder="Digite seu número de telefone"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="phoneNumber"
                />
              </Stack>
              {errors.phoneNumber && (
                <Text color="red.400" fontSize="md">
                  * {errors.phoneNumber.message}
                </Text>
              )}
              <Stack>
                <FormControl.Label>Senha</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      variant="rounded"
                      type="password"
                      placeholder="Digite sua senha"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="password"
                />
              </Stack>
              {errors.password && (
                <Text color="red.400" fontSize="md">
                  * {errors.password.message}
                </Text>
              )}

              <Button
                borderRadius="full"
                bg="cyan.600"
                onPress={handleSubmit(submit)}
              >
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="gray.100"
                >
                  Cadastrar
                </Text>
              </Button>

              <Box flexDir="row">
                <Text>Já possui cadastro?</Text>

                <Link onPress={() => toggleCard("login")}>
                  <Text color="cyan.600" pl="1">
                    login
                  </Text>
                </Link>
              </Box>
            </Stack>
          </FormControl>
        </Stack>
      </Box>
    </PresenceTransition>
  )
}
