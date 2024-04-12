import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground,ScrollView } from 'react-native'
import { router, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import PlanFeature from '../../../components/PlanFeature';
import PlanBtn from '../../../components/PlanBtn';

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
                    <View style={styles.explainTextView}><Text style={styles.explainText} >Get all the facilities</Text></View> 
                    <View style={styles.explainTextView}><Text style={styles.explainText}   >by upgrading your</Text></View> 
                    <View style={styles.explainTextView}><Text  style={styles.explainText}  >account</Text></View> 
                </View>
                <ScrollView
                    style={styles.scroll}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                    alignItems: 'center', // Centers items vertically in the ScrollView
                    paddingStart: 20, // Padding at the start of the ScrollView
                    paddingEnd: 20, // Padding at the end of the ScrollView
                }}
                >
            <View style={styles.featureOuter}>
              <View style={styles.categoryView}>
                <Text style={styles.categoryText}>Basic</Text>    
                </View>
                 <View style={styles.availableFeatures}>
                        <PlanFeature text="All includes" /> 
                        <PlanFeature text="Unlimited feature" /> 
                        <PlanFeature text="Discount every reservation" /> 
                        <PlanFeature text="All includes" /> 
                        <PlanFeature text="All includes" /> 
                        <PlanFeature text="All includes"/> 
                 </View>  
                    
                </View>
             <View style={styles.featureOuter}>
              <View style={styles.categoryView}>
                <Text style={styles.categoryText}>Advanced</Text>    
                </View>
                 <View style={styles.availableFeatures}>
                        <PlanFeature text="All includes" /> 
                        <PlanFeature text="Unlimited feature" /> 
                        <PlanFeature text="Discount every reservation" /> 
                        <PlanFeature text="All includes" /> 
                        <PlanFeature text="All includes" /> 
                        <PlanFeature text="All includes"/> 
                 </View>  
                    
                </View>
                 <View style={styles.featureOuter}>
              <View style={styles.categoryView}>
                <Text style={styles.categoryText}>Pro</Text>    
                </View>
                 <View style={styles.availableFeatures}>
                        <PlanFeature text="All includes" /> 
                        <PlanFeature text="Unlimited feature" /> 
                        <PlanFeature text="Discount every reservation" /> 
                        <PlanFeature text="All includes" /> 
                        <PlanFeature text="All includes" /> 
                        <PlanFeature text="All includes"/> 
                 </View>  
                    
             </View>  
                    
             </ScrollView>   
             <View style={styles.btnView}>
                 <PlanBtn
                    title="Choose a plan"
                    functionAction={()=>console.log("choose")}
                 />   
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
        marginBottom: 20,
        width: "100%",
    },
    IconView: {
        width: 44,
        height: 44,
        borderRadius:10,
        backgroundColor: "#EAEAF3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
         marginLeft: 20,
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
        width:"70%"
        
        // width:"70%"
    },
    explainView: {
        marginTop: 20,
        marginBottom:50
    },
    explainTextView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
        
    },
    explainText: {
        color: "#2D2D2D",
        fontSize:24
    },
    featureOuter: {
        backgroundColor: "white",
        width: 259,
        height: 372,
        borderRadius: 20,
        marginLeft: 15,
        marginRight:15
        
    },
    categoryView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 30,
        marginBottom:20
        
    },
    categoryText: {
        color: "#2D2D2D",
        fontSize:22
    },
    availableFeatures: {
        width:"80%"
        
    },
    scroll: {
        flexGrow: 0,
        marginBottom:30
    },
    btnView: {
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    }
    
})