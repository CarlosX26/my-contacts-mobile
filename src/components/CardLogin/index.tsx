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
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAuthContext } from "../../contexts/auth"

interface CardLoginProps {
  toggleCard(card: string): void
}

const LoginSchema = z.object({
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

export type Login = z.infer<typeof LoginSchema>

export const CardLogin = ({ toggleCard }: CardLoginProps) => {
  const { login } = useAuthContext()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(LoginSchema),
  })

  const submit = (data: Login) => {
    login(data)
  }

  return (
    <PresenceTransition
      visible
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Box bg="gray.100" p="4" borderRadius="lg">
        <Stack space="4">
          <Heading>Login</Heading>
          <FormControl>
            <Stack space="4">
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
                  Login
                </Text>
              </Button>

              <Box flexDir="row">
                <Text>Não possui cadastro?</Text>

                <Link onPress={() => toggleCard("register")}>
                  <Text color="cyan.600" pl="1">
                    cadastre-se
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
