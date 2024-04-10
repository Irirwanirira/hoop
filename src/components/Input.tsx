import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput } from 'react-native'
import { COLORS } from '../constants';


interface input{
    text: string,
    onChangeText:(text:string)=>void
    value:string
}
function Input({text,onChangeText,value}:input) {
    
  
    
    return (
        <SafeAreaView>
            <TextInput
                style={styles.inputStyle}
                value={value}
                onChangeText={onChangeText}
                placeholder={text}
                placeholderTextColor={COLORS.Grey}
                
            
            />

        </SafeAreaView>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputStyle: {
        width: 311,
        height: 60,
        marginBottom: 15,
        paddingLeft: 30,
        color: COLORS.Grey,
        fontWeight: "200",
        backgroundColor: "white",
        borderRadius: 10,
        fontSize:18
    }
    
})