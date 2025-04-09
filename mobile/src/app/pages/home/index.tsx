import { Text, View } from "react-native"

export default function Home() {
  const year = new Date().getFullYear()

  return (
    <View className="min-h-screen h-full px-10 py-5 flex flex-col justify-between bg-zinc-950">
      <Text className="font-grotesk text-center text-zinc-400">© {year}</Text>
    </View>
  )
}
