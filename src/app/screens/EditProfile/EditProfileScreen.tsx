import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground,ScrollView } from 'react-native'
import { router, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EditProfileInput from '../../../components/EditProfileInput';
import ProfiteBtn from '../../../components/ProfiteBtn';
function EditProfileScreen() {
    return (
     <SafeAreaView style={styles.container}>
        <View style={styles.parent} >
             <View style={styles.upper}>
                <View style={styles.IconView}>
                    <Ionicons name="chevron-back" size={24} color="#9E9EA4" />
                </View>
                <View style={styles.EditView}>
                    <Text style={styles.EditText}>Edit Profile</Text>
                </View>
                </View>
                <View style={styles.profiteView}>
                    <ImageBackground source={require("../../../../assets/images/profile.png")} style={styles.ProfileImage}>
                        <View style={styles.EditIconView}>
                            <MaterialCommunityIcons name="pencil-circle" size={24} color="#F43939" />
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.inputView}>
                <View>
                    <View style={styles.inputLongView}>
                       <View style={styles.headView}>
                        <Text style={styles.head}>Name</Text>
                       </View>
                    <View>
                         <EditProfileInput value="Name"/>
                    </View>  
                    </View>
                    
                    <View style={styles.MiddleView}>
                        <View style={styles.LeftView}>
                            <Text style={styles.head}>
                                Type
                            </Text>
                            <View>
                                <EditProfileInput value="Car Sport" width={146} height={54} />

                            </View>

                        </View>
                        <View style={styles.LeftView}>
                            <Text style={styles.head}>
                                ID
                            </Text>
                            <View>
                                <EditProfileInput value="C68721" width={146} height={54} />
                            </View>
                         </View>
                    </View>
                        <View style={styles.inputLongView}>
                            <Text style={styles.head}>
                                Address
                            </Text>
                            <View>
                                <EditProfileInput value="Adress" width={311} height={54} />
                            </View>
                     </View>  
                    </View>  

                </View>
                 <View style={styles.btnView}>
                        <ProfiteBtn
                        backgroundColor="#EAEAF3"
                         color="#2D2D2D"
                         title="Cancel"   
                        />
                        <ProfiteBtn
                        backgroundColor="#130F26"
                         color="white"
                         title="Save"   
                        />

                </View>

        </View>
        </SafeAreaView>
    );
}

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection:"row",
        backgroundColor:"#F4F4FA",
        justifyContent: 'center',
        marginTop: 25,
        height:"100%"
    },
    parent: {
        marginTop:50  
    },
   
    father: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"center"    
    },
    upper: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
        width: "100%",
    },
    IconView: {
        width: 44,
        height: 44,
        borderRadius:10,
        backgroundColor: "#EAEAF3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        marginLeft: 0,
         
    },
    EditText: {
        color: "#2D2D2D",
        fontSize: 22, 
        fontWeight:"500"
    },
    EditView: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        width:"70%"
        
        // width:"70%"
    },
    profiteView: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom:10
    },
    ProfileImage: {
        width: 120,
        height: 120,
        display: "flex",
        flexDirection:"row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    EditIconView: {
         display: "flex",
        flexDirection:"row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    inputView: {
       display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center", 
    },
    inputLongView: {
        marginBottom:20
    },
    headView: {
        
    },
    head: {
        color: "#2D2D2D",
        fontSize: 16,
        marginBottom: 15,
        fontWeight:"200"
    },
    MiddleView: {
       display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center", 
        marginBottom:20
    },
    LeftView: {
        
    },
    btnView: {
       display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",  
        marginTop:50
    }

    
    
})