import React from 'react'
import { View, Text, TextInput, Image, FlatList, StyleSheet } from 'react-native'
import {mall, COLORS, SIZES } from '../../../constants'
import { filterIcon, filterWithBackground, leftArrowWithBackground, rightIcon, searchIcon } from '../../../constants/Icons'
import { exploreImage, locationImage } from '../../../constants/Images'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    },    
    {
        id: "3",
        name: "Graha Mall",
        address: "123 Duke Street",
        price: 7,
        time: 7,
        image: `${mall}`
    },
    {
        id: "4",
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

const DetailCategoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <View>
                    <Image
                        resizeMode='cover' 
                        source={leftArrowWithBackground} 
                        />
            </View>
            <Text style={{alignSelf: "center", fontSize: SIZES.medium_m,}}>Detail Category</Text>
            <View>
                    <Image
                        resizeMode='cover' 
                        source={filterWithBackground} 
                        />
            </View>
        </View>

        <View style={{flexDirection: "row", alignItems: "center", gap: 30, marginTop: 40, }}>
            <Image 
            source={exploreImage}
            />
            <Text style={{opacity: 0.3}}>Most popular most wanted</Text>
        </View>

        <View style={{marginTop: 10, position: "relative"}}>
            <FlatList
            data={datas}
            renderItem={({item}) => <CardComponents item={item}  />}
            />
            <View style={{position: "absolute", bottom: 100, right: 0}}>
                <Image source={locationImage }/>
            </View>
        </View>
    </SafeAreaView>
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

export default DetailCategoryScreen