import { createContext, useContext, useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { ContactSchema } from "../components/ModalContact"
import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "../services/api"

interface ContactsContext {
  contacts: Contact[]
  createContact(contactData: ContactSchema): Promise<void>
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  deleteContact(contactId: string): Promise<void>
}

interface ContactsProviderProps {
  children: React.ReactNode
}

export interface Contact {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  createdAt: string
}

const contactsContext = createContext({} as ContactsContext)

const ContactsProvider = ({ children }: ContactsProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [showModal, setShowModal] = useState(false)
  const { navigate } = useNavigation()

  useEffect(() => {
    ;(async () => {
      await getContacts()
    })()
  }, [])

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

  const createContact = async (contactData: ContactSchema): Promise<void> => {
    try {
      const token = await AsyncStorage.getItem("@myContactsToken")
      const { data } = await api.post("/contacts", contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setContacts([...contacts, data])
      setShowModal(false)
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

  return (
    <contactsContext.Provider
      value={{
        contacts,
        createContact,
        showModal,
        setShowModal,
        deleteContact,
      }}
    >
      {children}
    </contactsContext.Provider>
  )
}

const useContactsContext = (): ContactsContext => useContext(contactsContext)

export { ContactsProvider, useContactsContext }
