import { createContext, useContext, useState } from "react"

interface UserContext {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface UserProviderProps {
  children: React.ReactNode
}

const userContext = createContext({} as UserContext)

const UserProvider = ({ children }: UserProviderProps) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <userContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </userContext.Provider>
  )
}

const useUserContext = (): UserContext => useContext(userContext)

export { UserProvider, useUserContext }
