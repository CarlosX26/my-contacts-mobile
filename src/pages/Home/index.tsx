import { Box } from "native-base"
import { CardPresentation } from "../../components/CardPresentation"

export const Home = () => {
  return (
    <Box bg="gray.600" h="100%" px="16px" justifyContent="center">
      <CardPresentation />
    </Box>
  )
}
