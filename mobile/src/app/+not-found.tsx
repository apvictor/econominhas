import { View, StyleSheet } from "react-native"
import { Link } from "expo-router"

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.button}>
        Voltar para a tela de login!
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AAA",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#25292e",
  },
})
