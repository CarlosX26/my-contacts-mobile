import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../pages/Home"
import { Contacts } from "../pages/Contacts"

export type RootStackParamList = {
  Home: undefined
  Contacts: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contacts" component={Contacts} />
    </Stack.Navigator>
  )
}
