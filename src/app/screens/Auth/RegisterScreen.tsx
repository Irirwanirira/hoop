import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, ImageBackground } from 'react-native'
import { Link } from 'expo-router';
import Input from '../../../components/Input';
import LoginButton from '../../../components/LoginButton';
import PasswordInput from '../../../components/PasswordInput';
import Data from "../../../Data/data.json"
import { COLORS } from '../../../constants';

function RegisterScreen() {
    const [email, setEmail] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [password, setPassword] = useState<string>("")

   
    const Register = () => {
        const newUser = {
        Email: email,
        Phone: phoneNumber,
        Password:password
        
    }
     
        Data.users.push(newUser)
        console.log(newUser)
        
    }

    return (
        <SafeAreaView style={styles.container} >
        <View style={styles.parent}>
            <View style={styles.upper}>
                <ImageBackground source={require("../../../../assets/headImage.png")} style={styles.Image}>
                    <View style={styles.IntroView}>
                        <Text style={styles.IntroText}>Let's Start!!</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.LowerBig}>

               <View style={styles.ViewInput}>
                    <Input text="Email" onChangeText={setEmail} value={email} />
                    
                    <PasswordInput text="Password" onChangeText={newText => setPassword(newText)}  value={password}/>
                    <Input text="Password Authentication"  onChangeText={newText =>setPassword(newText)}  value={password} />
                        <Input text="Phone Number" onChangeText={setPhoneNumber} value={phoneNumber} />
                        
            </View>
                <View>
                    <View style={styles.ButtonView}>
                         <LoginButton
                    title="Register"
                    onPress={Register}
                
                    />
                    </View>
                    <View style={styles.LowerLastView}>
                        <Text style={styles.LowerText}>Have an account? <Link href="/screens/Auth/EmailLoginScreen"><Text style={styles.retrieve}>Sign in</Text></Link></Text>    

                    </View>
               
                
            </View>
            






            </View>
            
       </View>
      </SafeAreaView>
        
    );
}

export default RegisterScreen;

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
        display: "flex",
        marginLeft:30,
        marginTop:60
        
       
        
        
        
    },
    IntroText: {
        color: COLORS.Secondary,
        fontSize:32
    },
    upper: {
        height: "22%",
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
        height:"78%"
        
        
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
         marginTop: 30,
        display: "flex",
        alignItems: "center",
        marginBottom:120
    },
    LowerLastView: {
        display: "flex",
        alignItems:"center",
        marginBottom: 20,
        fontSize:18
    },
    LowerText: {
        color:"grey"
    }

})