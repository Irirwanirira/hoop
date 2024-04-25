import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  ImageBackground,
  Linking,
  ScrollView,
} from "react-native";
import { mall, COLORS, SIZES } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import UserContext from "../../../context/UserContext";
import { account, databases } from "../../../upwrite";
import Category from "../../../components/Category";
import HomeCardComponent from "../../../components/cards/HomeCardComponent";

interface directionData {
  $id?: string;
  name?: string;
  address?: string;
  price?: number;
  time?: number;
  image?: any;
}

interface UserType {
  $id: string;
  name: string;
  email: string;
}

const HomeView = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState<UserType>([] as any)
  const [parkingList, setParkingList] = useState([])

  const fetchParking = async()=> {
    try {
      const list = await databases.listDocuments(
          'hoopDatabase',
          '66296e5b134e7f12ff59',
      )
        return setParkingList(list.documents)
  
    } catch (error) {
        console.log("error", error)
    }
  }
  
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
        setData({name: "guest" ,email: "", $id: "", phone: ""} as UserType)
    })
    fetchParking()

  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.Primary }}>
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
        <View>
          <Category />
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
          <View>
              <FlatList 
                showsVerticalScrollIndicator={true}
                data={parkingList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <HomeCardComponent item={item} />}
              />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeView;
