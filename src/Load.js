import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Images, URLs } from "./constants";

const Load = {
  start: async (setAppIsReady, setInitState) => {
    try {
      // Keep the splash screen visible while we fetch resources
      await SplashScreen.preventAutoHideAsync();

      const images = [
        Images.beach,
        Images.beachwallpaper,
        Images.indiana,
        Images.portugal,
        Images.sunset,
      ];

      const assetPromises = images.map((image) => {
        return Asset.fromModule(image).downloadAsync();
      });

      assetPromises.push(
        await Font.loadAsync({
          OpenSansRegular: {
            uri: require("../assets/fonts/OpenSans-Regular.ttf"),
            display: Font.FontDisplay.FALLBACK,
          },
          OpenSanseItalic: require("../assets/fonts/OpenSans-Italic.ttf"),
          OpenSanseSemiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
        })
      );

      try {
        const response = await fetch(URLs.bitcoin, {
          method: "GET",
          headers: {
            "Accept-Encoding": "gzip",
          },
        });
        const json = await response.json();
        setInitState({
          bitcoin: json?.data,
        });
      } catch (error) {
      } finally {
      }

      return Promise.all(assetPromises);
    } catch (e) {
      console.warn(e.message);
    } finally {
      setAppIsReady(true);
    }
  },
};

export default Load;
