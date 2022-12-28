import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import { HomeScreen } from "./src/screens/";
import Load from "./src/Load";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppReady: false,
    };
  }

  componentDidMount() {
    this.loadesourcesAsync();
  }

  async loadesourcesAsync() {
    await Load.start(this.setAppIsReady, this.setInitState);
  }
  setAppIsReady = async () => {
    this.setState({ isAppReady: true });
    await SplashScreen.hideAsync();
  };

  render() {
    if (!this.state.isAppReady) {
      return null;
    }
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <HomeScreen />
        </SafeAreaView>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
