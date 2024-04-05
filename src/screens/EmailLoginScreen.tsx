import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground } from 'react-native'
import Input from '../components/Input';
import LoginButton from '../components/LoginButton';
import COLORS from '../constants';
import { FontAwesome5 } from '@expo/vector-icons';
function EmailLoginScreen() {
    return (
        <View style={styles.parent}>
            <View style={styles.upper}>
                <ImageBackground source={require("../../assets/HeaderImage.png")} style={styles.Image}>
                    <View style={styles.IntroView}>
                        <Text style={styles.IntroText}>Glad to see you!!</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.LowerBig}>

               <View style={styles.ViewInput}>
                <Input text="Email" />
                <Input text="Password" />
                    <View style={styles.Forget}>
                        <Text>Forget password? <Text style={styles.retrieve}>Retrieve</Text></Text>
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
                        <Text>Don't have an account? <Text style={styles.retrieve}>Sign Up</Text></Text>    

                    </View>
               
                
            </View>
            






            </View>
            
       </View>
    );
}

export default EmailLoginScreen;

const styles = StyleSheet.create({
    IntroView: {
        
        display: "flex",
        marginLeft:30,
        marginTop:80
        
    },
    IntroText: {
        color: COLORS.Secondary,
        fontSize:26
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
        width: "100%",
        height:"100%"
        
    },
    LowerBig: {
        backgroundColor: COLORS.BackgroundColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height:"80%"
        
        
    },
    Forget: {
        display: "flex",
        flexDirection:"column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width:320
          
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
        marginBottom:20
    },
    footer: {
        marginTop:80
    }

})