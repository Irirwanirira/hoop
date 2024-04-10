import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { COLORS, SIZES } from '../constants';
const OnBoardingItem = ({item}: {item: any}) => {
  return (
    <View style={[styles.container,{width: 400}]}>

        <View style={styles.imageContainer}>
            <Image 
            style={styles.image} 
            source={item.image} />
        </View>

        <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.landingMsg}>{item.intro}</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    image: {
        justifyContent: "center"
    },

    imageContainer: {
     marginTop: 30
    },

    title: {
        color: COLORS.Primary,
        fontSize: SIZES.large,
        textAlign: "center",
        alignItems: "center",
        marginTop: 30,

    },

    landingMsg: {
        opacity: 0.4,
        textAlign: "center",
        fontSize: SIZES.medium,
        marginTop: 10,
    },
})

export default OnBoardingItem