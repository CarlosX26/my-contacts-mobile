import { Avatar, Box, Button, HStack, Heading, Text, Icon } from "native-base"
import { Feather } from "@expo/vector-icons"

// interface CardContactProps {
//   fullName: string
//   email: string
//   phoneNumber: string
//   createdAt: string
//   id: number
// }

export const CardContact = () => {
  return (
    <HStack
      bg="gray.100"
      space="16px"
      position="relative"
      p="16px"
      borderRadius="8px"
    >
      <Avatar>{"fullName"}</Avatar>
      <Box>
        <Heading>{"fullName"}</Heading>
        <Text>{"email"}</Text>
        <Text>{"phoneNumber"}</Text>
      </Box>
      <Button
        position="absolute"
        top="8px"
        right="8px"
        bg="gray.200"
        _pressed={{ bg: "gray.300" }}
      >
        <Icon color="red.500" as={Feather} name="trash-2" />
      </Button>
    </HStack>
  )
}
