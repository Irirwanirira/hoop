import React from 'react'
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function ParkingLayout() {

    const insets = useSafeAreaInsets();

  return (
        <>
        <StatusBar style="dark" />
        <Stack
            screenOptions={{
            headerShown: false,
            contentStyle: {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        }}
         ></Stack>

        {/* <Stack.Screen
          name="index"

          options={{
            contentStyle: { 
                paddingTop: 0, 
                paddingBottom: 0 },
          }}
        /> */}

{/* <Stack.Screen
          name=""
          options={{
            contentStyle: { paddingTop: 0, paddingBottom: 0 },
          }}
        /> */}
    </>
  )
}

export default ParkingLayout
