import { Avatar, Box, Heading, Menu, Pressable } from "native-base"
import { useAuthContext } from "../../contexts/auth"

export const NavBar = () => {
  const { logout } = useAuthContext()

  return (
    <Box
      bg="cyan.600"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      p="16px"
      h="10%"
    >
      <Heading color="gray.100">My Contacts</Heading>
      <Menu
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <Avatar bg="green.400">CJ</Avatar>
            </Pressable>
          )
        }}
      >
        <Menu.Item>Ver perfil</Menu.Item>
        <Menu.Item onPress={logout}>Sair</Menu.Item>
      </Menu>
    </Box>
  )
}
