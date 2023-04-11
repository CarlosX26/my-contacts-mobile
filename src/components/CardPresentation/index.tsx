import { Box, Button, Heading, Stack, Text } from "native-base"

export const CardPresentation = () => {
  return (
    <Box bg="gray.100" p="16px" borderRadius="8px">
      <Stack space="16px">
        <Stack>
          <Heading>My Contacts</Heading>
        </Stack>
        <Stack>
          <Text>Gerencie seus contatos de um jeito inovador.</Text>
        </Stack>
        <Stack>
          <Button bg="cyan.600">
            <Text fontWeight="bold" textTransform="uppercase" color="gray.100">
              Inscreva-se
            </Text>
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
