import { NativeBaseProvider, StatusBar } from "native-base"
import { Home } from "./src/pages/Home"
import { useFonts } from "expo-font"
import { theme } from "./src/styles/theme"

export default function App() {
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Italic": require("./assets/fonts/Rubik-Italic.ttf"),
    "Rubik-SemiBold": require("./assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar />
      <Home />
    </NativeBaseProvider>
  )
}
