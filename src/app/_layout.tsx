import { Stack } from 'expo-router'
import { StyleSheet} from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <Stack >
            <Stack.Screen name= "index"
            options={{
                headerTitle: "splash screen",
                headerShown: false,
                headerStyle: {}
            }}
          />
        <Stack.Screen name= "screens/Home/parking/index"
            options={{
                headerTitle: "splash screen",
                headerShown: false,
                headerStyle: {}
            }}
          />
          <Stack.Screen name= "screens/Home/parking/[id]"
            options={{
                headerTitle: "splash screen",
                headerShown: false,
                headerStyle: {}
            }}
        />
          <Stack.Screen name= "screens/LandingPage/HollaScreen"
                options={{
                    headerTitle: "Hollaaaaa",
                    headerShown:false
            }}
        />

        <Stack.Screen name= "screens/LandingPage/WelcomeScreen"
                options={{
                    headerTitle: "Welcome screen",
                    headerShown:false
            }}
        />

        <Stack.Screen name= "screens/Auth/EmailLoginScreen"
                options={{
                headerTitle: "",
                headerShown: false,
            }}
        />

        <Stack.Screen name= "screens/Auth/PhoneScreenLogin"
                options={{
                headerTitle: "",
                headerShown: false,
            }}
      />
     <Stack.Screen name= "screens/Auth/RegisterScreen"
                options={{
                headerTitle: "",
                headerShown: false,
            }}
      />
       <Stack.Screen name= "screens/Auth/ForgetPasswordScreen"
                options={{
                headerTitle: "",
                headerShown: false,
            }}
      />
     <Stack.Screen name= "screens/Auth/VerificationScreen"
                options={{
                headerTitle: "",
                headerShown: false,
            }}
      />
      <Stack.Screen name= "screens/Auth/PassCodeScreen"
                options={{
                headerTitle: "",
                headerShown: false,
            }}
      />
       <Stack.Screen name= "screens/Auth/CheckEmailScreen"
                options={{
                headerTitle: "",
                headerShown: false,
            }}
      />

           <Stack.Screen name= "screens/Home/ProfileScreen"
                      options={{
                      headerTitle: "",
                      headerShown: false,
                  }}
                  />

      <Stack.Screen name= "screens/Home/BookDetails"
                      options={{
                      headerTitle: "",
                      headerShown: false,
                  }}
      />

      <Stack.Screen name= "screens/Home/PaymentScreen"
                      options={{
                      headerTitle: "",
                      headerShown: false,
                  }}
      />
         <Stack.Screen name= "screens/Home/PaymentDetailsScreen"
                      options={{
                      headerTitle: "",
                      headerShown: false,
                  }}
      />
          <Stack.Screen name= "screens/Home/PaymentSuccessScreen"
                      options={{
                      headerTitle: "",
                      headerShown: false,
                  }}
          />
          <Stack.Screen name= "screens/Notification/NotificationScreen"
                      options={{
                      headerTitle: "",
                      headerShown: false,
                  }}
          />
          <Stack.Screen name= "screens/Plan/UpgradeScreen"
                      options={{
                      headerTitle: "",
                      headerShown: false,
                  }}
          />
          <Stack.Screen name= "screens/Plan/SelectPlanScreen"
                      options={{
                      headerTitle: "",
                      headerShown: false,
                  }}
          />
          <Stack.Screen name= "screens/EditProfile/EditProfileScreen"
                      options={{
                      headerTitle: "",
                      headerShown: false,
                  }}
         />

            <Stack.Screen name= "screens/Home/BookScreen"
                      options={{
                      headerTitle: "",
                      headerShown: false,
                  }}
            />
               <Stack.Screen name= "screens/Home/ChooseSpaceScreen"
                      options={{
                      headerTitle: "",
                      headerShown: false,
                  }}
            />

            <Stack.Screen name= "screens/Home/TrackingParkScreen"
                    options={{
                    headerTitle: "",
                    headerShown: false,
                }}
            />
            <Stack.Screen name= "screens/Home/DetailCategoryScreen"
                    options={{
                    headerTitle: "",
                    headerShown: false,
                }}
            />

            <Stack.Screen name= "screens/Home/HistoryScreen"
                    options={{
                    headerTitle: "",
                    headerShown: false,
                }}
            />

            <Stack.Screen name= "screens/Home/ExploreScreen"
                    options={{
                    headerTitle: "",
                    headerShown: false,
                }}
            />
    </Stack>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 35,
      paddingVertical: 50,
      backgroundColor: "#EBEBEB"
    },
  });

export default _layout
