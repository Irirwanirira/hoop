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
  timeIcon,
} from "../../../constants/Icons";
import { parkDetailImage } from "../../../constants/Images";
import Input from "../../../components/Input";
import Buttons from "../../../components/Buttons";
import { Link, router } from "expo-router";


const PaymentScreen = () => {
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

            <Text style={{ fontSize: SIZES.medium_m }}>Payment</Text>
            <View></View>
      </Pressable>

        <View style={{padding: 20, backgroundColor: "#FFF", marginTop: 40, borderRadius: 10}}>
            <View
                style={{
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                }}>
                <Image style={{width: 350, height: 150, borderRadius: 10 }} source={parkDetailImage} />
            </View>

            <View style={{ marginTop: 40, alignItems: "center", gap: 10}}>
                <Text style={{ color: COLORS.Primary, fontSize: SIZES.large }}>Graha Mall</Text>   
                <Text
                style={{
                    color: COLORS.Primary,
                    fontSize: SIZES.medium,
                    opacity: 0.5,
                }}
                >
                    123 Dhaka Street
                
                </Text>
            </View>

            <View style={{ flexDirection: "row", gap: 20, alignItems: "center", justifyContent:"center", marginTop: 30}}>
            <View
                style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#FFF3F3",
                paddingHorizontal: 25,
                paddingVertical: 10,
                borderRadius: 10,
                }}
            >
                <Image source={locationIcon} />
                <Text style={{ color: COLORS.Orange }}>A-6</Text>
            </View>
            <View
                style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#FFF3F3",
                paddingHorizontal: 25,
                paddingVertical: 10,
                borderRadius: 10,
                }}>
                <Image source={timeIcon} />
                <Text style={{ color: COLORS.Orange }}>4 hours</Text>
            </View>
            </View>
        </View>

        <View style={{flexDirection: "row", backgroundColor: "#FFF", alignItems: "center",justifyContent: "space-between", paddingRight: 20, marginTop: 40, borderRadius: 10}}>
            <Input
                text="Input voucher code"
                onChangeText={()=> alert("ok")}
                value={"Input voucher code"}
            />
            <Text style={{color: COLORS.Orange, fontWeight: "600"}}>Use</Text>
        </View>

        <View style={styles.totalContainer}>
                <View style={{gap: 10, borderColor: COLORS.Primary, borderBottomWidth: 0.3, paddingBottom: 10}}>
                    <View style={{flexDirection:"row", alignItems: "center", justifyContent:"space-between"}}>
                        <Text style={{opacity: 0.5, fontSize: SIZES.medium}}> Sub total</Text>
                        <Text style={{fontSize: SIZES.medium}}>$30,00</Text>
                    </View>

                    <View style={{flexDirection:"row", alignItems: "center", justifyContent:"space-between"}}>
                        <Text style={{opacity: 0.5, fontSize: SIZES.medium}}> Insurance</Text>
                        <Text style={{fontSize: SIZES.medium}}>$50,00</Text>
                    </View>
                </View>

                <View style={{flexDirection:"row", alignItems: "center", justifyContent:"space-between", paddingTop:10}}>
                        <Text style={{fontSize: SIZES.medium}}> Total</Text>
                        <Text style={{fontSize: SIZES.medium, color: COLORS.Primary, fontWeight: "900"}}>$350,00</Text>
                </View>
        </View>
        <Buttons
          style={{ backgroundColor: COLORS.Primary, marginTop: 40}}
          action={
              <Link  href="/screens/Home/PaymentDetailsScreen">
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

export default PaymentScreen;
