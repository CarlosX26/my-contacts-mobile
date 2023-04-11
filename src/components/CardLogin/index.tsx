import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
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
                placeholder="Digite seu Email"
              />
            </Stack>

            <Stack>
              <FormControl.Label>Password</FormControl.Label>
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
          </Stack>
        </FormControl>
      </Stack>
    </Box>
  )
}
