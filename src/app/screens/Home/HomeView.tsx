import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  ImageBackground,
  Linking,
} from "react-native";
import { mall, COLORS, SIZES } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import UserContext from "../../../context/UserContext";
import { account } from "../../../upwrite";

interface directionData {
  id: string;
  name: string;
  address: string;
  price: number;
  time: number;
  image: any;
}

interface UserType {
  $id: string;
  name: string;
  email: string;
}

const datas: directionData[] = [
  {
    id: "1",
    name: "Graha Mall",
    address: "123 Duke Street",
    price: 7,
    time: 7,
    image: mall,
  },
  {
    id: "2",
    name: "Graha Mall",
    address: "123 Duke Street",
    price: 7,
    time: 7,
    image: mall,
  },
];

const CardComponents = ({ item }: { item: any }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: 40,
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 20,
      }}
    >
      <Link href="/screens/Home/ParkingDetails">
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Image source={item.image} />
          <View>
            <Text style={{ color: COLORS.Primary, fontSize: SIZES.large }}>
              {item.name}
            </Text>
            <Text
              style={{
                color: COLORS.Primary,
                fontSize: SIZES.medium,
                opacity: 0.5,
              }}
            >
              {item.address}
            </Text>
            <Text
              style={{
                color: COLORS.Orange,
                fontSize: SIZES.large,
                fontWeight: "900",
                marginTop: 15,
              }}
            >
              ${item.price}
              <Text style={{ fontWeight: "normal", fontSize: SIZES.medium_m }}>
                {" "}
                /hour
              </Text>
            </Text>
          </View>
        </View>
      </Link>

      <Text
        style={{
          backgroundColor: "#FFF3F3",
          paddingVertical: 10,
          paddingHorizontal: 25,
          borderRadius: 20,
          color: COLORS.Orange,
          opacity: 0.8,
        }}
      >
        {item.time} min
      </Text>
    </View>
  );
};

const HomeView = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState<UserType>([] as any)
  
  useEffect(() => {
    const current = account.get()
    current
    .then((response: any) => {
      console.log(response)
        const {name, email, $id, phone} = response;
        setData({name, email, $id, phone} as UserType)
    })
    .catch((error: any) => {
        console.log(error)
    })
  }, []);
  console.log("....", data)
  return (
    <View style={{ backgroundColor: COLORS.Primary }}>
      <ImageBackground
        source={require("../../../../assets/images/maskBackgroundImage.png")}
        resizeMode="cover"
        style={{ padding: 40, backgroundColor: "#0A1124" }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <View>
            <Link href="/screens/Home/ProfileScreen">
              <Text style={{ fontSize: 28, color: COLORS.Secondary }}>
                Hola, {data.name}👋🏻
              </Text>
            </Link>
            <Text
              style={{
                fontSize: SIZES.small_sm,
                marginTop: 10,
                color: COLORS.Secondary,
                opacity: 0.4,
              }}
            >
              Find an easy parking spot
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#2A344E",
              padding: 15,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              gap: 10,
            }}
          >
            <Link href="/screens/Notification/NotificationScreen">
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#9E9EA4"
              />
            </Link>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#2A344E",
            marginTop: 40,
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            gap: 10,
          }}
        >
          <Ionicons name="search" size={24} color="#9E9EA4" />

          <TextInput
            style={{
              paddingHorizontal: 5,
              paddingVertical: 15,
              shadowColor: "#EAEAF3",
            }}
            placeholder="Search"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
          />
        </View>
      </ImageBackground>

      <View
        style={{
          backgroundColor: "#F4F4FA",
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          padding: 40,
        }}
      >
        <View>
          <Text style={{ fontSize: SIZES.medium_m, color: "#0A1124" }}>
            Category
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.Secondary,
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderRadius: 10,
              gap: 10,
            }}
          >
            <Image source={require("../../../../assets/images/car.png")} />
            <Text>Car</Text>
          </View>

          <View
            style={{
              backgroundColor: COLORS.Secondary,
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderRadius: 10,
              gap: 10,
            }}
          >
            <Image source={require("../../../../assets/images/scooter.png")} />
            <Text>Bike</Text>
          </View>

          <View
            style={{
              backgroundColor: COLORS.Secondary,
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderRadius: 10,
              gap: 10,
            }}
          >
            <Image source={require("../../../../assets/images/bus.png")} />
            <Text>Bus</Text>
          </View>

          <View
            style={{
              backgroundColor: COLORS.Secondary,
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderRadius: 10,
              gap: 10,
            }}
          >
            <Image source={require("../../../../assets/images/van.png")} />
            <Text>Van</Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              color: COLORS.Primary,
              fontSize: SIZES.medium_m,
              marginTop: 20,
            }}
          >
            Nearest Parking Spaces
          </Text>
          <FlatList
            data={datas}
            renderItem={({ item }) => <CardComponents item={item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeView;
