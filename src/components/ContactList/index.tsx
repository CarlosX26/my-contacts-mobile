import { Box, Fab, FlatList, Icon } from "native-base"
import { CardContact } from "../CardContact"
import { useContactsContext } from "../../contexts/contacts"
import { Feather } from "@expo/vector-icons"

export const ContactList = () => {
  const { contacts, setShowModalNewContact } = useContactsContext()

  return (
    <Box bg="gray.600" p="4" flex="1">
      <FlatList
        data={contacts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardContact contact={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Box h="4" />}
      />
      <Fab
        onPress={() => setShowModalNewContact(true)}
        icon={<Icon as={Feather} name="user-plus" color="gray.100" size="xl" />}
      />
    </Box>
  )
}
