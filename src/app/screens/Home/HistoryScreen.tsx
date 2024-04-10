import React from 'react'
import { View, Text, TextInput, Image, FlatList, StyleSheet } from 'react-native'
import {mall, COLORS, SIZES } from '../../../constants'
import { filterIcon, locationIcon, searchIcon } from '../../../constants/Icons'

const datas = [
    {
        id: "1",
        name: "Graha Mall",
        address: "123 Duke Street",
        price: 7,
        time: 7,
        image: `${mall}`,
        date: "12 Aug"
    },    {
        id: "2",
        name: "Graha Mall",
        address: "123 Duke Street",
        price: 7,
        time: 7,
        image: `${mall}`,
        date: "12 Aug"
    }, 

]

const CardComponents =({item}: {item: any})=> {
   return ( 
    <View style={{flexDirection: "row",gap: 20, alignItems: "center",  marginTop: 40, backgroundColor: "#fff",padding: 20, borderRadius: 20}}>
        <Image source={item.image} />
        <View style={{flex: 1, gap: 15}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start"}}>
                <View >
                    <Text style={{color:COLORS.Primary, fontSize: SIZES.large}}>{item.name}</Text>
                    <Text style={{color:COLORS.Primary, fontSize: SIZES.medium, opacity: 0.5}}>{item.address}</Text>
                </View>
               <Text style={{ opacity: 0.5 }}>{item.date}</Text>
            </View>
            <View style={{flexDirection: "row", gap:20}}>
                <View style={{flexDirection: "row",  alignItems: "center", gap: 5, backgroundColor: "#FFF3F3", paddingHorizontal: 25, paddingVertical: 10, borderRadius: 10}}>
                    <Image source={locationIcon}/>
                    <Text style={{color: COLORS.Orange}}>A-6</Text>
                </View>
                <View style={{flexDirection: "row",  alignItems: "center", gap: 5, backgroundColor: "#FFF3F3", paddingHorizontal: 25, paddingVertical: 10, borderRadius: 10}}>
                    <Image source={searchIcon}/>
                    <Text style={{color: COLORS.Orange}}>hours</Text>
                </View>            
            </View>

        </View>
    </View>
    
)}

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={{alignSelf: "center", fontSize: SIZES.medium_m, marginTop: 40}}>History</Text>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 10}}>
            <View style={{
                flex: 1,
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
                style={{width: 25, height: 25}}
                />
                <TextInput
                    style={{ paddingHorizontal: 5, paddingVertical: 15, shadowColor: "#EAEAF3" }}
                    placeholder='Search'
                />
            </View>
            <View 
            style={{
                backgroundColor: "#EAEAF3", 
                marginTop: 40,
                padding: 15,
                flexDirection: "row",
                alignItems: 'center', 
                borderRadius: 10,
                gap: 10}}>
                <Image
                    resizeMode='cover' 
                    source={filterIcon} 
                    style={{width: 25, height: 25}}
                    />
            </View>

        </View>
      

        <View style={{marginTop: 30, }}>
            <Text style={{fontSize: SIZES.medium_18}}>Recently</Text>
        </View>

        <View>
            <FlatList
            data={datas}
            renderItem={({item}) => <CardComponents item={item}  />}
            />

        </View>

        <View style={{marginTop: 30, }}>
            <Text style={{fontSize: SIZES.medium_18}}>This week</Text>
        </View>

        <View>
            <FlatList            
            data={datas}
            renderItem={({item}) => <CardComponents item={item}  />}
            />
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

export default HistoryScreen