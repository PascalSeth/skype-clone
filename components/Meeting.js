import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Meeting = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const handleStartMeeting = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        console.log('Camera permission denied');
        return;
      }

      const result = await ImagePicker.launchCameraAsync();
      if (!result.canceled) {
        console.log('Image captured:', result.uri);
     }
    } catch (error) {
      console.log('Error opening camera:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
        <Ionicons name="close" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.startNewMeetingButton]}
        onPress={handleStartMeeting}
      >
        <Text style={styles.buttonText}>Start new meeting</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.joinWithLinkButton]}>
        <Text style={[styles.buttonText, styles.blackText]}>Join with link</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  button: {
    width: 350,
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  startNewMeetingButton: {
    backgroundColor: '#1e90ff',
  },
  joinWithLinkButton: {
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  blackText: {
    color: 'gray',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    top: '-35%',
    left: 5,
  },
  backSymbol: {
    fontSize: 30,
  },
});

export default Meeting;
