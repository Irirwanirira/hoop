import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, TextInput } from 'react-native'

interface inputStyleProps{
    value: string,
    width?: number,
    height?: number,
    onChangeText?:(text:string)=>void
}


function EditProfileInput({value,width=311,height=54,onChangeText}:inputStyleProps) {
    return (
       <SafeAreaView>
            <TextInput
               style={[styles.inputStyle,{width,height}]}  
                value={value}
                onChangeText={onChangeText}
            />

        </SafeAreaView>
    );
}

export default EditProfileInput;

const styles = StyleSheet.create({
    inputStyle: {
        marginBottom: 15,
        paddingLeft: 30,
        backgroundColor: "white",
        borderRadius: 10,
        fontSize: 18,
        color: "#2D2D2D",
        
    }
    
})