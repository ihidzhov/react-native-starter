import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, Platform } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import { HomeScreen } from "./src/screens/";
import Load from "./src/Load";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppReady: false,
      data: [],
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
  setInitState = async (data) => {
    this.setState({
      data: data,
    });
  };

  render() {
    if (!this.state.isAppReady) {
      return null;
    }
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        {Platform.OS === "android" && (
          <View style={{ height: 24, backgroundColor: "rgba(0,0,0,0.2)" }} />
        )}
        <SafeAreaView>
          <HomeScreen data={this.state.data} />
        </SafeAreaView>
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
