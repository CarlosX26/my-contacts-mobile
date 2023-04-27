import {
  Button,
  FormControl,
  Input,
  Modal,
  Stack,
  VStack,
  Text,
  Avatar,
  Heading,
} from "native-base"
import { useContactsContext } from "../../contexts/contacts"
import { Controller, useForm } from "react-hook-form"
import { ContactSchema } from "../ModalContact"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

export const ModalSeeContact = () => {
  const {
    showModalSeeContact,
    setShowModalSeeContact,
    currentContact,
    updateContact,
  } = useContactsContext()
  const [showForm, setShowForm] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(ContactSchema),
    values: {
      email: currentContact?.email!,
      fullName: currentContact?.fullName!,
      phoneNumber: currentContact?.phoneNumber!,
    },
  })

  const submit = async (data: ContactSchema) => {
    await updateContact(currentContact?.id!, data)
    setShowForm(false)
  }

  return (
    <Modal
      isOpen={showModalSeeContact}
      onClose={() => setShowModalSeeContact(false)}
    >
      <Modal.Content marginBottom="auto" top="20">
        <Modal.CloseButton />
        <Modal.Header>Ver contato</Modal.Header>
        <Modal.Body>
          {!showForm && (
            <VStack space="2" justifyContent="center" alignItems="center">
              <Avatar>
                {currentContact?.fullName
                  .split(" ")
                  .map((e) => e.split("")[0])
                  .join("")}
              </Avatar>
              <Heading>{currentContact?.fullName}</Heading>
              <Text>{currentContact?.email}</Text>
              <Text>{currentContact?.phoneNumber}</Text>
              <Button
                borderRadius="full"
                bg="cyan.600"
                onPress={() => setShowForm(true)}
              >
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="gray.100"
                >
                  Editar contato
                </Text>
              </Button>
            </VStack>
          )}

          {showForm && (
            <VStack space="2">
              <Stack>
                <FormControl.Label>Nome</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      variant="rounded"
                      type="text"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="fullName"
                />
              </Stack>
              {errors.fullName && (
                <Text color="red.400" fontSize="sm">
                  * {errors.fullName.message}
                </Text>
              )}
              <Stack>
                <FormControl.Label>Email</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      variant="rounded"
                      type="text"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="email"
                />
              </Stack>
              {errors.email && (
                <Text color="red.400" fontSize="sm">
                  * {errors.email.message}
                </Text>
              )}
              <Stack>
                <FormControl.Label>Telefone</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      variant="rounded"
                      type="text"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="phoneNumber"
                />
              </Stack>
              {errors.phoneNumber && (
                <Text color="red.400" fontSize="sm">
                  * {errors.phoneNumber.message}
                </Text>
              )}
              <Button
                borderRadius="full"
                bg="cyan.600"
                onPress={handleSubmit(submit)}
              >
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="gray.100"
                >
                  Confirmar atualizações
                </Text>
              </Button>
            </VStack>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  )
}
