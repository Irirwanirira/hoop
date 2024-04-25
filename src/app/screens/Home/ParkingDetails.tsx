import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable
} from "react-native";
import { mall, COLORS, SIZES } from "../../../constants";
import {
  currentLocationIcon,
  leftArrowWithBackground,
  locationIcon,
  timeIcon,
} from "../../../constants/Icons";
import { parkDetailImage } from "../../../constants/Images";
import { Link, router } from "expo-router";
import { useRoute } from "@react-navigation/native";

const datas = [
  {
    id: "1",
    name: "Graha Mall",
    address: "123 Duke Street",
    price: 7,
    time: 7,
    image: `${mall}`,
    date: "12 Aug",
  },
  {
    id: "2",
    name: "Graha Mall",
    address: "123 Duke Street",
    price: 7,
    time: 7,
    image: `${mall}`,
    date: "12 Aug",
  },
];

const ParkingDetailsScreen = () => {

  const route = useRoute()
  const { id } = route.params;
  console.log(id)

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

            <Text style={{ fontSize: SIZES.medium_m }}>Details</Text>
            <View></View>
      </Pressable>

      <View
        style={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Image style={{ width: 400, height: 250 }} source={parkDetailImage} />
        <View
          style={{
            backgroundColor: COLORS.Orange,
            padding: 15,
            borderRadius: 30,
            position: "absolute",
            bottom: -25,
          }}
        >
          <Image source={currentLocationIcon} />
        </View>
      </View>

      <View style={{ marginTop: 50, alignItems: "center", gap: 10 }}>
        <Text style={{ color: COLORS.Primary, fontSize: SIZES.large }}>
          Graha Mall
        </Text>
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

      <View
        style={{
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
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
          <Text style={{ color: COLORS.Orange }}>500 m away</Text>
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
          }}
        >
          <Image source={timeIcon} />
          <Text style={{ color: COLORS.Orange }}>7 min</Text>
        </View>
      </View>

      <View></View>

      <View
        style={{ marginTop: 40, alignItems: "center", position: "relative" }}
      >
        <Text style={{ fontSize: SIZES.medium_18, alignSelf: "flex-start" }}>
          Information
        </Text>
        <Text
          style={{
            lineHeight: 30,
            fontSize: SIZES.medium_18,
            marginTop: 30,
            opacity: 1,
            letterSpacing: 1,
          }}
        >
          24/7 parking facility with cctv camera, professional security guard,
          chair
          <Text>
            disable, floor parking list facilities. You will get hassle parking
            facilities with 35% discount on first parking...
          </Text>
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#130F26",
            paddingHorizontal: 70,
            paddingVertical: 20,
            borderRadius: 10,
            position: "absolute",
            bottom: -25,
          }}
        >
          <Link href={"/screens/Home/TrackingParkScreen"}>
            <Text style={{ color: COLORS.Secondary, fontSize: SIZES.medium }}>
              Book now
            </Text>
          </Link>
        </TouchableOpacity>
      </View>

      <View></View>
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
});

export default ParkingDetailsScreen;
