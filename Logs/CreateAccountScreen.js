import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  KeyboardAvoidingView, 
  Platform, } from 'react-native';
import MicrosoftLogo from '../assets/microsofticon.png';



const CreateAccountScreen = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    navigation.navigate('NextScreen');
  };

  const handleUsePhoneNumber = () => {
    // Handle functionality for using a phone number
  };

  const handleGetNewEmail = () => {
    // Handle functionality for getting a new email address
  };

  const handleTermsOfUse = () => {
    navigation.navigate('TermsOfUse');
  };

  const handlePrivacyCookies = () => {
    navigation.navigate('PrivacyCookies');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={MicrosoftLogo} style={styles.microsoftLogo} />
        <Text style={styles.logoText}>Microsoft</Text>
      </View>
      <Text style={styles.createAccountText}>Create account</Text>
      <TextInput
        style={styles.input}
        placeholder="someone@example.com"
        placeholderTextColor="gray"
      />
      <View style={styles.blueTextsContainer}>
        <TouchableOpacity onPress={handleUsePhoneNumber}>
          <Text style={styles.blueText}>Use a phone number instead</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGetNewEmail}>
          <Text style={styles.blueText}>Get a new email address</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLinks}>
        <TouchableOpacity onPress={handleTermsOfUse}>
          <Text style={styles.bottomLink}>Terms of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePrivacyCookies}>
          <Text style={styles.bottomLink}>Privacy & Cookies</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop:20
  },
  microsoftLogo: {
 height:25,
 width:30,
  },
  logoText: {
marginLeft:10
  },
  createAccountText: {
    fontWeight: 'bold',
    fontSize:20,
    paddingVertical:30
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightblue',
    marginBottom:10,
    color: 'black',
    alignSelf: 'stretch',
    
  },
  blueText: {
    color: 'royalblue',
    padding:5 },
  blueTextsContainer: {
    alignSelf: 'stretch',

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
    paddingHorizontal: 40,
    marginRight: 5,
    borderRadius:6 
  },
  backButtonText: {
    color: 'black',
  },
  nextButton: {
    backgroundColor: 'royalblue',
    backgroundColor: 'royalblue',
    paddingVertical: 7,
    paddingHorizontal: 40,
    borderRadius:6
  },
  nextButtonText: {
    color: 'white',
  },
  bottomLinks: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent:'center'
  },
  bottomLink: {
    flexDirection: 'row',
    marginRight:20
  },
});

export default CreateAccountScreen;