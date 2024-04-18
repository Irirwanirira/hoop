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
    activityIcon,
  currentLocationIcon,
  leftArrowWithBackground,
  locationIcon,
  timeIcon,
} from "../../../constants/Icons";
import { BookingImage, parkDetailImage } from "../../../constants/Images";
import { Link, router } from "expo-router";

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

const BookScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
      onPress={()=> router.back()}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 30,

        }}
      >
        <Image
          style={{ alignSelf: "flex-end" }}
          source={leftArrowWithBackground}
        />

        <Text style={{ fontSize: SIZES.medium_m }}>Booking</Text>
        <View></View>
      </Pressable>

      <View
        style={{
          flexDirection: "row",
          marginTop: 50,
          justifyContent: "space-between",
          alignItems: "center"
        }}
      > 
      <View style={{paddingLeft: 50, width: "50%", gap: 40}}>
        <Text style={{fontSize: 32}}>Add Insurance?</Text>
        <Image 
        source={require("../../../../assets/images/leftToSpinner.png")}
        style={{resizeMode: "contain", }} 
        />
      </View>
        <Image 
        source={require("../../../../assets/images/spinner.png")}
        style={{resizeMode: "contain"}} 
        />
      </View>
   

      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 30,paddingHorizontal: 30}}>
        <Text style={{ fontSize: SIZES.large}}>$35,00</Text>
        <TouchableOpacity
            style={{ 
                backgroundColor: "#130F26",
                paddingHorizontal: 100,
                paddingVertical: 20,
                borderRadius: 10,
            }}>
          <Link href={"/screens/Home/BookDetails"} style={{ color: COLORS.Secondary, fontSize: SIZES.medium }}>
            Book Now
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4FA",
    paddingVertical: 90,
  },
});

export default BookScreen;
