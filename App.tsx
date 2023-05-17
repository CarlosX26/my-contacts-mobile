import { NativeBaseProvider, StatusBar } from "native-base"
import { useFonts } from "expo-font"
import { theme } from "./src/styles/theme"
import { Routes } from "./src/routes"
import { AuthProvider } from "./src/contexts/auth"
import { UserProvider } from "./src/contexts/user"
import { NavigationContainer } from "@react-navigation/native"

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
      <NavigationContainer>
        <AuthProvider>
          <UserProvider>
            <StatusBar />
            <Routes />
          </UserProvider>
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
