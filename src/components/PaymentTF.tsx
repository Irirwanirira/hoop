import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, Pressable } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';


interface paymentTFProps{
    timeFrame: string,
    moneyperTime: string,
    description: string,
    time:string,
    onPress?: () => void,
    selected:boolean
}


function PaymentTF({timeFrame,moneyperTime,time,description,onPress,selected}:paymentTFProps) {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.outerView,
                selected?{backgroundColor:"white",borderWidth:1,borderColor:"#F43939"}:{backgroundColor:"#EAEAF3",borderWidth:0}
            ]}
        >
            <View style={styles.innerView}>
                <View style={styles.iconView}>
                    <MaterialIcons
                        name={selected? "radio-button-checked":'radio-button-unchecked'}
                        size={34}
                        color={selected ? "#F43939" : "#9E9EA4"}
                        
                    
                    
                    />
                </View>
                <View style={styles.RightView}>
                    <View style={styles.TimeframeView}>
                        <View style={styles.TimeView}><Text style={styles.TimeText}>{ timeFrame}</Text></View>
                        <View style={styles.MoneperTimeView}><Text style={[styles.MoneperTimeText, selected ? { color: "#F43939" } : { color: "#2D2D2D" }]}>{moneyperTime}<Text style={styles.frame}>{time}</Text></Text></View>
                    </View>
                    <View style={styles.descriptionView}>
                        <Text style={styles.descriptionText}>{ description}</Text>
                    </View>
                </View>
            </View>

        </Pressable>
       
    );
}

export default PaymentTF;

const styles = StyleSheet.create({
    outerView: {
        width: 311,
        height: 97,
        display: "flex",
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: 15,
        marginBottom:20
    },
    innerView: {
        width: "90%",
        height:"80%",
         display: "flex",
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',    
    },
    iconView: {
        
    },
    RightView: {
        width:"80%"
    },
    TimeframeView: {
       display: "flex",
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:10
    },
    TimeView: {
        
    },
    TimeText: {
        fontSize: 20,
        color:"#2D2D2D"
        
    },
    MoneperTimeView: {
        
    },
    MoneperTimeText: {
        color: "#F43939",
        fontSize:24
    },
    descriptionView: {
        
    },
    descriptionText: {
        color: "#8B8B90",
        fontWeight:'100',
        fontSize:16   
    },
    frame: {
        fontSize:20
    }
        
    
})