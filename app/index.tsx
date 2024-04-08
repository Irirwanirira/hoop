import React, { useState,useCallback } from 'react'
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";

import { Link, router, useLocalSearchParams, usePathname } from 'expo-router'
import { SafeAreaView, StyleSheet, Text, View, Pressable} from 'react-native';
import { useEffect } from 'react';

import WelcomeScreen from '../app/screens/WelcomeScreen';
import {COLORS} from '../constants';

const HomeScreen = () => {
    const [isReady, setIsReady] = useState(false)
    // const [fontLoaded, fontError] = useFonts({
    //     'Avenir': require("../../assets/fonts/AvenirCondensedHand.ttf")
    //   });
    // const [isMounted, setIsMounted] = useState(false)
    // useEffect(()=> {
    //     setIsMounted(true)
    // },[])

    // useEffect(()=> {
    //     if(isMounted){
    //         setTimeout(()=> {
    //             router.navigate('./screens/WelcomeScreen')
    //         }, 1000)
    //     }
    // }, [isMounted])
    useEffect(()=> {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
                await new Promise((resolve) => setTimeout(resolve, 1000))
            } catch (e) {
                console.warn(e)
            }finally{
                setIsReady(true)
            }
        }
        prepare()
    }, [])

    const onLayoutViewRootView = useCallback(async()=> {
        if(isReady){
            await SplashScreen.hideAsync();
        }
    }, [isReady])

    if(!isReady){
    return null
    }

    return (
        <View 
        onLayout={onLayoutViewRootView}
        style={styles.container}>
            <WelcomeScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#EBEBEB",
      paddingHorizontal: 30,
      paddingVertical: 40,
    },
  });
export default HomeScreen
