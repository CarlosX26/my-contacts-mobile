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
  VStack,
} from "native-base"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuthContext } from "../../contexts/auth"
import { RegisterUser } from "../../validations/types"
import { RegisterUserForm } from "../../validations/userForm"

export const CardRegister = () => {
  const { register, toggleCard } = useAuthContext()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>({
    resolver: zodResolver(RegisterUserForm),
  })

  const submit = (data: RegisterUser) => {
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
            <VStack space="4">
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
            </VStack>
          </FormControl>
        </Stack>
      </Box>
    </PresenceTransition>
  )
}
