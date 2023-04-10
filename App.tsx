import { NativeBaseProvider, StatusBar } from "native-base"
import { Home } from "./src/pages/Home"

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Home />
    </NativeBaseProvider>
  )
}
