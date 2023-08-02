import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calls from '../components/Calls';
import Contacts from '../components/Contacts';
import Today from '../components/Today';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Chat from '../components/Chat';




const Tab= createBottomTabNavigator();
const Navbar = () => {
  return (
   <Tab.Navigator
   screenOptions={
    
    {
        headerShown:false,
        tabBarStyle:{
            
            left:0,
            right:0,
            height:60,

        }
    
        
    }
   }
   >
    <Tab.Screen
  name="Chat"
  component={Chat}
  options={{
    tabBarIcon: ({ focused }) => (
      <Icon
        name={focused?"chatbubble-ellipses":"chatbubble-ellipses-outline"}
        size={24}
        color={focused ? 'blue' : 'gray'}
      />
    ),
  }}
/>
    
    <Tab.Screen name="Calls" component={Calls}
    options={{
        tabBarIcon: ({ focused }) => (
          <Icon
            name={focused ? "videocam" :"videocam-outline"}
            size={24}
            color={focused ? 'blue' : 'gray'}
            />
        ),
      }}
    />
    <Tab.Screen name="Contacts" component={Contacts}
        options={{
        tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name={focused?"contacts" :"contacts-outline" }
            size={24}
            color={focused ? 'blue' : 'gray'}

             />

          ),
        }}

    />
    <Tab.Screen name="Today" component={Today}
     options={{
        
        tabBarIcon: ({ focused }) => (
          <Icon
            name="ios-logo-skype"
            size={24}
            color={focused ? 'blue' : 'gray'}
            />
        ),
      }}
    />

   </Tab.Navigator>
   
  )
}

export default Navbar

const styles = StyleSheet.create({

})