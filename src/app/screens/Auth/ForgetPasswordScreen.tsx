import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground } from 'react-native'
import { router, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants';
import Input from '../../../components/Input';
import LoginButton from '../../../components/LoginButton';
function ForgetPasswordScreen() {
    const [email, setEmail] = useState<string>("")
    const navigate=useNavigation()

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.parent} >
            <View style={styles.upper}>
                <View style={styles.IconView}>
                    <Ionicons name="chevron-back" size={24}  />
                </View>
                <View style={styles.forgetView}>
                    <Text style={styles.forget}>Forget Password</Text>
                </View>
                
            </View>
            <View>
                <View style={styles.resetView}><Text style={styles.reset}>Reset Password</Text></View>
                <View style={styles.Intro}>
                    <Text style={styles.explain} >Enter the email associated with your</Text>
                    <Text style={styles.explain} >account and we’ll send an email with</Text>
                    <Text style={styles.explain}  >instructions to reset your password.</Text>
                </View>
                <View>
                    <Text style={styles.EmailTitle}>Email address</Text>
                    </View>
                    <View style={styles.inputView}>
                         <Input text="Email"     onChangeText={newText => setEmail(newText)}  value={email}    />
                    </View>
                    <View>
                         <LoginButton
                        title="Send"
                        onPress={()=>router.push("/screens/Auth/CheckEmailScreen")}
                    
                        />

                    </View>
            </View>

        </View>
        </SafeAreaView>
        
    );
}

export default ForgetPasswordScreen;

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
        gap:20
        
    },
    resetView: {
        marginTop:20
        
    },
    Intro: {
        marginTop: 10,
        marginBottom:15
        
        
    },
    reset: {
        fontSize: 20,
        color:"#2D2D2D"
        
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
    forget: {
        color: "#2D2D2D",
        fontSize: 22,
        
    },
    forgetView: {
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    },
    explain: {
        fontSize: 16,
        color: "#2D2D2D",
        fontWeight:"200"
        
    },
    inputView: {
        marginBottom:"100%"
    }
    
})