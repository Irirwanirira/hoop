import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground } from 'react-native'
import Input from '../components/Input';
import LoginButton from '../components/LoginButton';
import COLORS from '../constants';
import PasswordInput from '../components/PasswordInput';
import Data from "../Data/data.json"


function RegisterScreen() {
    const [email, setEmail] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const newUser = {
        Email: email,
        Phone: phoneNumber,
        Password:password
        
    }

    const Register = () => {
        const newUser = {
        Email: email,
        Phone: phoneNumber,
        Password:password
        
    }
     
        Data.users.push(newUser)
        
    }

    return (
        <View style={styles.parent}>
            <View style={styles.upper}>
                <ImageBackground source={require("../../assets/headImage.png")} style={styles.Image}>
                    <View style={styles.IntroView}>
                        <Text style={styles.IntroText}>Let's Start!!</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.LowerBig}>

               <View style={styles.ViewInput}>
                 <Input text="Email"     onChangeText={setEmail}  value={email} />
                 <PasswordInput text="Password" />
                    <Input text="Password Authentication"  onChangeText={setPassword}  value={password} />
                    <Input text="Phone Number"  onChangeText={setPhoneNumber}  value={phoneNumber}   />

                        
                

            </View>
                <View>
                    <View style={styles.ButtonView}>
                         <LoginButton
                    title="Register"
                    onPress={Register}
                
                    />
                    </View>
                    <View style={styles.LowerLastView}>
                        <Text>Don't have an account? <Text style={styles.retrieve}>Sign Up</Text></Text>    

                    </View>
               
                
            </View>
            






            </View>
            
       </View>
        
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    IntroView: {
        display: "flex",
        marginLeft:30,
        marginTop:80
        
       
        
        
        
    },
    IntroText: {
        color: COLORS.Secondary,
        fontSize:32
    },
    upper: {
        height: 150,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center"
    },
    Image: {
         width: "100%",
         height:200
        
    },
    parent:{
        backgroundColor: COLORS.DarkBlue,
        width:"100%"
        
    },
    LowerBig: {
         backgroundColor: COLORS.AuthBackgroundColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        
        
    },
    Forget: {
        display: "flex",
        flexDirection:"column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: 320,
        fontSize:14
          
      },

    ButtonView: {
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom:20
        
    },
    retrieve: {
        color:COLORS.Orange
    },
    ViewInput: {
         marginTop: 50,
        display: "flex",
        alignItems: "center",
        marginBottom:100
    },
    LowerLastView: {
        display: "flex",
        alignItems:"center",
        marginBottom: 20,
        fontSize:14
    }

})