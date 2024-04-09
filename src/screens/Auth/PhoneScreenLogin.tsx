import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground } from 'react-native'
import Input from '../../components/Input';
import LoginButton from '../../components/LoginButton';
import COLORS from '../../constants';
import { useState } from 'react';
import PasswordInput from '../../components/PasswordInput';
import PhoneNumberInput from '../../components/PhoneNumberInput';

function PhoneScreenLogin() {
     const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    return (
         <View style={styles.parent}>
            <View style={styles.upper}>
                <ImageBackground source={require("../../../assets/headImage.png")} style={styles.Image}>
                    <View style={styles.IntroView}>
                        <Text style={styles.IntroText}>Glad to see you!!</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.LowerBig}>

                <View style={styles.ViewInput}>
                <PhoneNumberInput/>
                
                 <PasswordInput text="Password" onChangeText={newText =>setPassword(newText)}  value={password} />
                    <View style={styles.Forget}>
                        <Text style={styles.forgetText}>Forget password? <Text style={styles.retrieve}>Retrieve</Text></Text>
                    </View>    
                

            </View>
                <View style={styles.footer}>
                    <View style={styles.ButtonView}>
                         <LoginButton
                    title="Login"
                    onPress={()=>console.log("yes")}
                
                    />
                    </View>
                    <View style={styles.LowerLastView}>
                        <Text style={styles.LowerText}>Don't have an account? <Text style={styles.retrieve}>Sign Up</Text></Text>    

                    </View>
               
                
            </View>
            






            </View>
            
       </View>
    );
}

export default PhoneScreenLogin;

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
        height:"22%",
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
    forgetText: {
        color: "grey",
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
        color: COLORS.Orange,
        fontSize:14
    },
    ViewInput: {
         marginTop: 50,
        display: "flex",
        alignItems: "center",
        marginBottom:200
    },
    footer: {
        marginTop:30
    },
    LowerLastView: {
        display: "flex",
        alignItems:"center",
        marginBottom: 20,
        fontSize:14
    },
    LowerText: {
        color: "grey",
        fontSize:14
    }

})