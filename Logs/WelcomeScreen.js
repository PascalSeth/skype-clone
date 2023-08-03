import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WelcomeScreen = ({ navigation }) => {
  const handleSignInOrCreate = () => {
    // Implement navigation to sign-in or create screen
    navigation.navigate('SignInScreen');
  };

  const handleNeedHelp = () => {
    // Implement navigation to help screen
    Linking.openURL('https://support.skype.com/en/faq/FA10038/troubleshooting-problems-signing-into-skype');
  };

  const handleSignInWithQRCode = () => {
    // Implement navigation to sign-in with QR code screen
    navigation.navigate('SignInWithQRCodeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Skype</Text>
      <TouchableOpacity style={styles.signInOrCreateButton} onPress={handleSignInOrCreate}>
        <Text style={styles.signInOrCreateText}>Sign in or create</Text>
      </TouchableOpacity>
      <Text style={styles.useAccountText}>Use your Skype or Microsoft account.</Text>
      <TouchableOpacity onPress={handleNeedHelp}>
        <Text style={styles.needHelpText}>Need help?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInWithQRCodeButton} onPress={handleSignInWithQRCode}>
      <Ionicons style={{color:'black'}} name="qr-code-outline" size={24} />
        <Text style={styles.signInWithQRCodeText}>Sign in with QR code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set the background color here
    padding: 20,
  },
  welcomeText: {
    color: 'royalblue',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  signInOrCreateButton: {
    backgroundColor: 'royalblue', // Set the button background color here
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 60,
    marginBottom: 40,
  },
  signInOrCreateText: {
    color: 'white', // Set the button text color here
    fontWeight: 'bold',
    fontSize: 16,
  },
  useAccountText: {
    fontSize: 15,
    marginBottom: 3,
  },
  needHelpText: {
    color: 'steelblue', // Set the link text color here
    marginBottom: 50,
  },
  signInWithQRCodeButton: {
    position: 'bottom',
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInWithQRCodeText: {
    color: 'black', // Set the button text color here
    marginLeft: 0.5,
    padding: 10,
  },
  qrCodeIcon: {
    width: 20,
    height: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;