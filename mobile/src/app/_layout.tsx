import "../styles/global.css"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import { ThemeProvider } from "../context/theme-context"

export default function Layout() {
  return (
    <ThemeProvider>
      <SafeAreaView className="bg-zinc-950 flex-1">
        <StatusBar style="light" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ title: "Login" }} />
          <Stack.Screen name="pages/home" options={{ title: "Home" }} />
        </Stack>
      </SafeAreaView>
    </ThemeProvider>
  )
}
