import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput } from 'react-native'
import COLORS from '../constants';


interface input{
    text: string,
    onChangeText:(text:string)=>void
    value:string
}
function Input({text}:input) {
    const [currentText, setNewText] = React.useState( text )
    const onChangeText=(newText: string) => {
        setNewText(newText)
    }
    
    return (
        <SafeAreaView>
            <TextInput
                style={styles.inputStyle}
                value={currentText}
                onChangeText={onChangeText}
                
            
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
        color:COLORS.Grey,
        fontWeight: "200",
        backgroundColor: "white",
        borderRadius: 10,
        fontSize:18
    }
    
})