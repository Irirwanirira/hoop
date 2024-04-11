import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground, TextStyle } from 'react-native'
import { router, useNavigation } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

interface planFeatureProps{
    text:String
}

function PlanFeature({text}:planFeatureProps){
    return (
        <View style={styles.outer}>
            <View style={styles.iconView}>
                <AntDesign name="checksquare" size={24} color="red" />
            </View>
            <View style={styles.textView}>
                <Text>{text }</Text>
            </View>
        </View>
    );
}

export default PlanFeature;

const styles = StyleSheet.create({
    outer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        gap:20
        
    },


    iconView: {
        
    },
    textView: {
        
    }
    
})