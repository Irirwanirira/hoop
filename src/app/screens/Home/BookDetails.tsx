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
import { parkDetailImage } from "../../../constants/Images";
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

const BookDetailsScreen = () => {
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

        <Text style={{ fontSize: SIZES.medium_m }}>Book Details</Text>
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
      </View>
        <View style={{marginTop: 30, flexDirection:"row", alignItems: "flex-start", justifyContent: "space-between"}}>
            <View style={{ gap: 10 }}>
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
            <Text style={{color: COLORS.Orange, backgroundColor: "#FFF3F3", borderRadius: 5, paddingHorizontal: 20, paddingVertical: 10, fontSize: SIZES.small_sm}}>
                $10/h
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
            alignItems: "center",
            gap: 5,
            backgroundColor: "#FFF",
            paddingHorizontal: 50,
            paddingVertical: 20,
            borderRadius: 10,
            minWidth: 200

          }}
        >
            <View style={{backgroundColor: "#FFF3F3", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10}}>          
                <Image source={locationIcon} />
            </View>
   
          <Text style={{fontSize: SIZES.medium_18, marginTop: 10}}>A-6</Text>
          <Text style={{opacity: 0.4 }}>Parking place</Text>

        </View>

        <View
          style={{
            alignItems: "center",
            gap: 5,
            backgroundColor: "#FFF",
            paddingHorizontal: 50,
            paddingVertical: 20,
            borderRadius: 10,
            minWidth: 200
          }}
        >
            <View style={{backgroundColor: "#FFF3F3", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10}}>          
                <Image source={timeIcon} />
            </View>
   
          <Text style={{fontSize: SIZES.medium_18, marginTop: 10}}>4 h</Text>
          <Text style={{opacity: 0.4 }}>Time</Text>

        </View>
      </View>

      <View style={{ flexDirection: "row", marginTop: 30, backgroundColor: "#fff", alignItems: "center", justifyContent: "space-between",padding: 10, borderRadius: 10}}>
        <View style={{flexDirection: "row", alignItems: "center",  gap: 20}}>
            <View style={{backgroundColor: "#FFF3F3",  borderRadius: 10, padding: 10}}>          
                <Image source={activityIcon} />
            </View>
          <Text style={{fontSize: SIZES.medium_18}}>Include Insurance</Text>
        </View>
        <Text style={{fontSize: SIZES.medium, }}>$5/h</Text>
      </View>

      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 30}}>
        <Text style={{ fontSize: SIZES.large}}>$35,00</Text>
        <Pressable
        onPress={()=> router.push("/screens/Home/PaymentScreen")}
            style={{ 
                backgroundColor: "#130F26",
                paddingHorizontal: 100,
                paddingVertical: 20,
                borderRadius: 10,
            }}>
          <Text style={{ color: COLORS.Secondary, fontSize: SIZES.medium }}>
            pay
          </Text>
        </Pressable>
      </View>
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

export default BookDetailsScreen;
