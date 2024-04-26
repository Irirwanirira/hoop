import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground } from 'react-native'
import { Link,router } from 'expo-router';
import Input from '../../../components/Input';
import LoginButton from '../../../components/LoginButton';
import { COLORS } from '../../../constants';
import { useState } from 'react';
import PasswordInput from '../../../components/PasswordInput';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import { account } from "../../../appwrite/Appwrite";

function PhoneScreenLogin() {
    const [password, setPassword] = useState<string>("")  
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
    const fullNumber = `${countryCode}${phoneNumber}`
    const pass=password
    const handleLogin = async () => {
        console.log(fullNumber,pass)
    if (!fullNumber || !password) {
      console.log("Please enter both email and password.");
      return;
    }
    try {
      await account.createPhoneSession(fullNumber, password);
      Alert.alert("Login successfully")

      router.navigate("screens/Home/parking");
    } catch (error) {
      console.log("unable to login ", error);
    }
  };
    return (
         <SafeAreaView  style={styles.container} >
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
                 <PhoneNumberInput
                            countryCode={countryCode}
                            setCountryCode={setCountryCode}
                            phoneNumber={phoneNumber}
                            setPhoneNumber={setPhoneNumber}

                 />
                
                 <PasswordInput text="Password" onChangeText={newText =>setPassword(newText)}  value={password} password={password} setPassword={setPassword} />
                    <View style={styles.Forget}>
                        <Text style={styles.forgetText}>Forget password? <Link href="/screens/Auth/ForgetPasswordScreen"><Text style={styles.retrieve}>Retrieve</Text></Link></Text>
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
                        <Text style={styles.LowerText}>Don't have an account? <Link href="/screens/Auth/RegisterScreen"><Text style={styles.retrieve}>Sign Up</Text></Link></Text>    

                    </View>
               
                
            </View>
            






            </View>
            
            </View>
            </SafeAreaView>
    );
}

export default PhoneScreenLogin;

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