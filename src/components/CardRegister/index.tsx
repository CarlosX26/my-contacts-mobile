import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "native-base"

interface CardRegisterProps {
  toggleCard(card: string): void
}

export const CardRegister = ({ toggleCard }: CardRegisterProps) => {
  return (
    <Box bg="gray.100" p="16px" borderRadius="8px">
      <Stack space="16px">
        <Heading>Cadastro</Heading>
        <FormControl>
          <Stack space="16px">
            <Stack>
              <FormControl.Label>Nome</FormControl.Label>
              <Input
                variant="rounded"
                type="text"
                placeholder="Digite seu nome"
              />
            </Stack>
            <Stack>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                variant="rounded"
                type="text"
                placeholder="Digite seu email"
              />
            </Stack>
            <Stack>
              <FormControl.Label>Telefone</FormControl.Label>
              <Input
                variant="rounded"
                type="text"
                placeholder="Digite seu número de telefone"
              />
            </Stack>

            <Stack>
              <FormControl.Label>Senha</FormControl.Label>
              <Input
                variant="rounded"
                type="password"
                placeholder="Digite sua senha"
              />
            </Stack>

            <Button borderRadius="full" bg="cyan.600">
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
                <Text color="cyan.600" pl="4px">
                  login
                </Text>
              </Link>
            </Box>
          </Stack>
        </FormControl>
      </Stack>
    </Box>
  )
}
