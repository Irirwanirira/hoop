import React from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions,  Animated } from 'react-native'
import { COLORS } from '../constants';
const Paginator = ({data, scrollX}: {data: any, scrollX: any}) => {
    const {width} = useWindowDimensions();
  return (
    <View style={{flexDirection: "row", height: 64}}>
    
        {
            data.map((item: any, i: any) => {
                const inputRange = [(i-1) * width, i * width, (i+1)* width];


                const backgroundColor = scrollX.interpolate({
                    inputRange,
                        outputRange: ['#b8b1b1', `${COLORS.Orange}`, '#b8b1b1'],
                        extrapolate: "clamp",
                });

                return <Animated.View style={[styles.dot, {backgroundColor}]} key={i.toString()}/>
            })
        }
    </View>
  )
}

const styles = StyleSheet.create({
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
    },
})

export default Paginator