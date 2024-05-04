import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Image, FlatList, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import {mall, COLORS, SIZES } from '../../../constants'
import { leftArrowWithBackground, locationIcon, searchIcon } from '../../../constants/Icons'
import { exploreImage } from '../../../constants/Images'
import { databases } from '../../../appwrite/Appwrite'
import { router } from 'expo-router'


const CardComponents =({item}: {item: any})=> {
    
   return ( 
    <View style={{flexDirection: "row", justifyContent:"space-between",alignItems: 'flex-start',  marginTop: 40, backgroundColor: "#fff",padding: 20, borderRadius: 20}}>
        <View style={{flexDirection: "row", gap: 20 }}>
            <Image source={mall}/>
            <View>
            <Text style={{ color: COLORS.Primary, fontSize: SIZES.large }}>
                {item?.name.slice(0,8) + "..." }
              </Text>
              <Text
                style={{
                  color: COLORS.Primary,
                  fontSize: SIZES.medium,
                  opacity: 0.5,
                }}
              >
                {item?.adress}
              </Text>               
              <Text style={{color:COLORS.Primary, fontSize: SIZES.medium, opacity: 0.5}}>{item?.address}</Text>
                <Text style={{color:COLORS.Orange, fontSize: SIZES.large, fontWeight: "900", marginTop: 15}}>${item?.price}<Text 
                style={{fontWeight: "normal", fontSize: SIZES.medium_m}}> /hour</Text></Text>
            </View>
        </View>
      
        <Text style={{backgroundColor: "#FFF3F3", paddingVertical:10, paddingHorizontal: 25,borderRadius: 20,color: COLORS.Orange, opacity: 0.8 }}>{item?.time} min</Text>
    </View>
    
)}

const ExploreScreen = () => {
    const [parkingList, setParkingList] = useState([])    
    const [isLoading, setIsLoading] = useState(false)



    useEffect(()=> {
        const fetchParking = async()=> {
            try {
                setIsLoading(true);
                const list = await databases.listDocuments(
                    'hoopDatabase',
                    '66296e5b134e7f12ff59',
                )
                setParkingList(list.documents)
                setIsLoading(false)

            
            } catch (error) {
                    console.log("error", error)
                    setIsLoading(false)
                }
        }
        fetchParking()
    }, [])
  return (
    <View style={styles.container}>
           <Pressable
            onPress={()=> router.back()}
            style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 30,
            marginTop: 40
            }}
        >
            <Image
            style={{ alignSelf: "flex-end" }}
            source={leftArrowWithBackground}
            />
            <Text style={{ fontSize: SIZES.medium_m }}>Explore</Text>
            <View></View>
        </Pressable>
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
            source={searchIcon} 
            style={{borderColor: COLORS.Primary}}
            />
            <TextInput
                style={{ paddingHorizontal: 5, paddingVertical: 15, shadowColor: "#EAEAF3" }}
                placeholder='Search'
            />
        </View>

        <View style={{flexDirection: "row", alignItems: "center", gap: 20, marginTop: 40, }}>
            <Image 
            source={exploreImage}
            />
            <Text style={{opacity: 0.3}}>Most popular most wanted</Text>
        </View>

        {
            isLoading ? (
                <ActivityIndicator size="large" color={COLORS.Orange} />
            ): (
                <View style={{marginTop: 20, position: "relative"}}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                        data={parkingList}
                        renderItem={({item}) => <CardComponents item={item}  />}
                    />
            
                    <View style={{position: "absolute", bottom: 0, right: 0}}>
                        <Image source={locationIcon}/>
                    </View>
                </View>
            )
        }
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