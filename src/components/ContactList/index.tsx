import { Box, FlatList, Spacer } from "native-base"
import { CardContact } from "../CardContact"
import { useContactsContext } from "../../contexts/contacts"

export const ContactList = () => {
  const { contacts } = useContactsContext()

  return (
    <Box bg="gray.600" p="16px" h="90%">
      <FlatList
        data={contacts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardContact contact={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Box h="16px" />}
      />
    </Box>
  )
}
