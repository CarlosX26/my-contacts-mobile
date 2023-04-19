import { View } from "native-base"
import { ContactList } from "../../components/ContactList"
import { NavBar } from "../../components/NavBar"
import { ContactsProvider } from "../../contexts/contacts"
import { ModalProfile } from "../../components/ModalProfile"
import { ModalContact } from "../../components/ModalContact"

export const Contacts = () => {
  return (
    <View flex="1">
      <ContactsProvider>
        <NavBar />
        <ContactList />
        <ModalContact />
      </ContactsProvider>
      <ModalProfile />
    </View>
  )
}
