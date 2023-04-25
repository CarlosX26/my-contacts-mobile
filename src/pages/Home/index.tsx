import { View } from "native-base"
import { CardPresentation } from "../../components/CardPresentation"
import { CardLogin } from "../../components/CardLogin"
import { CardRegister } from "../../components/CardRegister"
import { useAuthContext } from "../../contexts/auth"

export const Home = () => {
  const { card } = useAuthContext()
  return (
    <View bg="gray.600" h="100%" px="4" justifyContent="center">
      {!card && <CardPresentation />}

      {card === "login" && <CardLogin />}
      {card === "register" && <CardRegister />}
    </View>
  )
}
