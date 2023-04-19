import { Avatar, Center, Modal } from "native-base"
import { useUserContext } from "../../contexts/user"

export const ModalProfile = () => {
  const { showModal, setShowModal } = useUserContext()

  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content marginBottom="auto" top="20">
          <Modal.CloseButton />
          <Modal.Header>Perfil</Modal.Header>
          <Modal.Body>
            <Avatar />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  )
}
