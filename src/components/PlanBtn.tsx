import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, Pressable } from 'react-native'
import { COLORS } from '../constants';
interface pass {
    title: string,
    functionAction?: () => void,
   
}

function PlanBtn({ title, functionAction}: pass) {
    
    return (
        <Pressable onPress={functionAction} style={styles.btn}>
            <Text style={styles.text}>{ title}</Text>
        </Pressable>
    );
}

export default PlanBtn;

const styles = StyleSheet.create({
    btn: {
        width: 311,
        height: 54,
        backgroundColor:COLORS.DarkBlue,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:15
    },
    text: {
        color: "white",
        fontWeight: "500",
        fontSize:16
    }

})
    
