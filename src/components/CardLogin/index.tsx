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

export const CardLogin = () => {
  return (
    <Box bg="gray.100" p="16px" borderRadius="8px">
      <Stack space="16px">
        <Heading>Login</Heading>
        <FormControl>
          <Stack space="16px">
            <Stack>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                variant="rounded"
                type="text"
                placeholder="Digite seu email"
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
                Login
              </Text>
            </Button>

            <Box flexDir="row">
              <Text>Não possui cadastro?</Text>

              <Link>
                <Text color="cyan.600" pl="4px">
                  cadastre-se
                </Text>
              </Link>
            </Box>
          </Stack>
        </FormControl>
      </Stack>
    </Box>
  )
}
