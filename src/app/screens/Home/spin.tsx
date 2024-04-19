import * as React from "react";
import { AnimatedStyle, interpolate } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, ViewStyle,Text, useWindowDimensions } from "react-native";

// import Colors from "@/constants/Colors";
// import Sizes from "@/constants/Sizes";
// import { Icon } from "./Icon";
// import { Text } from "./Themed";

type CircularWheelProps = {
  data: { title: string, label: string }[];
};

export default function CircularWheel({ data }: CircularWheelProps) {
  const window = useWindowDimensions();
  const [selectedTime, selectTime] = React.useState(0);
  const wheelSize = window.height / 1.75;

  type TAnimationStyle = (value: number) => AnimatedStyle<ViewStyle>;
  const animationStyle: TAnimationStyle = React.useCallback((value: number) => {
    "worklet";
    const rotateZ = `${interpolate(-value, [1, 0, -1], [50, 0, -50])}deg`;
    return {
      transform: [{ rotateZ }],
      left: 0,
    };
  }, []);

  return (
    <View
      style={{
        width: wheelSize,
        height: wheelSize,
        position: "relative",
      }}
    >
      <Carousel
        defaultIndex={selectedTime}
        onSnapToItem={(i) => selectTime(i)}
        vertical={true}
        style={{
          width: wheelSize,
          height: wheelSize,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"white",
          borderRadius: wheelSize / 2,
          transform: [{ rotate: "-28deg" }],
        }}
        width={wheelSize}
        height={wheelSize / 2}
        windowSize={wheelSize}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              style={[
                {
                  width: wheelSize / 4,
                  height: wheelSize / 4,
                  transform: [{ rotate: "28deg" }],
                },
              ]}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text
                  style={[
                    styles.hourText,
                    { opacity: index === selectedTime ? 1 : 0.5 },
                  ]}
                >
                  {item.title}
                </Text>
                <Text
                  style={[
                    styles.hourLabel,
                    { opacity: index === selectedTime ? 1 : 0.5 },
                  ]}
                >
                  {item.label}
                </Text>
              </View>
            </View>
          );
        }}
        customAnimation={animationStyle}
      />
      <View
        style={[
          styles.arrow,
          {
            top: wheelSize / 2 - 35,
            left: wheelSize / 4 - 35,
          },
        ]}
      >
        <Ionicons name="chevron-back" size={24} />
      </View>
      <View
        style={{
          backgroundColor:"red",
          position: "absolute",
          width: wheelSize / 2,
          height: wheelSize / 2,
          borderRadius: wheelSize / 4,
          top: wheelSize / 4,
          left: wheelSize / 4,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  arrow: {
    position: "absolute",
    width: 70,
    height: 70,
    zIndex: 100,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  hourText: {
    fontSize:12,
  },
  hourLabel: {
    fontWeight: "400",
  },
});