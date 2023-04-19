import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { Home } from "../pages/Home"
import { Contacts } from "../pages/Contacts"
import { AuthProvider } from "../contexts/auth"
import { UserProvider } from "../contexts/user"

export type RootStackParamList = {
  Home: undefined
  Contacts: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <UserProvider>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Contacts" component={Contacts} />
          </Stack.Navigator>
        </UserProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}
