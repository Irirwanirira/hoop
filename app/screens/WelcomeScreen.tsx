import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import {
  welcomeImage,
  HollaImage,
  findParkingImage,
  COLORS,
  SIZES,
} from "../../constants";
import Buttons from "../../components/Buttons";
import { callIcon, messageIcon } from "../../constants/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import OnBoarding from "../../components/OnBoarding";

SplashScreen.preventAutoHideAsync();

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Link href={"../screens/HollaScreen"} style={styles.skipBtn}>
        Skip
      </Link>

      <View>
        <OnBoarding />
      </View>

      <View style={styles.btnSection}>
        <Buttons
          action={
            <View style={styles.buttonWithIcons}>
              <Image source={messageIcon} />
              <Text style={{ color: COLORS.Secondary, fontWeight: "900" }}>
                Login with Email
              </Text>
            </View>
          }
        />

        <Buttons
          style={{ backgroundColor: COLORS.Secondary }}
          action={
            <View style={styles.buttonWithIcons}>
              <Image source={callIcon} />
              <Text style={{ fontWeight: "900", opacity: 0.5 }}>
                Login with Phone
              </Text>
            </View>
          }
        />
      </View>

      <Text
        style={{ textAlign: "center", marginTop: 40, fontSize: SIZES.small_sm }}
      >
        Don't have an account?{" "}
        <Text style={{ color: COLORS.Orange }}> Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },

  skipBtn: {
    alignSelf: "flex-end",
    color: COLORS.Primary,
    opacity: 0.7,
    fontSize: SIZES.medium,
  },

  btnSection: {
    display: "flex",
    gap: 20,
  },

  buttonWithIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default WelcomeScreen;
