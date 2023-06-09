import { extendTheme } from "native-base"

const theme = extendTheme({
  fontConfig: {
    Rubik: {
      400: {
        normal: "Rubik-Regular",
        italic: "Rubik-Italic",
      },
      600: {
        normal: "Rubik-SemiBold",
      },
      700: {
        normal: "Rubik-Bold",
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Rubik",
    body: "Rubik",
    mono: "Rubik",
  },

  components: {
    Input: {
      defaultProps: {
        variant: "rounded",
        fontSize: "md",
      },
    },
    Button: {
      variants: {
        default: {
          borderRadius: "full",
          bg: "cyan.600",
        },
      },
      defaultProps: {
        variant: "default",
      },
    },
  },
})

export { theme }
