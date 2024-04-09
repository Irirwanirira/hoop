import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Input from '../../components/Input';
import { useState } from 'react';
import LoginButton from '../../components/LoginButton';
import { Ionicons } from '@expo/vector-icons';
function ForgetScreen() {
     const [email, setEmail] = useState<string>("")



    return (
        <View style={styles.father}>
            <View style={styles.upper}>
                <View style={styles.IconView}> <Ionicons name="chevron-back" size={24}  /></View>
                
                <View><Text>Forget Password</Text></View>
            </View>
            <View>
                <View><Text>Reset Password</Text></View>
                <View>
                    <Text>Enter the email associated with your account</Text>
                    <Text>your account and we’ll send an email</Text>
                    <Text>instructions to reset your password.</Text>
                </View>
                <View>
                    <Text>Email address</Text>
                </View>
                <View>
                    <Input text="Email"     onChangeText={newText => setEmail(newText)}  value={email}    />
                </View>
                <View>
                     <LoginButton
                    title="Send"
                    onPress={()=> console.log("login")}
                
                    />
                </View>
            </View>
        </View>
    );
}

export default ForgetScreen;

const styles = StyleSheet.create({
    father: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"center"
        
    },
    upper: {
        display: "flex",
        flexDirection:"row"
        
    },
    IconView: {
        width: 50,
        height: 50,
        backgroundColor: "#EAEAF3",
        zIndex:1000
    }
    
})