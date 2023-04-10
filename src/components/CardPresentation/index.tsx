import { Box, Button, Heading, Text } from "native-base"

export const CardPresentation = () => {
  return (
    <Box bg="gray.100" p="16px" borderRadius="8px" flexDir="column" gap="16px">
      <Heading>My Contacts</Heading>
      <Text>Gerencie seus contatos de um jeito inovador.</Text>
      <Button bg="cyan.600" fontWeight="bold">
        Inscrever-se
      </Button>
    </Box>
  )
}
