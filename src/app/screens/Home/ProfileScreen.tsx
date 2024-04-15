import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from "react-native";
import { Link,router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  ImageBackground,
  StyleSheet,
} from "react-native";
import {
  mall,
  COLORS,
  SIZES,
  HomebackgroundImage,
  dianaImage,
} from "../../../constants";
import {
    discountIcon,
  documentIcon,
  headphoneIcon,
  logoutIcon,
  profileIcon,
  questionIcon,
  rightIcon,
  settingsIcon,
} from "../../../constants/Icons";
import Buttons from "../../../components/Buttons";

const datas = [
  {
    id: "1",
    icon: `${profileIcon}`,
    title: "Profile",
    direction:"/screens/Plan/UpgradeScreen"
  },
  {
    id: "2",
    icon: `${discountIcon}`,
    title: "Go Pro",
    direction:"/screens/Plan/UpgradeScreen"
  },
  {
    id: "3",
    icon: `${documentIcon}`,
    title: "Terms & Condition",
    direction:"/screens/Plan/UpgradeScreen"
  },
  {
    id: "4",
    icon: `${questionIcon}`,
    title: "FAQ",
    direction:"/screens/Plan/UpgradeScreen"
  },
  {
    id: "5",
    icon: `${settingsIcon}`,
    title: "Setting",
    direction:"/screens/EditProfile/EditProfileScreen"
  },
];

const CardComponents = ({ item }: { item: any }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
      }}
    >
      
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Image style={{ width: 25, height: 25 }} source={item.icon} />
        <Text style={{ fontSize: SIZES.medium_18 }}>{item.title}</Text>
      </View>
       <Link href={item.direction}><Image style={{ width: 10, height: 15 }} source={rightIcon} /></Link>
      
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={{ backgroundColor:"#081024" }}>
      <ImageBackground
        source={HomebackgroundImage}
        resizeMode="contain"
        style={{ padding: 40, backgroundColor: "#0A1124" }}
      >
        <View style={styles.upper}>
                 <Pressable onPress={()=>router.back()}>
                 <View style={styles.IconView}>
                    <Ionicons name="chevron-back" size={24} color="#9E9EA4" />
                 </View>
                  </Pressable>
                
                <View style={styles.EditView}>
                    <Text style={styles.EditText}>Profile</Text>
                </View>
                </View>
       
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <View style={{ flexDirection: "row", gap: 30 }}>
            <View>
              <Image source={dianaImage} style={{ width: 90, height: 90 }} />
            </View>
            <View>
              <Text
                style={{
                  fontSize: SIZES.small_sm,
                  marginTop: 10,
                  color: COLORS.Secondary,
                  opacity: 0.4,
                }}
              >
                Welcome
              </Text>
              <Text style={{ fontSize: 28, color: COLORS.Secondary }}>
                Diane
              </Text>
            </View>
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
            <Image source={logoutIcon} resizeMode="cover" />
          </View>
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
          <FlatList
            data={datas}
            renderItem={({ item }) => <CardComponents item={item} />}
          />
        </View>

        <Buttons
          style={{ backgroundColor: COLORS.Primary, marginTop: 100 }}
          action={
            <View style={styles.buttonWithIcons}>
              <Image source={headphoneIcon} />
              <Text style={{ fontWeight: "900", color: COLORS.Secondary }}>
                How can we help you?
              </Text>
            </View>
          }
        />

        <Text style={{ alignSelf: "center", margin: 50, opacity: 0.3 }}>
          Parking v.1
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWithIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  upper: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
        width: "100%",
    },
    IconView: {
        width: 44,
        height: 44,
        borderRadius:10,
        backgroundColor: "#EAEAF3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        marginLeft: 0,
         
    },
    EditText: {
        color: "white",
        fontSize: 22, 
        fontWeight:"500"
    },
    EditView: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        width:"70%"
        
        // width:"70%"
    },
});

export default ProfileScreen;
