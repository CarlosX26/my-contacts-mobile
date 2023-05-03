import { createContext, useContext, useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { RegisterContact, UpdateContact } from "../validations/types"
import { Contact, ContactsContext, ProviderProps } from "./types"
import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "../services/api"

const contactsContext = createContext({} as ContactsContext)

const ContactsProvider = ({ children }: ProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [currentContact, setCurrentContact] = useState<Contact>()
  const [showModalNewContact, setShowModalNewContact] = useState(false)
  const [showModalSeeContact, setShowModalSeeContact] = useState(false)
  const { navigate } = useNavigation()

  useEffect(() => {
    ;(async () => {
      await getContacts()
    })()
  }, [])

  const selectContact = (contact: Contact): void => {
    setCurrentContact(contact)
    setShowModalSeeContact(true)
  }

  const getContacts = async (): Promise<void> => {
    try {
      const token = await AsyncStorage.getItem("@myContactsToken")
      const { data } = await api.get("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setContacts(data)
    } catch (error) {
      navigate("Home")
      console.log(error)
    }
  }

  const createContact = async (contactData: RegisterContact): Promise<void> => {
    try {
      const token = await AsyncStorage.getItem("@myContactsToken")
      const { data } = await api.post("/contacts", contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setContacts([...contacts, data])
      setShowModalNewContact(false)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteContact = async (contactId: string): Promise<void> => {
    try {
      const token = await AsyncStorage.getItem("@myContactsToken")
      await api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const removedContact = contacts.filter((e) => e.id !== contactId)
      setContacts(removedContact)
    } catch (error) {
      console.log(error)
    }
  }

  const updateContact = async (
    contactId: string,
    contactData: UpdateContact
  ): Promise<void> => {
    try {
      const token = await AsyncStorage.getItem("@myContactsToken")
      const { data } = await api.patch(`/contacts/${contactId}`, contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const updatedContact = contacts.map((e) =>
        e.id === contactId ? data : e
      )
      setContacts(updatedContact)
      setShowModalSeeContact(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <contactsContext.Provider
      value={{
        contacts,
        currentContact,
        createContact,
        showModalNewContact,
        setShowModalNewContact,
        deleteContact,
        showModalSeeContact,
        setShowModalSeeContact,
        selectContact,
        updateContact,
      }}
    >
      {children}
    </contactsContext.Provider>
  )
}

const useContactsContext = (): ContactsContext => useContext(contactsContext)

export { ContactsProvider, useContactsContext }
