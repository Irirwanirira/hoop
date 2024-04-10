import React from 'react'
import { View, Text, TextInput, Image, FlatList, StyleSheet } from 'react-native'
import {mall, COLORS, SIZES } from '../../constants'

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
    },    {
        id: "3",
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

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={{alignSelf: "center", fontSize: SIZES.medium_m, marginTop: 40}}>Explore</Text>

        <View style={{
            backgroundColor: "#EAEAF3", 
            marginTop: 40,
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: 'center', 
            borderRadius: 10,
            gap: 10}}>
            <Image
            resizeMode='cover' 
            source={require("../../assets/icons/Search.png")} 
            style={{borderColor: COLORS.Primary}}
            />
            <TextInput
                style={{ paddingHorizontal: 5, paddingVertical: 15, shadowColor: "#EAEAF3" }}
                placeholder='Search'
            />
        </View>

        <View style={{flexDirection: "row", alignItems: "center", gap: 20, marginTop: 40, }}>
            <Image 
            source={require("../../assets/images/explore.png")}
            />
            <Text style={{opacity: 0.3}}>Most popular most wanted</Text>
        </View>

        <View style={{marginTop: 20, position: "relative"}}>
            <FlatList
            data={datas}
            renderItem={({item}) => <CardComponents item={item}  />}
            />
            <View style={{position: "absolute", bottom: 0, right: 0}}>
                <Image source={require("../../assets/images/locationBtn.png")}/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F4F4FA",
      paddingHorizontal: 30,
      paddingVertical: 40,
    },
  });

export default ExploreScreen