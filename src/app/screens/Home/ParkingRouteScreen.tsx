import React from 'react'
import { View, Text, TextInput, Image, FlatList, ImageBackground, SafeAreaView } from 'react-native'
import {mall, COLORS, SIZES } from '../../../constants'
import { fluentArrowIcon } from '../../../constants/Icons'

const datas = [
    {
        id: "1",
        name: "Graha Mall",
        address: "123 Duke Street",
        price: 7,
        time: 7,
        image: `${mall}`
    },    {
        id: "2",
        name: "Graha Mall",
        address: "123 Duke Street",
        price: 7,
        time: 7,
        image: `${mall}`
    }
]

const CardComponents =({item}: {item: any})=> {
   return ( 
    <View style={{flexDirection: "row", justifyContent:"space-between",alignItems: 'flex-start',  marginTop: 40, backgroundColor: "#fff",padding: 20, borderRadius: 20}}>
        <View style={{flexDirection: "row", gap: 20 }}>
            <Image source={item.image}/>
            <View>
                <Text style={{color:COLORS.Primary, fontSize: SIZES.large}}>{item.name}</Text>
                <Text style={{color:COLORS.Primary, fontSize: SIZES.medium, opacity: 0.5}}>{item.address}</Text>
                <Text style={{color:COLORS.Orange, fontSize: SIZES.large, fontWeight: "900", marginTop: 15}}>${item.price}<Text 
                style={{fontWeight: "normal", fontSize: SIZES.medium_m}}> /hour</Text></Text>
            </View>
        </View>
      
        <Text style={{backgroundColor: "#FFF3F3", paddingVertical:10, paddingHorizontal: 25,borderRadius: 20,color: COLORS.Orange, opacity: 0.8 }}>{item.time} min</Text>
    </View>
    
)}

const ParkingRouteScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.Primary}}>
        <ImageBackground 
        source={require("../../../../assets/images/routeImage.png")}
        resizeMode="contain" 
        style={{ height: 1000}}>

        <View style={{backgroundColor: COLORS.Secondary, paddingVertical: 40, paddingHorizontal: 30,borderRadius: 20, flexDirection: "row", alignItems: "center", gap:50}}>
            <View style={{borderRightWidth: 0.3, paddingRight: 100,  gap: 10}}>
                <Text style={{fontSize: 26}}>Route</Text>
                <Text style={{fontSize: SIZES.medium_18, opacity: 0.5,}}>Turn left to parking spot </Text>
            </View>
            <View style={{}}>
                <Image
                source={fluentArrowIcon} 
                />
                <Text  style={{fontSize: SIZES.medium_18, opacity: 0.5,}}>100m</Text>
            </View>
        </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default ParkingRouteScreen