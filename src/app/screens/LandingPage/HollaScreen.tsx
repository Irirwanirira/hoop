import React from "react";
// import { Image } from 'expo-image';
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { Link } from "expo-router";

import { HollaImage, COLORS, SIZES } from "../../../constants";
import Buttons from "../../../components/Buttons";
import { callIcon, messageIcon } from "../../../constants/Icons";

const HollaScreen = () => {
  return (
    <View style={styles.container}>
      <Link href={'./FindParkingScreen'}
      style={styles.skipBtn}>
                <Text>Skip</Text>

        </Link>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={HollaImage} />
      </View>

      <Text style={styles.title}>Hollaa</Text>

      <Text style={styles.landingMsg}>
        Find the best possible parking space nearby your desired destination
      </Text>

      {/* view for paginnation */}
      <View style={styles.paginator}>
        <View style={styles.pagin}></View>
        <View
          style={[styles.pagin, { backgroundColor: COLORS.Orange, opacity: 1 }]}
        ></View>
        <View style={styles.pagin}></View>
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
              <Text style={{ fontWeight: "900", opacity: 0.5 }}>Login with Phone</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 80,
  },

  skipBtn: {
    alignSelf: "flex-end",
    color: COLORS.Grey,
    opacity: 0.7,
    fontSize: SIZES.medium,
  },

  imageContainer: {
    alignSelf: "center",
    marginTop: 100,
  },

  image: {
    // height: 250,
    // width: 350,
  },

  title: {
    color: COLORS.Primary,
    fontSize: SIZES.large,
    textAlign: "center",
    marginTop: 40,
  },

  landingMsg: {
    opacity: 0.4,
    textAlign: "center",
    fontSize: SIZES.medium,
    marginTop: 10,
  },

  paginator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
    marginTop: 50,
  },

  pagin: {
    backgroundColor: COLORS.Primary,
    width: 10,
    height: 10,
    borderRadius: 100,
  },

  btnSection: {
    marginTop: 50,
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

export default HollaScreen;
