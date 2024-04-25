import React from 'react'
import { View,Text, Image } from 'react-native'
import { COLORS } from '../constants'

function Category() {
  return (
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
            <Image source={require("../../assets/images/car.png")} />
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
            <Image source={require("../../assets/images/scooter.png")} />
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
            <Image source={require("../../assets/images/bus.png")} />
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
            <Image source={require("../../assets/images/van.png")} />
            <Text>Van</Text>
          </View>
        </View>
  )
}

export default Category

      