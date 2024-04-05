import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, Pressable } from 'react-native'
import COLORS from '../constants';
interface pass {
    title: string,
    onPress: () => void,
   
}

function LoginButton({ title, onPress }: pass) {
    const handlePress = ()=>{
        onPress()
    }
    return (
        <Pressable onPress={handlePress} style={styles.btn}>
            <Text style={styles.text}>{ title}</Text>
        </Pressable>
    );
}

export default LoginButton;

const styles = StyleSheet.create({
    btn: {
        width: 200,
        height: 40,
        backgroundColor:COLORS.DarkBlue,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:5
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize:16
    }

})
    
