import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground, Pressable,TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';



function PasscodeScreen() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.parent}>
            <View>
                    <ImageBackground source={require("../../../assets/Ellipse.png")} style={styles.backImage} >
                        <View style={styles.ImageView}>
                            <Image source={require("../../../assets/man.png")} style={ styles.womanImage} />    

                        </View>
                    </ImageBackground>
                        <View style={styles.PassCodeView}>
                            <Text style={styles.PassCodeText}>Enter Your Passcode</Text>
                        </View>
                        <View style={styles.IntroView}>
                           <View style={styles.IntroTextView}><Text style={styles.IntroText1}>For the security of your account,</Text></View> 
                           <View style={styles.IntroTextView}><Text style={styles.IntroText2} >Please enter the security code</Text></View> 
                           
                    </View>
                    <View style={styles.inputOuterView}>
                        <View style={styles.inputView}>
                            <TextInput style={styles.otpInput} textAlign="center" />
                            <TextInput style={styles.otpInput}  textAlign="center"   />
                            <TextInput style={styles.otpInput}  textAlign="center"  />
                            <TextInput style={styles.otpInput }  textAlign="center"  />
                        </View> 
                    </View>
                      <View  style={styles.scanViewOuter} >
                        <View style={styles.scanView}>
                            {/* <MaterialCommunityIcons name="scan-helper" size={50} color="black" style={styles.Icon} /> */}
                            <Image source={require("../../../assets/outLine.png") } style={styles.Icon} />
                           <Image source={ require("../../../assets/Finger.png") } style={styles.fingerprintImage} />
                        </View>
                       </View>
                       
                        
                        <View>
                            <View style={styles.finalView}><Text style={styles.finalText1}>Scan <Text style={styles.finalText2} >to verify for easy security</Text></Text></View>
                           
                        </View>
                        
                
            </View>
            
       </View>
        </SafeAreaView>
    );
}

export default PasscodeScreen;

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
        marginTop:50,
        
    },
    ImageView: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop:100
        
    },
    backImage: {
        width: 292,
        height:292
    },
    womanImage: {
        
    },
    PassCodeView: {
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        marginBottom:20
    },
   PassCodeText: {
        color: "#2D2D2D",
        fontSize:28
        
    },
   
    
    
    IntroView: {
        marginBottom:40
         
    },
    IntroTextView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color: "#2D2D2D",
        fontSize:18
    },
    IntroText1: {
        color: "#2D2D2D",
        fontSize: 14,
        fontWeight:"200"

    },
        
    IntroText2: {
        color: "#2D2D2D",
        fontSize: 14,
         fontWeight:"200"

        
    },
    IntroText3: {
        color: "#2D2D2D",
        fontSize: 14,
         fontWeight:"200"

        
    },
   otpInput: {
        width: 52,
        borderBottomWidth: 1,
       borderColor: "#2D2D2D",
       
        fontSize: 32,
        color: "#000000",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
        
         
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
    scanViewOuter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
        
    },
    scanView: {
        marginBottom:70
        
    },
    Icon: {
        zIndex: -1,
        position: "absolute",
       
        borderColor:"red"
        
    },
    fingerprintImage: {
    width: 64, 
    height: 64, 
    resizeMode: 'contain', // Ensures the image scales nicely
    zIndex: 2, // Ensures the image appears above the icon
    padding:20
  }
    ,
    finalText1: {
        color: "#F43939",
        fontSize: 14,
         

    },
    finalText2: {
        color: "#2D2D2D",
        fontSize: 14,
         fontWeight:"200"

    },
    finalView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    }

})