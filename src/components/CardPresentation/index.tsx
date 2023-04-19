import { Box, Button, Heading, Stack, Text } from "native-base"

interface CardPresentationProps {
  toggleCard(card: string): void
}

export const CardPresentation = ({ toggleCard }: CardPresentationProps) => {
  return (
    <Box bg="gray.100" p="4" borderRadius="lg">
      <Stack space="4">
        <Heading>My Contacts</Heading>

        <Text>Gerencie seus contatos de um jeito inovador.</Text>

        <Button
          bg="cyan.600"
          borderRadius="full"
          onPress={() => toggleCard("login")}
        >
          <Text fontWeight="bold" textTransform="uppercase" color="gray.100">
            Login
          </Text>
        </Button>
        <Button
          bg="cyan.600"
          borderRadius="full"
          onPress={() => toggleCard("register")}
        >
          <Text fontWeight="bold" textTransform="uppercase" color="gray.100">
            Inscreva-se
          </Text>
        </Button>
      </Stack>
    </Box>
  )
}
