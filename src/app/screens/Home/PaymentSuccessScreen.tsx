import React, { useEffect } from "react";
// import { Image } from 'expo-image';
import { StyleSheet, Text, View, Pressable, Image, SafeAreaView } from "react-native";
import { Link, router } from "expo-router";

import { COLORS, SIZES } from "../../../constants";
import Buttons from "../../../components/Buttons";
import { callIcon, chatIcon, messageIcon, redMessageIcon } from "../../../constants/Icons";
import { SuccessEllipseImage, SuccessImage } from "../../../constants/Images";
import ParkingRouteScreen from "./ParkingRouteScreen";

const PaymentSuccessScreen = () => {

  useEffect(()=> {
    function backHome(){
      setTimeout(()=> {
      <View>
        <ParkingRouteScreen />
      </View>
      router.push("/screens/Home/parking")
      }, 1000)
  
    }
    backHome
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={SuccessEllipseImage} />
        <Image style={styles.image} source={SuccessImage} />
      </View>

      <Text style={styles.title}>Payment Success</Text>

      <Text style={styles.landingMsg}>Congrats on your reserved parking space      </Text>

      <View style={{alignItems: "center", marginTop: 50}}>
            <Text>Receipt</Text>
      </View>

      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 20}}>
        <View style={{padding: 15, backgroundColor: COLORS.Secondary, borderRadius: 10, }}><Image source={redMessageIcon}/></View>
        <View style={{padding: 15, backgroundColor: COLORS.Secondary, borderRadius: 10, }}><Image source={chatIcon}/></View>
      </View>

      <View style={styles.btnSection}>
        <Buttons
            onPress={(): any=> router.navigate("/screens/Home/parking")}
          action={
              <Text style={{ color: COLORS.Secondary, fontWeight: "900" }}>Back to Home</Text>
          }
        />
      </View>

    </SafeAreaView>
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
    position: "relative",
  },

  image: {
    position: "absolute",
    bottom: -20,
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


  btnSection: {
    marginTop: 100,
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

export default PaymentSuccessScreen;
