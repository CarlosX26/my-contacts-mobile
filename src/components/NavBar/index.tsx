import { Avatar, Box, Heading } from "native-base"

export const NavBar = () => {
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
      <Avatar bg="green.400">CJ</Avatar>
    </Box>
  )
}
