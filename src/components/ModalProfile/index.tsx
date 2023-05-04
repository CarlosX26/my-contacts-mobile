import {
  Avatar,
  Center,
  Heading,
  Modal,
  VStack,
  Text,
  Button,
  Stack,
  Input,
  Select,
} from "native-base"
import { useUserContext } from "../../contexts/user"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { UpdateUser } from "../../validations/types"
import { UpdateUserForm } from "../../validations/userForm"

type FieldName = "fullName" | "email" | "phoneNumber" | "password"

export const ModalProfile = () => {
  const { showModal, setShowModal, user, updateUser } = useUserContext()
  const [showForm, setShowForm] = useState(false)
  const [field, setField] = useState("")

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateUser>({
    resolver: zodResolver(UpdateUserForm),
  })

  const handleField = (field: string) => {
    setField(field)
    reset()
  }

  const submit = async (data: UpdateUser) => {
    await updateUser(data)
    setShowForm(false)
    setField("")
  }

  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content marginBottom="auto" top="20">
          <Modal.CloseButton />
          <Modal.Header>Perfil</Modal.Header>
          <Modal.Body>
            {!showForm && (
              <VStack space="2" justifyContent="center" alignItems="center">
                <Avatar bg="green.400">
                  {user?.fullName
                    .split(" ")
                    .map((e) => e.split("")[0])
                    .join("")}
                </Avatar>

                <Heading>{user?.fullName}</Heading>
                <Text>{user?.email}</Text>
                <Text>{user?.phoneNumber}</Text>
                <Button onPress={() => setShowForm(true)}>
                  <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    color="gray.100"
                  >
                    Editar perfil
                  </Text>
                </Button>
              </VStack>
            )}

            {showForm && (
              <VStack space="2">
                <Select
                  variant="rounded"
                  selectedValue={field}
                  accessibilityLabel="Selecione o campo desejado"
                  placeholder="Selecione o campo desejado"
                  onValueChange={handleField}
                >
                  <Select.Item label="Nome" value="fullName" />
                  <Select.Item label="Email" value="email" />
                  <Select.Item label="Telefone" value="phoneNumber" />
                  <Select.Item label="Senha" value="password" />
                </Select>

                {Boolean(field) && (
                  <Stack>
                    <Controller
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Input
                          type={field === "password" ? "password" : "text"}
                          onChangeText={onChange}
                          value={value}
                        />
                      )}
                      name={field as FieldName}
                    />
                  </Stack>
                )}

                {errors[field as FieldName] && (
                  <Text color="red.400" fontSize="sm">
                    * {errors[field as FieldName]?.message}
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
    </Center>
  )
}
