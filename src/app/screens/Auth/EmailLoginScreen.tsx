import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground } from 'react-native'
import Input from '../../../components/Input';
import LoginButton from '../../../components/LoginButton';
import { COLORS } from '../../../constants';
import { FontAwesome5 } from '@expo/vector-icons';
import PasswordInput from '../../../components/PasswordInput';
import Data from "../../../Data/data.json"
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
        <SafeAreaView style={styles.container}>
        <View style={styles.parent}>
            <View style={styles.upper}>
                <ImageBackground source={require("../../../../assets/headImage.png")} style={styles.Image}>
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
                        <Text style={styles.ForgetText}>Forget password? <Link href="/screens/Auth/ForgetPasswordScreen"><Text style={styles.retrieve}>Retrieve</Text></Link></Text>
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
                        <Text style={styles.LastViewFirst}>Don't have an account? <Link href="/screens/Auth/RegisterScreen"><Text style={styles.retrieve}>Sign Up</Text></Link> </Text>    
                    </View>    
            </View>
            </View>
            
            </View>
            </SafeAreaView>
    );
}

export default EmailLoginScreen;

const styles = StyleSheet.create({
      container: {
        display: "flex",
        flexDirection:"row",
        backgroundColor:"#F4F4FA",
        justifyContent: 'center',
        marginTop: 25,
        height:"100%"
    },
    IntroView: {
        
        
        
        marginLeft:30,
        marginTop:50
        
    },
    IntroText: {
        color: COLORS.Secondary,
        fontSize: 32,
        width: 247,
        height:44
    },
    upper: {
        height:"22%",
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
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height:"78%"
        
        
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
        marginBottom:150
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