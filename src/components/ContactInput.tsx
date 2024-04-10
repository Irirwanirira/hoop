import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput} from 'react-native'
import { COLORS } from '../../constants';
import PhoneInput  from 'react-phone-input-2';
import { useState } from 'react';

function ContactInput() {
     const [phone, setPhone] = useState("");

  return (
    <PhoneInput
      country={"eg"}
      enableSearch={true}
      value={phone}
      onChange={(phone) => setPhone(phone)}
    />
  );
}

export default ContactInput;