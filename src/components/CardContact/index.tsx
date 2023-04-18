import { Avatar, Box, Button, HStack, Heading, Text, Icon } from "native-base"
import { Feather } from "@expo/vector-icons"
import { Contact } from "../../contexts/contacts"

interface CardContactProps {
  contact: Contact
}

export const CardContact = ({ contact }: CardContactProps) => {
  return (
    <HStack
      bg="gray.100"
      space="16px"
      position="relative"
      p="16px"
      borderRadius="8px"
    >
      <Avatar>
        {contact.fullName
          .split(" ")
          .map((e) => e.split("")[0])
          .join("")}
      </Avatar>
      <Box>
        <Heading>{contact.fullName}</Heading>
        <Text>{contact.email}</Text>
        <Text>{contact.phoneNumber}</Text>
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
