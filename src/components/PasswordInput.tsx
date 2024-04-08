import React,{useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput} from 'react-native'
import COLORS from '../constants';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

interface PasswordProps{
    text:string
}



function PasswordInput({text}:PasswordProps) {
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
   
    
    const toggleShowPassowrd = () => {
        setShowPassword(!showPassword)
    }
    return (
        <View style={styles.InputView}>
            <TextInput style={styles.input}
                placeholder={text}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                value={password}
                 
              
            />
            <View >
                 <Ionicons
                onPress={toggleShowPassowrd}
                name={showPassword ? "eye" : "eye-off"}
                size={24}
                color={showPassword? "black":"grey"}
                
                />
            </View>
           
                
           
        </View>
    );
}

export default PasswordInput;

const styles = StyleSheet.create({
    input: {
               
   
        // width: 200,
        // height: 60,
        borderWidth:0,
       
        
        color:COLORS.Grey,
        fontWeight: "200",
       
        fontSize: 18,
      
        
    },
    
    InputView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-around",
        backgroundColor: "white",
        height: 60,
        width: 311,
        borderRadius: 10,
        marginBottom:20
    },
    IconView: {
       height: 65,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor:"white"
    }


})