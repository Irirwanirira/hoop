import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { COLORS } from "../../../constants";
import {
    infoIcon,
  leftArrowWithBackground,
} from "../../../constants/Icons";
import { Link, router } from "expo-router";
import { mapImage } from "../../../constants/Images";

const TrackingParkScreen = () => {
  return (
    <ImageBackground 
        source={mapImage}
        style={{width: "100%", height: "100%", position: "relative"}}
    >
        <Pressable
        onPress={()=> router.back()}
            style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 30,
            position: "absolute",
            top: 50,
            left: 20

            }}
        >
            <Image
            style={{ alignSelf: "flex-end" }}
            source={leftArrowWithBackground}
            />
        </Pressable>

        <View style={{position: "absolute", bottom: 70,left: "25%" , flexDirection: "row", alignItems: "center", gap: 20}}>
            <View style={{backgroundColor: COLORS.Secondary, padding: 20, borderRadius: 10}}>
                <Image source={infoIcon} />
            </View>
            <View style={{backgroundColor: "#130F26", paddingVertical: 20, paddingHorizontal: 40, borderRadius: 10}}>
                <Link href="/screens/Home/ChooseSpaceScreen"><Text style={{color: COLORS.Secondary}}>Start Now</Text></Link>
            </View>
        </View>
        
    </ImageBackground>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4FA",
    paddingVertical: 90,
  },
  map: {
    width: '100%',
    height: '100%',
}
});

export default TrackingParkScreen;
