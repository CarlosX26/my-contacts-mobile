import {
  Button,
  FormControl,
  Input,
  Modal,
  Stack,
  VStack,
  Text,
} from "native-base"
import { z } from "zod"
import { useContactsContext } from "../../contexts/contacts"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const ContactSchema = z.object({
  fullName: z
    .string({
      required_error: "Campo vazio",
    })
    .max(128, "Máximo 128 caractere")
    .nonempty("Campo vazio"),
  email: z
    .string({
      required_error: "Campo vazio",
    })
    .email()
    .max(128, "Máximo 128 caractere")
    .nonempty("Campo vazio"),
  phoneNumber: z
    .string({
      required_error: "Campo vazio",
    })
    .min(11, "Número inválido")
    .max(11, "Número inválido")
    .nonempty("Campo vazio"),
})

export type ContactSchema = z.infer<typeof ContactSchema>

export const ModalContact = () => {
  const { createContact, showModal, setShowModal } = useContactsContext()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(ContactSchema),
  })

  const submit = async (data: ContactSchema) => {
    createContact(data)
  }
  console.log(errors)
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
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
                      variant="rounded"
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
                      variant="rounded"
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
                      variant="rounded"
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
