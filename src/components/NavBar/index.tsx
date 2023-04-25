import { Avatar, Box, Heading, Menu, Pressable } from "native-base"
import { useAuthContext } from "../../contexts/auth"
import { useUserContext } from "../../contexts/user"

export const NavBar = () => {
  const { logout } = useAuthContext()
  const { setShowModal, user } = useUserContext()

  return (
    <Box
      bg="cyan.600"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      p="4"
    >
      <Heading color="gray.100">My Contacts</Heading>
      <Menu
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <Avatar bg="green.400">
                {user?.fullName
                  .split(" ")
                  .map((e) => e.split("")[0])
                  .join("")}
              </Avatar>
            </Pressable>
          )
        }}
      >
        <Menu.Item onPress={() => setShowModal(true)}>Ver perfil</Menu.Item>
        <Menu.Item onPress={logout}>Sair</Menu.Item>
      </Menu>
    </Box>
  )
}
