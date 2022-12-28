import { Platform, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const Layout = {
  window: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  isSmallDevice: SCREEN_WIDTH < 375,
  isLongDevice: SCREEN_WIDTH * 1.8 <= SCREEN_HEIGHT,
  isAndroid: Platform.OS === "android",
  isIOS: Platform.OS === "ios",
};

export default Layout;
