import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground,ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import PaymentTF from '../../../components/PaymentTF';
import PlanBtn from '../../../components/PlanBtn';
import { useState } from 'react';
function SelectPlanScreen() {
    const [selectedTab,setSelectedTab]=useState(0)
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
             <View style={styles.ImageViewOuter}>
               <ImageBackground source={require("../../../../assets/Ellipse.png")} style={styles.backImage} >
                        <View style={styles.ImageView}>
                            <Image source={require("../../../../assets/images/choosepyt.png")} style={ styles.womanImage} />    
                        </View>
                </ImageBackground>
             </View>
             <View>
                 <PaymentTF
                    timeFrame="Yearly"
                     time="y"   
                     moneyperTime="$210/" 
                     description="Pay for a full year" 
                     selected={selectedTab===0}
                      onPress={()=> setSelectedTab(0)}  
                    /> 

                 <PaymentTF
                     timeFrame="Monthly"
                     time="m"   
                     moneyperTime="$20/" 
                     description="Pay monthly cancel anytime"
                     selected={selectedTab===1}
                      onPress={()=> setSelectedTab(1)}     
                />      
             </View>
             <View style={styles.btnView}>
                 <PlanBtn
                    title="Make a payment"
                    functionAction={()=>console.log("choose")}
                 />   
             </View>   

        </View>
        </SafeAreaView>
        
    );
}

export default SelectPlanScreen;

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
        marginTop:40  
    },
   
    father: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"center"    
    },
    upper: {
        display: "flex",
        flexDirection: "row",
         marginBottom: 40,
        width: "100%",
       
    },
    IconView: {
        width: 44,
        height: 44,
        borderRadius:10,
        backgroundColor: "#EAEAF3",
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
       
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
        width: "70%",
       // marginBottom:30
        
        // width:"70%"
    },
    backImage: {
        width: 292,
        height:292
    },
    womanImage: {
        
    },
    ImageView: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop:100
        
    },
    ImageViewOuter: {
       display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom:20
    },
     btnView: {
        display: "flex",
        justifyContent: "center",
         alignItems: "center",
        marginTop:20
    }
})