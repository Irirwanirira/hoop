import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import WelcomeScreen from "./screens/LandingPage/WelcomeScreen";
import BookScreen from "./screens/Home/BookScreen";
import CircularWheel from "../components/spin";

function index() {
  const [isReady, setIsReady] = useState(false);
const hours = [
    { title: "1", label: "Hour" },
    { title: "2", label: "Hours" },
    { title: "3", label: "Hours" },
    { title: "4", label: "Hours" },
    { title: "5", label: "Hours" },
    { title: "6", label: "Hours" },
    { title: "7", label: "Hours" },
    { title: "8", label: "Hours" },
    { title: "9", label: "Hours" },
    { title: "10", label: "Hours" },
  ];
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
      {/* <WelcomeScreen /> */}
      <BookScreen />
      {/* <CircularWheel data={hours} /> */}
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
