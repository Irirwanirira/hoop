import { Stack } from 'expo-router'
import { StyleSheet} from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <Stack >
        <Stack.Screen name= "index"
            options={{
                headerTitle: "splash screen",
                headerShown: false,
                headerStyle: {}
            }}
        />
        <Stack.Screen name= "screens/WelcomeScreen"
                options={{
                headerTitle: "Welcome screen",
                headerShown: false,
                // headerStyle: {}
            }}
        />

        <Stack.Screen name= "screens/HollaScreen"
                options={{
                headerTitle: "",
                headerShown: false,
                // headerStyle: {}
            }}
        />

        <Stack.Screen name= "screens/FindParkingScreen"
                options={{
                headerTitle: "",

                headerShown: false,
                // headerStyle: {}
            }}
        />
    </Stack>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 35,
      paddingVertical: 50,
      backgroundColor: "#EBEBEB"
    },
  });

export default _layout

