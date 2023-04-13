import { createContext, useContext } from "react"
import { Login } from "../components/CardLogin"
import api from "../services/api"
import { Register } from "../components/CardRegister"

interface ContactsContext {
  login(dataLogin: Login): Promise<void>
  register(dataRegister: Register): Promise<void>
}

interface ContactsProviderProps {
  children: React.ReactNode
}

const contactsContext = createContext({} as ContactsContext)

const ContactsProvider = ({ children }: ContactsProviderProps) => {
  const login = async (dataLogin: Login): Promise<void> => {
    try {
      const { data } = await api.post("/auth", dataLogin, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const register = async (dataRegister: Register): Promise<void> => {
    try {
      const { data } = await api.post("/clients", dataRegister, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <contactsContext.Provider value={{ login, register }}>
      {children}
    </contactsContext.Provider>
  )
}

const useContactsContext = (): ContactsContext => useContext(contactsContext)

export { ContactsProvider, useContactsContext }
