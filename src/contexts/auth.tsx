import { createContext, useContext, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useToast } from "native-base"
import { Login, RegisterUser } from "../validations/types"
import { AuthContext, ProviderProps } from "./types"
import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "../services/api"

const authContext = createContext({} as AuthContext)

const AuthProvider = ({ children }: ProviderProps) => {
  const [card, setCard] = useState("")
  const toast = useToast()
  const { navigate } = useNavigation()

  const toggleCard = (card: string) => {
    setCard(card)
  }

  const login = async (dataLogin: Login): Promise<void> => {
    try {
      const { data } = await api.post("/auth", dataLogin, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      await AsyncStorage.setItem("@myContactsToken", data.token)
      navigate("Contacts")
    } catch (error) {
      toast.show({
        title: "Email ou senha inválidos",
        bg: "red.500",
      })
    }
  }

  const register = async (dataRegister: RegisterUser): Promise<void> => {
    try {
      await api.post("/clients", dataRegister, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      toast.show({
        title: "Cadastro realizado",
      })
      toggleCard("login")
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async (): Promise<void> => {
    await AsyncStorage.clear()
    navigate("Home")
  }

  return (
    <authContext.Provider value={{ login, register, logout, card, toggleCard }}>
      {children}
    </authContext.Provider>
  )
}

const useAuthContext = (): AuthContext => useContext(authContext)

export { AuthProvider, useAuthContext }
