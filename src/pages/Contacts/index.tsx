import { View } from "native-base"
import { ContactList } from "../../components/ContactList"
import { NavBar } from "../../components/NavBar"
import { ContactsProvider } from "../../contexts/contacts"

export const Contacts = () => {
  return (
    <View h="100%">
      <ContactsProvider>
        <NavBar />
        <ContactList />
      </ContactsProvider>
    </View>
  )
}
