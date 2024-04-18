import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
  Animated,
  PanResponder
} from "react-native";
import { mall, COLORS, SIZES } from "../../../constants";
import {
  carToDrag,
  leftArrowWithBackground,
} from "../../../constants/Icons";
import Buttons from "../../../components/Buttons";
import { Link, router } from "expo-router";
 
const ChooseSpaceScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
   
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}],{ useNativeDriver: false}),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;
    
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

            <Text style={{ fontSize: SIZES.medium_m }}>Choose Space</Text>
            <View></View>
      </Pressable>

      <ScrollView 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginTop: 50 }}
      >

        <View style={{marginLeft: 10}}>
            <Text style={{backgroundColor:COLORS.Orange, color: COLORS.Secondary, padding: 10, borderRadius: 20}}>1st floory</Text>
        </View>
        <View style={{marginLeft: 10}}>
        <Text style={{backgroundColor:"rgb(131, 131, 131)",opacity: 0.2, padding: 10, borderRadius: 20}}>2nd floory</Text>
        </View>
        <View style={{marginLeft: 10}}>
        <Text style={{backgroundColor:"rgb(131, 131, 131)",opacity: 0.2, padding: 10, borderRadius: 20}}>3rd floory</Text>
        </View>
        <View style={{marginLeft: 10}}>
        <Text style={{backgroundColor:"rgb(131, 131, 131)",opacity: 0.2, padding: 10, borderRadius: 20}}>4th floory</Text>
        </View>
        <View style={{marginLeft: 10}}>
        <Text style={{backgroundColor:"rgb(131, 131, 131)",opacity: 0.2, padding: 10, borderRadius: 20}}>5th floory</Text>
        </View>
        <View style={{marginLeft: 10}}>
        <Text style={{backgroundColor:"rgb(131, 131, 131)",opacity: 0.2, padding: 10, borderRadius: 20}}>6th floory</Text>
        </View>
        <View style={{marginLeft: 10}}>
        <Text style={{backgroundColor:"rgb(131, 131, 131)",opacity: 0.2, padding: 10, borderRadius: 20}}>7th floory</Text>
        </View>
        <View style={{marginLeft: 10}}>
        <Text style={{backgroundColor:"rgb(131, 131, 131)",opacity: 0.2, padding: 10, borderRadius: 20}}>8th floory</Text>
        </View>
        
      </ScrollView>

      <View style={{position: "relative"}}>
        <Image
        source={require("../../../../assets/images/spaceParking.png")}
        style={{resizeMode: "cover", justifyContent: "center", width: "100%" }}
        />
        <Animated.View
          style={{
            position: 'absolute',
            left: "50%",
            top: "50%",
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
            backgroundColor: "red", padding: 10, borderRadius: 10
          }}
          {...panResponder.panHandlers}
        >   
            <Image
            style={{ width: 70, height: 40}}
              source={carToDrag}
            />
        </Animated.View>
      </View>
      <View style={{paddingHorizontal: 30,}}>
      <Buttons
          style={{ backgroundColor: COLORS.Primary, marginTop: 40}}
          action={
              <Link  href="/screens/Home/BookScreen">
                <Text style={{ fontWeight: "900", opacity: 0.5,}}>Book Space</Text>
              </Link>
          }
        />
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

  totalContainer: {
    backgroundColor: "#FFF",
    padding: 20,
    marginTop: 30,
    borderRadius: 10
  }
});

export default ChooseSpaceScreen;
