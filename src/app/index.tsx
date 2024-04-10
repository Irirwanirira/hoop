import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

function index() {
    return (
        <View>
            <Text>Hey</Text>
           <Link href="/EmailLoginScreen"><Pressable ><Text>Click</Text></Pressable></Link> 
        </View>
            
    );
}

export default index;