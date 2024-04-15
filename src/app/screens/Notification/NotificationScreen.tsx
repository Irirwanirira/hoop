import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground } from 'react-native'
import { router, useNavigation,Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import OrderNotification from '../../../components/OrderNotification';

function NotificationScreen() {
    return (
         <SafeAreaView style={styles.container}>
        <View style={styles.parent} >
                <View style={styles.upper}>
                <Link href="/screens/Home/HomeView">
                    <View style={styles.IconView}>
                    <Ionicons name="chevron-back" size={24} color="#9E9EA4" />
                    </View>
                </Link>
                <View style={styles.notificationView}>
                    <Text style={styles.notification}>Notifications</Text>
                </View>
                
            </View>
                <View>
                    <View style={styles.todayView}><Text style={styles.todayText}>Today</Text></View>

                </View>
                <View style={styles.currentNotification}>
                    <OrderNotification />
                    <OrderNotification />
                    <OrderNotification
                    sideLineColor2={{backgroundColor:"#FFF3F3"}}    
                    OrdersuccTextStyle2={{color:"#2D2D2D",fontWeight:"300"}}
                    />
                </View>
                <View style={styles.PreNotification}>
                    <View style={styles.preDateView}> 
                        <Text  style={styles.preDateText} >June 12, 2021</Text>
                    </View>
                    <View>
                        <OrderNotification
                    sideLineColor2={{backgroundColor:"#FFF3F3"}}    
                    OrdersuccTextStyle2={{color:"#2D2D2D",fontWeight:"300"}}
                        />
                         <OrderNotification />
                    </View>

                </View>
            

        </View>
        </SafeAreaView>
        
    );
}

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection:"row",
        backgroundColor:"#F4F4FA",
        justifyContent: 'center',
        marginTop: 25,
        height:"100%"
    },
    parent: {
        marginTop:50  
    },
   
    father: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"center"    
    },
    upper: {
        display: "flex",
        flexDirection: "row",
        
        marginBottom:50
    },
    IconView: {
        width: 44,
        height: 44,
        borderRadius:10,
        backgroundColor: "#EAEAF3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex:1000
    },
    notification: {
        color: "#2D2D2D",
        fontSize: 22, 
        fontWeight:"500"
    },
    notificationView: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        flex:1
        // width:"70%"
    },
    todayView: {
        marginBottom:20
        
    },
    todayText: {
        fontSize:20
        
    },
    currentNotification: {
        
    },
    PreNotification: {
        
    },
    preDateView: {
        marginBottom:20
    },
    preDateText: {
       fontSize:20 
    }
    
})