import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './Tabs/Navbar';
import ChatScreen from './components/ChatScreen';
import Notification from '../Skype-clone/components/Notification';
import Meeting from './components/Meeting';
import Profile from './components/Profile';
import WelcomeScreen from './Logs/WelcomeScreen';
import SignInScreen from './Logs/SignInScreen';
import CreateAccountScreen from './Logs/CreateAccountScreen';
import Splashes from './Splash Screen/Splash'; // Import the Splash component

const Stack = createStackNavigator();

const App = () => {
  const [showSplash, setShowSplash] = useState(true); // State to control the visibility of Splash

  useEffect(() => {
    // Hide the Splash component after 6 seconds
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          {/* Render the Splash component conditionally */}
          {showSplash ? (
            <Stack.Screen
              name="Splash"
              component={Splashes}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="WelcomeScreen"
                component={WelcomeScreen}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="SignInScreen"
                component={SignInScreen}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="CreateAccountScreen"
                component={CreateAccountScreen}
              />
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
