import React from 'react';
import { View, Pressable, StyleSheet,Text } from 'react-native';

interface pass {
    title: string,
    functionAction?: () => void,
    backgroundColor: string,
    color: string,
    onClick?:()=>void
   
}


function ProfiteBtn( { title, functionAction,backgroundColor="#130F26",color="white",onClick}: pass) {
    return (
        <Pressable style={[styles.btn, {backgroundColor}]} onPress={functionAction}>
            <Text style={[styles.text,{color}]}>{ title}</Text>
        </Pressable>
    
    );
}

export default ProfiteBtn;
const styles = StyleSheet.create({
    btn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        width: 146,
        height:60
    },
    text: {
        color: "white",
        fontWeight: "500",
        fontSize: 16
    }
})