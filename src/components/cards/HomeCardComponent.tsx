import { Link } from 'expo-router';
import React, { useState } from 'react'
import { View , Image, Text, StyleSheet} from 'react-native';

import { COLORS, mall, SIZES } from '../../constants';

const HomeCardComponent = ({park} : {park: any}) => {
    const [booked, setIsBooked] = useState(true)

  return (
    <View style={styles.container}>
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
        <Link href={{
            pathname: "parking/[id]",
            params: {id: park.$id}
            }}>
          <View style={{ flexDirection: "row", gap: 20 }} key={park.$id}>
            <Image source={mall} />
            <View>
              <Text style={{ color: COLORS.Primary, fontSize: SIZES.large }}>
                {park.name}
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
                <Text 
                style={booked ? styles.booked : styles.notBooked}
                >{booked ? "booked" : ""}</Text>
              </Text>
            </View>
          </View>
        </Link>
  
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
        textAlign: "center"
    },
    notBooked: {color: "red"}
})

export default HomeCardComponent
