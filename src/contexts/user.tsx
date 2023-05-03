import { createContext, useContext, useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { User, UserContext, ProviderProps } from "./types"
import { UpdateUser } from "../validations/types"
import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "../services/api"

const userContext = createContext({} as UserContext)

const UserProvider = ({ children }: ProviderProps) => {
  const [showModal, setShowModal] = useState(false)
  const [user, setUser] = useState<User>()
  const { navigate } = useNavigation()

  useEffect(() => {
    ;(async () => {
      await getUser()
    })()
  }, [])

  const getUser = async (): Promise<void> => {
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

  const updateUser = async (dataUser: UpdateUser): Promise<void> => {
    try {
      const token = await AsyncStorage.getItem("@myContactsToken")

      const { data } = await api.patch("/clients/profile", dataUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <userContext.Provider value={{ showModal, setShowModal, user, updateUser }}>
      {children}
    </userContext.Provider>
  )
}

const useUserContext = (): UserContext => useContext(userContext)

export { UserProvider, useUserContext }
