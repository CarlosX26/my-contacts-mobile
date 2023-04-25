import { View } from "native-base"
import { ContactList } from "../../components/ContactList"
import { NavBar } from "../../components/NavBar"
import { ContactsProvider } from "../../contexts/contacts"
import { ModalProfile } from "../../components/ModalProfile"
import { ModalContact } from "../../components/ModalContact"
import { ModalSeeContact } from "../../components/ModalSeeContact"
import { UserProvider } from "../../contexts/user"

export const Contacts = () => {
  return (
    <View flex="1">
      <UserProvider>
        <ContactsProvider>
          <NavBar />
          <ContactList />
          <ModalContact />
          <ModalSeeContact />
        </ContactsProvider>
        <ModalProfile />
      </UserProvider>
    </View>
  )
}
