import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground, TextStyle } from 'react-native'
import { router, useNavigation } from 'expo-router';

interface OrdersuccProps{
    OrdersuccTextStyle2?: TextStyle,
    sideLineColor2?:TextStyle
}

function OrderNotification({OrdersuccTextStyle2,sideLineColor2}:OrdersuccProps) {
    return (
        <View style={styles.outer}>
            <View style={styles.inner}>
                <View style={[styles.SideLine,sideLineColor2]}>

                </View>
                <View style={styles.Right}>
                    <View style={styles.RightUpper}>
                        <View style={styles.OrderSuccView}>
                            <Text  style={[styles.OrderSuccText,OrdersuccTextStyle2]}  >
                                Order successful
                            </Text>
                        </View>
                        <View style={styles.TimeView}>
                           <Text  style={styles.TimeText}>12:34</Text>
                        </View>
                    </View>
                    <View style={styles.ThanksView}  >
                        <Text  style={styles.ThanksText} >
                            Congrats on your reserved parking space
                       </Text>
                    </View>

                </View>

            </View>

        </View>
    );
}

export default OrderNotification;

const styles = StyleSheet.create({
    outer: {
        width: 311,
        height: 87,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    inner: {
        width:"90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:"center"
    },
    SideLine: {
        height: 47,
        width:3,
        backgroundColor: "#F43939",
        marginRight: 10,
        marginLeft: 10,
       
    },
    Right: {
        
    },
    RightUpper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:10
    },
    OrderSuccView: {
        
    },
    OrderSuccText: {
        color: "#2D2D2D",
        fontWeight:"bold",
        fontSize:18
        
    },
    TimeView: {
        
    },
    TimeText: {
        color: "#2D2D2D",
        fontSize:14
        
    },
    ThanksView: {
        
    },
    ThanksText: {
        color: "#2D2D2D",
        fontWeight:"200",
        fontSize:14
        
    }

    
})