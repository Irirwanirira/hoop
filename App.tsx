import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import {COLORS} from './src/constants';
import HollaScreen from './src/screens/HollaScreen';
import FindParkingScreen from './src/screens/FindParkingScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      <HollaScreen />
      {/* <FindParkingScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    paddingVertical: 50,
    backgroundColor: "#EBEBEB"
  },
});
