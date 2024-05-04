import React, { useEffect, useState } from "react";
import {ID} from "react-native-appwrite"
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  ActivityIndicator
} from "react-native";
import { mall, COLORS, SIZES } from "../../../../constants";
import {
  currentLocationIcon,
  leftArrowWithBackground,
  locationIcon,
  timeIcon,
} from "../../../../constants/Icons";
import { parkDetailImage } from "../../../../constants/Images";
import { Link, router, useLocalSearchParams } from "expo-router";
import { databases } from "../../../../appwrite/Appwrite";

interface parkingType{
  id: any
  name: string,
  price: string,
  address: string,
  isBooked: boolean
}

const ParkingDetailsScreen = () => {
  const [parkDetail, setParkDetail] = useState<parkingType | null>(null)
  const [bookIt, setBookedIt] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { id } = useLocalSearchParams<{id: string}>();

  useEffect(()=> {
    const fetchParking = async()=> {
      try {
        const park = await databases.getDocument(
            'hoopDatabase',
            '66296e5b134e7f12ff59',
            id
        )
        const {$id, name, price, isBooked, adress} = park 
        setParkDetail({
          id: $id,
          name,
          price,
          address:adress,
          isBooked,
        });
      } catch (error) {
          console.log("error", error)
      }
    }
    fetchParking()
  }, [bookIt])

  const bookParking = async()=> {
    try {
      setIsLoading(true)
    const park = await databases.updateDocument(
        'hoopDatabase',
          '66296e5b134e7f12ff59',
          id,
          {"isBooked": bookIt}
      )
      setBookedIt(!bookIt)
      setIsLoading(false)

    } catch (error) {
        console.log("error", error)
        setIsLoading(false)

    }
  }

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
            <Text style={{ fontSize: SIZES.medium_m }}>details</Text>
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
          {parkDetail?.name}
        </Text>
        <Text
          style={{
            color: COLORS.Primary,
            fontSize: SIZES.medium,
            opacity: 0.5,
          }}
        >
          {parkDetail?.address}
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
        style={{ marginTop: 40, alignItems: "center"}}
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

        <View style={{flexDirection: "row",alignItems: "center",gap: 10}}>
          <Pressable
              style={[parkDetail?.isBooked ? styles.booked : styles.notBooked,{
                paddingHorizontal: 40,
                paddingVertical: 20,
                borderRadius: 10,
              }]}
            onPress={bookParking }>
              {isLoading ? (
              <ActivityIndicator size="small" color="#FFF" />
              ) : (
                 <Text style={{ color: COLORS.Secondary, fontSize: SIZES.medium }}>
                 {parkDetail?.isBooked ? "booked" : "Book now"}
               </Text>
              )
              }
          </Pressable>
          <Pressable
              style={{
                paddingHorizontal: 40,
                paddingVertical: 20,
                borderRadius: 10,
                backgroundColor: "#130F26",
              }}
            onPress={()=> router.push("/screens/Home/TrackingParkScreen") }>
                 <Text style={{ color: COLORS.Secondary, fontSize: SIZES.medium }}>
                 explore
               </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4FA",
    paddingHorizontal: 30,
    paddingVertical: 80,
  },

  booked:{
    backgroundColor: "#f5481d",
  },
  notBooked:{
    backgroundColor: "#130F26",  }
});

export default ParkingDetailsScreen;