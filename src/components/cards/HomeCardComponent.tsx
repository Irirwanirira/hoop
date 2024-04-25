import { Link, router } from 'expo-router';
import React, { useState } from 'react'
import { View , Image, Text, StyleSheet, Pressable} from 'react-native';

import { COLORS, mall, SIZES } from '../../constants';

const HomeCardComponent = ({park } : {park: any}) => {

  return (
    <View style={styles.container} >
        <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: 40,
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <Pressable
        onPress={
          ()=> {router.push({
            pathname: "/screens/Home/parking/[id]",
            params: {id: park.$id}
          })}
        }
        >
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Image source={mall} />
            <View>
              <Text style={{ color: COLORS.Primary, fontSize: SIZES.large }}>
                {park?.name.slice(0,8) + "..." }
              </Text>
              <Text
                style={{
                  color: COLORS.Primary,
                  fontSize: SIZES.medium,
                  opacity: 0.5,
                }}
              >
                {park.adress}
              </Text>
              <Text
                style={{
                  color: COLORS.Orange,
                  fontSize: SIZES.large,
                  fontWeight: "900",
                  marginTop: 15,
                }}
              >
                ${park.price}
                <Text style={{ fontWeight: "normal", fontSize: SIZES.medium_m }}>
                  {" "}
                  /hour
                </Text>
              </Text>
            </View>
          </View>
        </Pressable>
        <View style={{alignItems: "center"}}>
        <Text
          style={{
            backgroundColor: "#FFF3F3",
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 20,
            color: COLORS.Orange,
            opacity: 0.8,
          }}
        >
          {7} min
        </Text>
        <Text 
            style={park?.isBooked ? styles.booked : styles.notBooked}
            >{park?.isBooked ? "booked" : ""}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    booked: {
        color: "green",
        fontSize: 10,
        marginTop: 50
    },
    notBooked: {}
})

export default HomeCardComponent
