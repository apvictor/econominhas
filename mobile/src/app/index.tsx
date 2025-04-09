import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
} from "react-native"
import logo from "@/assets/images/logo.png"
import pig from "@/assets/images/pig.png"
import { router } from "expo-router"

export default function Login() {
  const year = new Date().getFullYear()

  function handleLoginGoogle() {
    router.replace("/pages/home")
    console.log("OK")
  }

  return (
    <View className="min-h-screen h-full px-10 py-5 flex flex-col justify-between bg-zinc-950">
      <View className="flex items-center">
        <Image className="w-[200px] h-[25px]" source={logo} />
      </View>

      <View className="flex flex-col gap-1">
        <Text className="font-grotesk-bold text-4xl text-white">
          Gerencie suas finanças
        </Text>
        <Text className="font-grotesk-light text-xl text-zinc-400">
          Controle suas finanças com o melhor aplicativo de gerenciamento
        </Text>
      </View>

      <View className="flex items-center justify-center">
        <Image source={pig} />
      </View>

      <View className="flex flex-col items-center gap-2">
        <Pressable
          // disabled={isPending}
          className="font-bold w-full bg-white p-4 rounded-md flex items-center"
          onPress={() => handleLoginGoogle()}
        >
          <Text className="font-grotesk-bold text-xl">
            {false ? <ActivityIndicator /> : "Entrar com Google"}
          </Text>
        </Pressable>
        <Text className="font-grotesk-light text-xl text-zinc-400">
          Entre para acessar nossos serviços
        </Text>
      </View>

      <Text className="font-grotesk text-center text-zinc-400">© {year}</Text>
    </View>
  )
}
