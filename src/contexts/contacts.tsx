import { createContext, useContext } from "react"

interface ContactsContext {}

interface ContactsProviderProps {
  children: React.ReactNode
}

const contactsContext = createContext({} as ContactsContext)

const ContactsProvider = ({ children }: ContactsProviderProps) => {
  return (
    <contactsContext.Provider value={{}}>{children}</contactsContext.Provider>
  )
}

const useContactsContext = (): ContactsContext => useContext(contactsContext)

export { ContactsProvider, useContactsContext }
