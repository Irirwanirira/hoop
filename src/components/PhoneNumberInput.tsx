import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import {Picker} from '@react-native-picker/picker';



function PhoneNumberInput() {
   
    
    const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const countryCodes = [
    { label: '+250', value: '+250' },
      { label: '+400', value: '+400' },
     { label: '+62', value: '+62' }
  ];

    return (
      
            
     
    <View style={styles.container}>
        {/* Country code selector */}
        <View>
           <Picker
        selectedValue={countryCode}
         style={styles.picker}
        onValueChange={(itemValue) => setCountryCode(itemValue)}
      >
        {countryCodes.map((country) => (
          <Picker.Item key={country.value} label={country.label} value={country.value} />
        ))}
      </Picker>
      </View>
      <View style={styles.line}></View>

        {/* Phone number input */}
      <View>
            <TextInput
          style={styles.input}
          
          
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        </View>
      
     </View>
         
  );
};

const styles = StyleSheet.create({
    container: {
    width: 311,
    height:60,
    flexDirection: 'row',
    alignItems: 'center',
   
    backgroundColor:"white",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  line: {
    borderWidth: 1,
    height: 30,
    borderColor:"grey"
  },
  picker: {
    flex:1,
    width:110,
    height: 50,
    color: "grey",
    fontSize: 18,
    marginLeft:5
    
  },
  input: {
    flex: 3,
    height: 60,
   
    width:180

   
  },
  
}
)

export default PhoneNumberInput;