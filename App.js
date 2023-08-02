import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './Tabs/Navbar';
import ChatScreen from './components/ChatScreen';
import Notification from '../Skype-clone/components/Notification';
import Meeting from './components/Meeting';
import Profile from './components/Profile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Navbar}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="ChatScreen"
            component={ChatScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Notification"
            component={Notification}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Meeting"
            component={Meeting}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Profile"
            component={Profile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
});

export default App;
