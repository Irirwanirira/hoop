import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import EmailLoginScreen from './src/app/screens/Auth/EmailLoginScreen';
import PhoneScreenLogin from './src/app/screens/Auth/PhoneScreenLogin';
import RegisterScreen from './src/app/screens/Auth/RegisterScreen';
import PasswordInput from './src/components/PasswordInput';
import ContactInput from './src/components/ContactInput';
import PhoneInput from 'react-phone-input-2';
import PhoneNumberInput from './src/components/PhoneNumberInput';
import ForgetPasswordScreen from './src/app/screens/Auth/ForgetPasswordScreen';
import CheckEmailScreen from './src/app/screens/Auth/CheckEmailScreen';
import VerificationScreen from './src/app/screens/Auth/VerificationScreen';
import PasscodeScreen from './src/app/screens/Auth/PassCodeScreen';
import OrderNotification from './src/components/OrderNotification';
import NotificationScreen from './src/app/screens/Notification/NotificationScreen';
import UpgradeScreen from './src/app/screens/Plan/UpgradeScreen';
import PaymentTF from './src/components/PaymentTF';
import SelectPlanScreen from './src/app/screens/Plan/SelectPlanScreen';
import EditProfileScreen from './src/app/screens/EditProfile/EditProfileScreen';
export default function App() {
  return (
    <SafeAreaView >
      {/* <PhoneNumberInput/> */}
      {/* <ContactInput/> */}
      {/* <PasswordInput/> */}
      {/* <EmailLoginScreen /> */}
      {/* <PhoneScreenLogin /> */}
      {/* <ForgetPasswordScreen/> */}
      {/* <CheckEmailScreen/> */}
      {/* <PasscodeScreen/> */}
      {/* <VerificationScreen/> */}
      {/* <RegisterScreen/> */}
      <EditProfileScreen/>
       {/* <SelectPlanScreen/> */}
      {/* <UpgradeScreen/> */}
      {/* <NotificationScreen/> */}
      {/* <OrderNotification/> */}
    </SafeAreaView>
  );
}


