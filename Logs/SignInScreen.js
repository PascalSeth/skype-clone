import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Dimensions } from 'react-native';
import MicrosoftLogo from '../assets/microsofticon.png';
import { Octicons } from '@expo/vector-icons';


const SignInScreen = ({ navigation }) => {
  const [skypePhoneEmail, setSkypePhoneEmail] = useState('');

  const handleSkypePhoneEmail = (text) => {
    setSkypePhoneEmail(text);
  };

  const handleCreateAccount = () => {
    // Implement navigation to create account screen
    navigation.navigate('CreateAccountScreen');
  };

  const handleGoBack = () => {
    // Go back to the previous screen
    navigation.goBack();
  };

  const handleNext = () => {
    // Implement logic for "Next" button press
    navigation.navigate('Home', { usernamegh: skypePhoneEmail });
  };

  const handleTermsOfUse = () => {
    // Implement navigation to the Terms of Use screen
    navigation.navigate('TermsOfUse');
  };

  const handlePrivacyCookies = () => {
    // Implement navigation to the Privacy & Cookies screen
    navigation.navigate('PrivacyCookies');
  };

  const handleMoreOptions = () => {
    // Implement navigation to the More Options screen
    navigation.navigate('MoreOptions');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={MicrosoftLogo} style={styles.microsoftLogo} />
        <Text style={styles.logoText}>Microsoft</Text>
      </View>
      <View>
      <Text style={styles.signInText}>Sign in</Text>
      <Text style={styles.continueText}>to continue to Skype</Text></View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleSkypePhoneEmail}
          placeholder="Skype, phone, or email"
          autoCapitalize="none"
          value={skypePhoneEmail}
        />
      </View>
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.createAccountButtonText}>
          No account?{' '}
          <Text style={styles.blueText} onPress={handleCreateAccount}>
            Create one!
          </Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signOptionsButton} onPress={handleMoreOptions}>
        <View style={styles.signOptionsBox}>
          <View style={styles.signOptionsKeyWrapper}>
            <Octicons name="key" size={24} color="black" />
          </View>
          <Text style={styles.signOptionsText}>Sign-in options</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.bottomLinks}>
        <TouchableOpacity onPress={handleTermsOfUse}>
          <Text style={styles.bottomLink}>Terms of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePrivacyCookies}>
          <Text style={styles.bottomLink}>Privacy & cookies</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMoreOptions}>
          <Text style={styles.bottomLink}>...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginTop:10 
  },
  microsoftLogo: {
    width: 30,
    height: 30,
  },
  logoText: {
    fontSize: 20,
    marginLeft: 10,
  },
  signInText: {
    fontWeight: 'bold',
    marginTop:20

  },
  continueText: {
    
  },
  inputContainer: {
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    color: 'gray',
    padding: 10,
    borderBottomColor: 'royalblue',
    borderBottomWidth: 1,
  
  },
  createAccountButton: {
    alignSelf: 'stretch',
    marginBottom: 20,
  
  },
  createAccountButtonText: {
    fontSize: 14,
  },
  blueText: {
    color: 'royalblue',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    marginTop:20
    
  },
  backButton: {
    backgroundColor: '#dcdcdc',
    paddingVertical: 7,
    paddingHorizontal: 45,
    marginRight: 5,
    borderRadius:6
  },
  backButtonText: {
    color: 'black',
    fontSize: 15,
  },
  nextButton: {
    backgroundColor: 'royalblue',
    paddingVertical: 7,
    paddingHorizontal: 45,
    borderRadius:6
  },
  nextButtonText: {
    color: 'white',
    fontSize: 15,
  },
  signOptionsButton: {
    marginBottom: 15,
  },
  signOptionsBox: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal:20,
    marginTop:85
  },
  signOptionsKeyWrapper: {
    padding: 3,
    marginRight: 10,
    transform: [{ rotate: '270deg' }],
  },
  signOptionsText: {
    fontSize: 15,
  },
  bottomLinks: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomLink: {
    fontSize: 12,
    marginRight: 10,
  },
});

export default SignInScreen;