import { View } from "native-base"
import { ContactList } from "../../components/ContactList"
import { NavBar } from "../../components/NavBar"

export const Contacts = () => {
  return (
    <View h="100%">
      <NavBar />
      <ContactList />
    </View>
  )
}
