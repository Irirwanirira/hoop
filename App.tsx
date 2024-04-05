import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import COLORS from './src/constants';
import EmailLoginScreen from './src/screens/EmailLoginScreen';
import PhoneScreenLogin from './src/screens/PhoneScreenLogin';
import RegisterScreen from './src/screens/RegisterScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <EmailLoginScreen />
      {/* <PhoneScreenLogin /> */}
      {/* <RegisterScreen/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor:COLORS.BackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:25
  },
});
