import React, { useEffect, useState } from 'react'
import { Text, View,FlatList, SafeAreaView, Pressable, TextInput } from 'react-native'
import { ID } from 'react-native-appwrite';

import {databases }from '../../upwrite'

interface PlaceType {
    $id: string
    name: string;
}

const AppwriteData = () => {
    const [document, setDocument] = useState<PlaceType[]>([])
    const [place, setPlace] = useState<string>(" ")
  
    useEffect( ()=> {
        const fetchData = async()=> {

            try {
                const list = await databases.listDocuments(
                    'hoopDatabase',
                    'placeCollection',
                )
                setDocument(list)
            } catch (error) {
                console.log("error", error)
            }
        }

        fetchData()
    }, [])

    const addData = async()=> {

        try {
            const newData = await databases.createDocument(
                'hoopDatabase',
                'placeCollection',
                ID.unique(),
                {"name": `${place}`}
            )
            console.log(newData.name)
        
            setDocument(newData);

            console.log(document)
        } catch (error) {
            console.log("error", error)
        }
    }

  return (
    <SafeAreaView style={{flex:1, alignItems: "center", justifyContent: "center"}}>
     <Text>Here are my views</Text>
   
     <TextInput 
        placeholder= "ADD YOUR PLACE"
        value={place}
        onChangeText={setPlace}
     />
     <Pressable
      onPress={addData}
      style={{backgroundColor: "blue",  padding: 10}}
    >
        <Text style={{color: "white"}}>Add name</Text>
     </Pressable>
    </SafeAreaView>
  )
}

export default AppwriteData
