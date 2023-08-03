import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import image from '../assets/splash.png';

const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.backgroundImage}>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Splash;
