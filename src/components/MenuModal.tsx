import { Ionicons, Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const MenuModal = () => {
  return (
    <View style={styles.container}>
      <Pressable 
        onPress={() => router.push("/screens/Home/ProfileScreen")}
        style={styles.iconText}>
        <Feather name="user" size={24} color="#9E9EA4" />
        <Text style={{ color: "#FFFFFF" }}>User</Text>
      </Pressable>

      <Pressable 
        onPress={() => router.push("/screens/Home/ExploreScreen")}        
        style={styles.iconText}>
        <MaterialCommunityIcons name="google-nearby" size={24} color="#9E9EA4" />
        <Text style={{ color: "#FFFFFF" }}>Explore</Text>
      </Pressable>

      <Pressable 
        onPress={() => router.push("/screens/Home/HistoryScreen")}
        style={styles.iconText}>
        <FontAwesome name="history" size={24} color="#9E9EA4" />
        <Text style={{ color: "#FFFFFF" }}>History</Text>
      </Pressable>

      <Pressable
        style={styles.iconText}
        onPress={() => router.push("/screens/Notification/NotificationScreen")}>
        <Ionicons name="notifications-outline" size={24} color="#9E9EA4" />
        <Text style={{ color: "#FFFFFF" }}>Notification</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A344E",
    padding: "2%",
    borderRadius: 5,
    gap: 10,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  iconText: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: "2%"
  },
});

export default MenuModal;
