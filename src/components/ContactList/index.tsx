import { Box, Fab, FlatList, Heading, Icon, Text, View } from "native-base"
import { CardContact } from "../CardContact"
import { useContactsContext } from "../../contexts/contacts"
import { Feather } from "@expo/vector-icons"
import LottieView from "lottie-react-native"

export const ContactList = () => {
  const { contacts, setShowModalNewContact } = useContactsContext()

  return (
    <Box bg="gray.600" p="4" flex="1">
      {contacts.length === 0 && (
        <View flexDir="column">
          <View w="100%" alignItems="center" justifyContent="center">
            <Box w="60%" h="60%">
              <LottieView
                source={require("../../../assets/emptylist-friends.json")}
                autoPlay
              />
            </Box>
          </View>
          <Heading color="gray.100" textAlign="center" fontSize="lg">
            Gerencie seus contatos facilmente, adicione novos contatos agora.
          </Heading>
        </View>
      )}

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
