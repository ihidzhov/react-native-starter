import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
