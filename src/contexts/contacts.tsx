import { createContext, useContext, useEffect, useState } from "react"
import api from "../services/api"

interface ContactsContext {
  contacts: Contact[]
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

  useEffect(() => {
    ;(async () => {
      await getContacts()
    })()
  }, [])

  const getContacts = async () => {
    try {
      const { data } = await api.get("/contacts", {
        headers: {
          Authorization: "",
        },
      })
      setContacts(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <contactsContext.Provider value={{ contacts }}>
      {children}
    </contactsContext.Provider>
  )
}

const useContactsContext = (): ContactsContext => useContext(contactsContext)

export { ContactsProvider, useContactsContext }
