import { createContext, useContext, useEffect, useState } from "react"
import api from "../services/api"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"

interface User {
  fullName: string
  email: string
  phoneNumber: string
  createdAt: string
  id: string
}

interface UserContext {
  user: User | undefined
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface UserProviderProps {
  children: React.ReactNode
}

const userContext = createContext({} as UserContext)

const UserProvider = ({ children }: UserProviderProps) => {
  const [showModal, setShowModal] = useState(false)
  const [user, setUser] = useState<User>()
  const { navigate } = useNavigation()

  useEffect(() => {
    ;(async () => {
      await getUser()
    })()
  }, [])

  const getUser = async () => {
    try {
      const token = await AsyncStorage.getItem("@myContactsToken")

      const { data } = await api.get("/clients/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setUser(data)
      navigate("Contacts")
    } catch (error) {
      navigate("Home")
      console.log(error)
    }
  }

  return (
    <userContext.Provider value={{ showModal, setShowModal, user }}>
      {children}
    </userContext.Provider>
  )
}

const useUserContext = (): UserContext => useContext(userContext)

export { UserProvider, useUserContext }
