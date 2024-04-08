import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground, Pressable } from 'react-native'
import Input from '../components/Input';
import LoginButton from '../components/LoginButton';
import COLORS from '../constants';
import { FontAwesome5 } from '@expo/vector-icons';
import PasswordInput from '../components/PasswordInput';
import Data from "../Data/data.json"
import { useState } from 'react';
import { Link } from 'expo-router'

function EmailLoginScreen() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    
    const handleLogin = () => {
        const user = Data.users.find((user) => user.Email === email)
        if (user) {
            console.log("user exist")
        } else {
            console.log("no")
        }
    }

    return (
        <View style={styles.parent}>
            <View style={styles.upper}>
                <ImageBackground source={require("../../assets/headImage.png")} style={styles.Image}>
                    <View style={styles.IntroView}>
                        <Text style={styles.IntroText}>Glad to see you!!</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.LowerBig}>

               <View style={styles.ViewInput}>
                <Input text="Email"     onChangeText={newText => setEmail(newText)}  value={email}    />
               <PasswordInput text="Password" onChangeText={newText =>setPassword(newText)}  value={password} />
                    <View style={styles.Forget}>
                        <Text style={styles.ForgetText}>Forget password? <Text style={styles.retrieve}>Retrieve</Text></Text>
                    </View>    
                

            </View>
                <View style={styles.footer}>
                    <View style={styles.ButtonView}>
                         <LoginButton
                    title="Login"
                    onPress={handleLogin}
                
                    />
                    </View>
                    <View style={styles.LowerLastView}>
                        <Text style={styles.LastViewFirst}>Don't have an account?<Link href="RegisterScreen"><Pressable><Text style={styles.retrieve}>Sign Up</Text></Pressable></Link> </Text>    

                    </View>
               
                
            </View>
            






            </View>
            
       </View>
    );
}

export default EmailLoginScreen;

const styles = StyleSheet.create({
    IntroView: {
        
        
        
        marginLeft:30,
        marginTop:45
        
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
         height:"100%"
        
    },
    parent:{
        backgroundColor: COLORS.DarkBlue,
        width: "100%",
        height:"100%"
        
    },
    LowerBig: {
        backgroundColor: COLORS.AuthBackgroundColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height:"80%"
        
        
    },
    Forget: {
        display: "flex",
        flexDirection:"column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: 320,
        fontSize: 14,
        
          
      },
    ForgetText: {
        color:COLORS.Grey
          
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
        marginBottom:50
    },
    LowerLastView: {
        display: "flex",
        alignItems:"center",
        marginBottom: 20,
        fontSize:14
    },
    LastViewFirst: {
        color:COLORS.Grey
        
    },

    footer: {
        marginTop:80
    }

})