import { Box, Button, Heading, Image, Stack, Text } from "native-base"
import { useAuthContext } from "../../contexts/auth"
import logo from "../../../assets/logo.png"

export const CardPresentation = () => {
  const { toggleCard } = useAuthContext()

  return (
    <>
      <Box bg="gray.100" p="4" borderRadius="lg">
        <Image
          source={logo}
          alt="logo contacts"
          w={"40"}
          height={"40"}
          mx="auto"
          mb="4"
        />

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
    </>
  )
}
