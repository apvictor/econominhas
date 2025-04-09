import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react"

import {
  useFonts,
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk"
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

const ThemeContext = createContext({})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_300Light,
    SpaceGrotesk_400Regular,
    SpaceGrotesk_700Bold,
  })
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (fontsLoaded) {
      setReady(true)
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!ready) return null

  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
