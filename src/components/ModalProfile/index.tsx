import { Avatar, Center, Heading, Modal, VStack, Text } from "native-base"
import { useUserContext } from "../../contexts/user"

export const ModalProfile = () => {
  const { showModal, setShowModal, user } = useUserContext()

  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content marginBottom="auto" top="20">
          <Modal.CloseButton />
          <Modal.Header>Perfil</Modal.Header>
          <Modal.Body>
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
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  )
}
