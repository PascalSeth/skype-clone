import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const [showNotification, setShowNotification] = useState(true);
  const navigation = useNavigation();
  const [bellAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    startBellAnimation();
  }, []);

  const startBellAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bellAnimation, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(bellAnimation, {
          toValue: -1,
          duration: 200,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const handleGoBack = () => {
    setShowNotification(false);
    navigation.goBack();
  };

  const bellAnimatedStyle = {
    transform: [
      {
        rotate: bellAnimation.interpolate({
          inputRange: [-1, 1],
          outputRange: ['-10deg', '10deg'],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      
      {showNotification && (
        <View style={styles.notification}>
          <TouchableOpacity style={styles.closeButton} onPress={handleGoBack}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.notificationMessage}>
            <Text style={styles.boldText}>Notifications</Text>
          </Text>
        </View>
      )}
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.Nonewnotifications}>No new notifications</Text>
        <Text style={styles.Notificationtext}>Check back to see new @ mentions, reactions, quotes</Text>
        <Text style={styles.Notificationtextcontinued}>and much more</Text>
      </View>
      
      <View style={styles.homeContent}>
        <Animated.Image
          source={require("../assets/bell.png")}
          style={[styles.yourImage, bellAnimatedStyle]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor:'white',
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    marginBottom: 10,
  },
  closeButton: {
  },
  notificationMessage: {
    flex: 1,
    left: 80,

  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  homeContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yourImage: {
    width: 120,
    height: 120,
  },
  Nonewnotifications: {
    fontWeight: 'bold',
    fontSize: 27,
    color: '#00AFF0',
    marginTop:'10%'
  },
  Notificationtext:{
    fontSize: 14,
    paddingTop:8,
    paddingBottom:3,
  },
  Notificationtextcontinued:{
    fontSize: 14,

  }
});

export default Notification;