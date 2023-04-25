import {
  Avatar,
  Box,
  Button,
  HStack,
  Heading,
  Text,
  Icon,
  Pressable,
} from "native-base"
import { Feather } from "@expo/vector-icons"
import { Contact, useContactsContext } from "../../contexts/contacts"

interface CardContactProps {
  contact: Contact
}

export const CardContact = ({ contact }: CardContactProps) => {
  const { deleteContact, selectContact } = useContactsContext()

  return (
    <Pressable
      _pressed={{
        style: {
          transform: [
            {
              scale: 0.96,
            },
          ],
        },
      }}
      onPress={() => selectContact(contact)}
    >
      <HStack
        bg="gray.100"
        space="4"
        position="relative"
        p="4"
        borderRadius="lg"
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
          top="2"
          right="2"
          bg="gray.200"
          onPress={() => deleteContact(contact.id)}
          _pressed={{ bg: "gray.300" }}
        >
          <Icon color="red.500" as={Feather} name="trash-2" />
        </Button>
      </HStack>
    </Pressable>
  )
}
