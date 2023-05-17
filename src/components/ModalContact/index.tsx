import {
  Button,
  FormControl,
  Input,
  Modal,
  Stack,
  VStack,
  Text,
} from "native-base"
import { useContactsContext } from "../../contexts/contacts"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterContact } from "../../validations/types"
import { RegisterContactForm } from "../../validations/contactForm"

export const ModalContact = () => {
  const { createContact, showModalNewContact, setShowModalNewContact } =
    useContactsContext()
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterContact>({
    resolver: zodResolver(RegisterContactForm),
  })

  const submit = async (data: RegisterContact) => {
    await createContact(data)
    reset()
  }

  return (
    <Modal
      isOpen={showModalNewContact}
      onClose={() => setShowModalNewContact(false)}
    >
      <Modal.Content marginBottom="auto" top="20">
        <Modal.CloseButton />
        <Modal.Header>Adicionar contato</Modal.Header>
        <Modal.Body>
          <FormControl>
            <VStack space="4">
              <Stack>
                <FormControl.Label>Nome</FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type="text"
                      placeholder="Nome do contato"
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
                      type="text"
                      placeholder="Email do contato"
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
                      type="text"
                      placeholder="Digite o telefone do contato"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="phoneNumber"
                />
              </Stack>
              {errors.email && (
                <Text color="red.400" fontSize="sm">
                  * {errors.email.message}
                </Text>
              )}

              <Button onPress={handleSubmit(submit)}>
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="gray.100"
                >
                  Adicionar contato
                </Text>
              </Button>
            </VStack>
          </FormControl>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  )
}
