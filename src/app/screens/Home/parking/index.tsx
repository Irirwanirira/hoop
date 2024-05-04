import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { mall, COLORS, SIZES } from "../../../../constants";
import { Ionicons,Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { account, databases } from "../../../../appwrite/Appwrite";
import Category from "../../../../components/Category";
import HomeCardComponent from "../../../../components/cards/HomeCardComponent";
import { UserType } from "../../../../context/UserContext";
import UserContext from "../../../../context/UserContext";
import MenuModal from "../../../../components/MenuModal";

const HomeView = () => {
  const [data, setData] = useState<UserType>([] as any)
  const [parkingList, setParkingList] = useState<[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {userState} = useContext(UserContext)

  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  function handleMenu (){
    setToggleMenu(!toggleMenu)
  }

  const fetchParking = async()=> {
    try {
      setIsLoading(true)
      const list = await databases.listDocuments(
          'hoopDatabase',
          '66296e5b134e7f12ff59',
      )
      setParkingList(list.documents)
      setIsLoading(false)

    } catch (error) {
        console.log("error", error)
        setIsLoading(false)
    }
  }
  
  useEffect(() => {
    const current = account.get()
    current
    .then((response: any) => {
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
        source={require("../../../../../assets/images/maskBackgroundImage.png")}
        resizeMode="cover"
        style={{ padding: 40, backgroundColor: "#0A1124" }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 40,
            zIndex: 1
          }}
        >
          <View>
              <Text style={{ fontSize: 28, color: COLORS.Secondary }}>
                `Hola, {data.name}👋🏻
              </Text>
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
            <Pressable
              onPress={handleMenu}>
              <Entypo 
                name="dots-three-vertical"
                size={24}
                color="#9E9EA4"
              />
            </Pressable>
          </View>
        </View>
            {
              toggleMenu &&  <View style={{alignSelf: "flex-end", zIndex: 10}}><MenuModal /></View>
            }
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

      <ScrollView
      alwaysBounceVertical
        style={{
          
          backgroundColor: "#F4F4FA",
          borderRadius: 30,
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
            { isLoading ? (
              <ActivityIndicator size="large" color={COLORS.Orange} />
            ) : (
              parkingList.map((item: any ) => <HomeCardComponent key={item.$id} park={item}/>)
            )
            }
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeView;