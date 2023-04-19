import { View } from "native-base"
import { CardPresentation } from "../../components/CardPresentation"
import { CardLogin } from "../../components/CardLogin"
import { CardRegister } from "../../components/CardRegister"
import { useState } from "react"

export const Home = () => {
  const [card, setCard] = useState("")

  const toggleCard = (card: string) => {
    setCard(card)
  }

  return (
    <View bg="gray.600" h="100%" px="4" justifyContent="center">
      {!card && <CardPresentation toggleCard={toggleCard} />}

      {card === "login" && <CardLogin toggleCard={toggleCard} />}
      {card === "register" && <CardRegister toggleCard={toggleCard} />}
    </View>
  )
}
