import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground,TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
function VerificationScreen() {
    return (
       <SafeAreaView style={styles.container}>
        <View style={styles.parent} >
            <View style={styles.upper}>
                <View style={styles.IconView}>
                    <Ionicons name="chevron-back" size={24}  />
                </View>
                <View style={styles.verificationView}>
                    <Text style={styles.verification}>OTP Verification</Text>
                </View>
                
            </View>
            <View>
               
                <View style={styles.Intro}>
                    <View style={styles.ExplanView}><Text style={styles.explain} >We have sent an OTP on </Text></View>
                    <View style={styles.ExplanView}><Text style={styles.explain} >given number  +62 </Text></View> 
                     <View style={styles.ExplanView}><Text style={styles.explain} >8123456789 </Text></View>
                   
                </View>
                <View style={styles.inputOuterView}>
                        <View style={styles.inputView}>
                            <TextInput style={styles.otpInput} textAlign="center" />
                            <TextInput style={styles.otpInput}  textAlign="center"   />
                            <TextInput style={styles.otpInput}  textAlign="center"  />
                            <TextInput style={styles.otpInput }  textAlign="center"  />
                        </View>
                    
                    
                </View>
                    <View style={styles.TimeSection}>
                    <View style={styles.TimeSection2}>
                        <View>
                             <MaterialIcons name="watch-later" size={24} color="#F43939" />
                        </View>
                        <View>
                            <Text style={styles.Time }>00:56</Text>
                        </View>
                        
                    </View>
                </View>
            </View>

        </View>
        </SafeAreaView>
        
    );
}

export default VerificationScreen;

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
        gap:40
        
    },
    ExplanView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
        
    },
    otpInput: {
        width: 52,
        borderBottomWidth: 2,
        borderColor: "grey",
        fontSize: 32,
        color: "#000000",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
        
         
     },
    Intro: {
        marginTop: 60,
        marginBottom:60
        
        
    },
    Time: {
        color: "#F43939",
        fontSize:14
    },
   
    EmailTitle: {
        fontSize: 16,
        marginBottom: 20,
        marginTop: 20,
        color:"#2D2D2D"
        
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
    verification: {
        color: "#2D2D2D",
        fontSize: 22,
        
    },
    verificationView: {
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    },
    explain: {
        fontSize: 18,
        color: "#2D2D2D",
        // fontWeight:"200"
        
    },
    inputView: {
        width: 256,
        height:48,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    inputOuterView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 63,
        height:18
    },
    TimeSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:'center'
    },
    TimeSection2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        width:63
    }
    
})