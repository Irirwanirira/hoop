import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground, Pressable } from 'react-native'
function CheckEmailScreen() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.parent}>
            <View>
                    <ImageBackground source={require("../../../../assets/Ellipse.png")} style={styles.backImage} >
                        <View style={styles.ImageView}>
                            <Image source={require("../../../../assets/woman.png")} style={ styles.womanImage} />    

                        </View>
                    </ImageBackground>
                        <View style={styles.checkEmailView}>
                            <Text style={styles.checkEmailText}>Check Your Email</Text>
                        </View>
                        <View style={styles.IntroView}>
                           <View style={styles.IntroTextView}><Text style={styles.IntroText1}>We have sent a password</Text></View> 
                           <View style={styles.IntroTextView}><Text style={styles.IntroText2} >Recover instructions to your</Text></View> 
                           <View style={styles.IntroTextView}><Text  style={styles.IntroText3}>email</Text></View>
                        </View>
                        <View style={styles.btnView}>
                            <Pressable style={styles.btn}>
                                <Text style={styles.btnText}>Open Email App</Text>
                            </Pressable>
                        </View>
                        <View style={styles.skipView}>
                            <Text style={styles.skipText } >Skip I will comfirm later</Text>
                        </View>
                        <View>
                            <View style={styles.finalView}><Text style={styles.finalText1}>Didn't receive an email ?check your spam</Text></View>
                           <View  style={styles.finalView}  ><Text style={styles.finalText1}>filter,or <Text style={styles.finalText2} >try another email address</Text></Text></View> 
                        </View>
                        
                
            </View>
            
       </View>
        </SafeAreaView>
    );
}

export default CheckEmailScreen;

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
    checkEmailView: {
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        marginBottom:20
    },
    checkEmailText: {
        color: "#2D2D2D",
        fontSize:28
        
    },
    btnView: {
        marginBottom:20
        
    },
    btn: {
        width: 292,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#130F26",
        borderRadius:20
        
    },
    btnText: {
        color: "white",
        fontSize:20
        
    },
    skipView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:50
        
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
    skipText: {
        color: "#2D2D2D",
        fontSize: 14,
         fontWeight:"200"

    },
    finalText1: {
        color: "#2D2D2D",
        fontSize: 14,
         fontWeight:"200"

    },
    finalText2: {
        color: "#F43939",
        fontSize: 14,
         fontWeight:"bold"

    },
    finalView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    }

})