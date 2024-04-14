import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import {Picker} from '@react-native-picker/picker';

function ProfileRoleSelector() {
 const [role,setrole]=useState("")
  
 const roles=[{label:"Car sport",value:"Car sport"},{label:"Benz",value:"Benz"}]

    return (
        <View style={styles.container}>
            <View>
                <Picker
                    selectedValue={role}
                    style={styles.picker}
                    onValueChange={setrole}
                >
                    {roles.map((Currentrole) => (<Picker.Item key={Currentrole.value } label={Currentrole.label} value={Currentrole.value} />))}

                </Picker>
            </View>

        </View>
    );
}

export default ProfileRoleSelector;

const styles = StyleSheet.create({
    container: {
    width: 146,
    height:54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor:"white",
    borderRadius: 10,
    },  
    picker: {
    flex:1,
    width:146,
    height: 54,
    color: "#2D2D2D",
    fontSize: 18,
   
    }
}
)