import { createContext, useContext, useEffect, useState } from "react"
import { useNavigation, StackActions } from "@react-navigation/native"
import { User, UserContext, ProviderProps } from "./types"
import { UpdateUser } from "../validations/types"
import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "../services/api"

const userContext = createContext({} as UserContext)

const UserProvider = ({ children }: ProviderProps) => {
  const [showModal, setShowModal] = useState(false)
  const [user, setUser] = useState<User>()
  const { dispatch } = useNavigation()

  useEffect(() => {
    ;(async () => {
      const token = await AsyncStorage.getItem("@myContactsToken")

      if (token) {
        await getUser(token)
      }
    })()
  }, [])

  const getUser = async (token: string): Promise<void> => {
    try {
      const { data } = await api.get("/clients/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setUser(data)
      dispatch(StackActions.replace("Contacts"))
    } catch (error) {
      dispatch(StackActions.replace("Home"))
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
