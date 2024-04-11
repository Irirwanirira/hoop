import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { mall, COLORS, SIZES } from "../../../constants";
import {
  currentLocationIcon,
  leftArrowWithBackground,
  locationIcon,
  masterCardIcon,
  rightIcon,
  switchIcon,
  timeIcon,
  visaIcon,
} from "../../../constants/Icons";
import Buttons from "../../../components/Buttons";
import { Link, router } from "expo-router";


const PaymentDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Pressable
        onPress={()=> router.back()}
            style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            }}
        >
            <Image
            style={{ alignSelf: "flex-end" }}
            source={leftArrowWithBackground}
            />

            <Text style={{ fontSize: SIZES.medium_m }}>Payment Details</Text>
            <View></View>
    </Pressable>


    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 10
      }}>
        <Text style={{ fontSize: SIZES.medium_18 }}>Mobile Banking</Text>
        <Image style={{ width: 10, height: 15 }} source={rightIcon} />
    </View>
    <View style={{padding: 20, backgroundColor: "#FFF", marginTop: 40, borderRadius: 10, gap: 20}}>
        <View
            style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#FFF",
            borderRadius: 10,
        }}>
            <Text style={{ fontSize: SIZES.medium_18 }}>Credit card</Text>
            <Image style={{ width: 10, height: 15 }} source={rightIcon} />
        </View>

        <View style={{flexDirection: "row", alignItems: "center", gap: 20, backgroundColor: "#F4F4FA", padding: 20, borderRadius: 10 }}>
            <Image 
            source={masterCardIcon}
            />
            <Text> ABC Bank **** 6189</Text>
            <View style={{backgroundColor: COLORS.Orange, width: 30, height: 30, borderRadius: 20, marginLeft: 100, padding: 10}}>
                <View  style={{backgroundColor: COLORS.Secondary, width: 10, height: 10, borderRadius: 20}}></View>
            </View>
        </View>
        <View style={{flexDirection: "row", alignItems: "center", gap: 20, backgroundColor: "#F4F4FA", padding: 20, borderRadius: 10 }}>
            <Image 
            source={visaIcon}
            />
            <Text> ABC Bank **** 6189</Text>
        </View>
        <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
            <View style={{backgroundColor: COLORS.Orange, padding: 4 ,borderRadius: 60,}}>
            <Text style={{color: COLORS.Secondary,fontSize: 20}}> + </Text>

            </View>
            <Text style={{opacity: 0.5}}>Add new card</Text>
        </View>

    </View>


    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30,
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 10
      }}>
        <Text style={{ fontSize: SIZES.medium_18 }}>Google Play</Text>
        <Image style={{ width: 10, height: 15 }} source={rightIcon} />
    </View>


    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30,
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 10
      }}>
        <Text style={{ fontSize: SIZES.medium_18 }}>Debit Card</Text>
        <Image style={{ width: 10, height: 15 }} source={rightIcon} />
    </View>

        <View style={{flexDirection: "row", alignItems: "center",justifyContent: "space-between", paddingRight: 10, marginTop: 40, borderRadius: 10}}>
            <Text>Send receipt to your email</Text>
            <Image
                source={switchIcon}
            />
        </View>

        <Buttons
          style={{ backgroundColor: COLORS.Primary, marginTop: 40}}
          action={
              <Link  href="/screens/Home/PaymentSuccessScreen">
                <Text style={{ fontWeight: "900", opacity: 0.5 }}>
                  Pay now
                </Text>
              </Link>
          }
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4FA",
    paddingHorizontal: 30,
    paddingVertical: 90,
  },

  totalContainer: {
    backgroundColor: "#FFF",
    padding: 20,
    marginTop: 30,
    borderRadius: 10
  }
});

export default PaymentDetailsScreen;
