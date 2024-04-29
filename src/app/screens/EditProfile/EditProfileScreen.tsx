import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,ImageBackground,ScrollView, Pressable } from 'react-native'
import { router, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EditProfileInput from '../../../components/EditProfileInput';
import ProfiteBtn from '../../../components/ProfiteBtn';
import ProfileRoleSelector from '../../../components/ProfileRoleSelector';
import { account } from '../../../appwrite/Appwrite';
import { UserType } from '../../../context/UserContext';
function EditProfileScreen() {
    const [Data, setData] = useState<UserType>([] as any)
    const [name,setName]=useState(Data.name)
    useEffect(() => {
        const current = account.get()
        current
            .then((response: any) => {
                const { name, email, $id, phone } = response
                setData({name,email,$id,phone}as UserType)
            }).catch((error: any) => {
                console.log(error)
                setData({name:"",email:"",$id:"",phone:""}as UserType)
        })
    }, [Data])
    const handleNameChange = (newName:string) => {
        setName(newName)
    }

    const handleChange =async () => {
        try {
            setData(prevData => ({
                ...prevData,
                name:name
            }))
            const result = await account.updateUser({
                userId: Data.$id,
                name:name
            })
        } catch (err) {
            console.log("Failed to upfdate profile:",err)
       } 
    }
    return (
     <SafeAreaView style={styles.container}>
        <View style={styles.parent} >
                <View style={styles.upper}>
                 <Pressable onPress={()=>router.back()}>
                 <View style={styles.IconView}>
                    <Ionicons name="chevron-back" size={24} color="#9E9EA4" />
                 </View>
                  </Pressable>
                
                <View style={styles.EditView}>
                    <Text style={styles.EditText}>Edit Profile</Text>
                </View>
                </View>
                <View style={styles.profiteView}>
                    <View style={styles.profiteViewInner}>
                    <ImageBackground source={require("../../../../assets/images/profile.png")} style={styles.ProfileImage}>
                         <View style={styles.EditIconView}>
                                <View style={styles.EditIconViewInner}>
                                     <MaterialCommunityIcons name="pencil-circle" size={24} color="#F43939" />
                                </View>   
                        </View>
                    </ImageBackground>
                    </View>    
                </View>
                <View style={styles.inputView}>
                <View>
                    <View style={styles.inputLongView}>
                       <View style={styles.headView}>
                        <Text style={styles.head}>Name</Text>
                       </View>
                    <View>
                                <EditProfileInput
                                    value={name}
                                    onChangeText={handleNameChange}

                                
                                />
                    </View>  
                    </View>
                    
                    <View style={styles.MiddleView}>
                        <View style={styles.LeftView}>
                            <Text style={styles.head}>
                                Type
                            </Text>
                            <View>
                                <ProfileRoleSelector/>
                            </View>

                        </View>
                        <View style={styles.RightView}>
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
                                <EditProfileInput value="Address" width={311} height={54} />
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
                        onClick={handleChange}
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
        marginBottom: 10,
    },
    profiteViewInner: {
        width: 88,
        height: 87,
        
    },
    ProfileImage: {
        width: 86,
        height: 86,
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
    EditIconViewInner: {
        backgroundColor: "white",
        width: 22,
        height: 22,
        borderRadius: 200,
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
       
        
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
        height:110   
    },
    RightView: {
        height:110
    },
    btnView: {
       display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",  
        marginTop:50
    }

    
    
})