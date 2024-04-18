import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import WelcomeScreen from "./screens/LandingPage/WelcomeScreen";
import BookScreen from "./screens/Home/BookScreen";

function index() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutViewRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutViewRootView} style={styles.container}>
      <WelcomeScreen />
      {/* <BookScreen /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
export default index;
