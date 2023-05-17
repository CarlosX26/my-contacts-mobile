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
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { UpdateContact } from "../../validations/types"
import { UpdateContactForm } from "../../validations/contactForm"

export const ModalSeeContact = () => {
  const {
    showModalSeeContact,
    setShowModalSeeContact,
    currentContact,
    updateContact,
    setCurrentContact,
  } = useContactsContext()
  const [showForm, setShowForm] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateContact>({
    resolver: zodResolver(UpdateContactForm),
    values: {
      email: currentContact?.email!,
      fullName: currentContact?.fullName!,
      phoneNumber: currentContact?.phoneNumber!,
    },
  })

  const closeModal = () => {
    setShowForm(false)
    setShowModalSeeContact(false)
    setCurrentContact(null)
  }

  const submit = async (data: UpdateContact) => {
    await updateContact(currentContact?.id!, data)
    closeModal()
  }

  return (
    <Modal isOpen={showModalSeeContact} onClose={closeModal}>
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
              <Button onPress={() => setShowForm(true)}>
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
                    <Input type="text" onChangeText={onChange} value={value} />
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
                    <Input type="text" onChangeText={onChange} value={value} />
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
                    <Input type="text" onChangeText={onChange} value={value} />
                  )}
                  name="phoneNumber"
                />
              </Stack>
              {errors.phoneNumber && (
                <Text color="red.400" fontSize="sm">
                  * {errors.phoneNumber.message}
                </Text>
              )}
              <Button onPress={handleSubmit(submit)}>
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
