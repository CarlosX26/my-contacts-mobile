import { createContext, useContext } from "react"
import { Login } from "../components/CardLogin"
import { Register } from "../components/CardRegister"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "../services/api"

interface AuthContext {
  login(dataLogin: Login): Promise<void>
  register(dataRegister: Register): Promise<void>
  logout(): Promise<void>
}

interface AuthProviderProps {
  children: React.ReactNode
}

const authContext = createContext({} as AuthContext)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { navigate } = useNavigation()

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

  const logout = async (): Promise<void> => {
    await AsyncStorage.clear()
    navigate("Home")
  }

  return (
    <authContext.Provider value={{ login, register, logout }}>
      {children}
    </authContext.Provider>
  )
}

const useAuthContext = (): AuthContext => useContext(authContext)

export { AuthProvider, useAuthContext }