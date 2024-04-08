import React from 'react'
import { StyleSheet,View, Text, TextStyle, TouchableOpacity } from 'react-native'

import { COLORS } from "../constants"

interface ButtonTypes {
    action?: JSX.Element,
    onPress?: ()=>{},
    style?: TextStyle,
}

const Buttons:React.FC<ButtonTypes> = ({action, onPress, style})=>{
  return (
   <TouchableOpacity>
    <Text 
        style={[styles.button,style]}
        onPress={onPress}
    >{action}</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        textAlign: "center",
        borderRadius: 10,
        fontWeight: "900",
        backgroundColor: COLORS.Primary,
        color: COLORS.Secondary
    }
})


export default Buttons
