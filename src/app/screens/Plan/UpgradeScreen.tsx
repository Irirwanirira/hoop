import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground } from 'react-native'
import { router, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';



function UpgradeScreen() {
    return (
       <SafeAreaView style={styles.container}>
        <View style={styles.parent} >
            <View style={styles.upper}>
                <View style={styles.IconView}>
                    <Ionicons name="chevron-back" size={24} color="#9E9EA4" />
                </View>
                <View style={styles.upgradeView}>
                    <Text style={styles.upgradeText}>Upgrade</Text>
                </View>
             </View>
            <View style={styles.explainView}>
                 <View style={styles.explainText}></View>   
            </View>
                
                
            

        </View>
        </SafeAreaView>
        
    
    );
}

export default UpgradeScreen;

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
    upgradeText: {
        color: "#2D2D2D",
        fontSize: 22, 
        fontWeight:"500"
    },
    upgradeView: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        flex:1
        // width:"70%"
    },
    explainView: {
        
    },
    explainText: {
        
    }
    
})