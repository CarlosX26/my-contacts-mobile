import {
  Avatar,
  Box,
  Button,
  HStack,
  Heading,
  Text,
  Icon,
  Pressable,
  AlertDialog,
} from "native-base"
import { Feather } from "@expo/vector-icons"
import { useContactsContext } from "../../contexts/contacts"
import { useRef, useState } from "react"
import { Contact } from "../../contexts/types"

interface CardContactProps {
  contact: Contact
}

export const CardContact = ({ contact }: CardContactProps) => {
  const { deleteContact, selectContact } = useContactsContext()
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => setIsOpen(false)

  const cancelRef = useRef(null)

  return (
    <>
      <Pressable
        _pressed={{
          style: {
            transform: [
              {
                scale: 0.98,
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
            onPress={() => setIsOpen(true)}
            _pressed={{ bg: "gray.300" }}
          >
            <Icon color="red.500" as={Feather} name="trash-2" />
          </Button>
        </HStack>
      </Pressable>

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Excluir contato</AlertDialog.Header>
          <AlertDialog.Body>
            Você tem certeza de que deseja excluir este contato?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancelar
              </Button>
              <Button
                colorScheme="danger"
                onPress={() => {
                  onClose()
                  deleteContact(contact.id)
                }}
              >
                Confirmar
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  )
}
