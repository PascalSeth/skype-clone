
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChatItem = ({ image, name, lastMessage, timestamp }) => {
  const navigation = useNavigation();

  const openChatScreen = () => {
    navigation.navigate('ChatScreen', { name, image });
  };

  return (
    <TouchableOpacity style={styles.chatItemContainer} onPress={openChatScreen}>
      <Image source={image} style={styles.chatItemImage} />
      <View style={styles.chatItemContent}>
        <Text style={styles.chatItemName}>{name}</Text>
        <Text style={styles.chatItemLastMessage}>{lastMessage}</Text>
      </View>
      <Text style={styles.chatItemTimestamp}>{timestamp}</Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  const navigation = useNavigation();

  const createChat = () => {
    navigation.navigate('ChatScreen', { name: '' });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity>
          <Image source={require('../assets/avatar1.png')} style={styles.accountImage} />
        </TouchableOpacity>
        <Text style={styles.userName}>Peter</Text>
        <TouchableOpacity style={styles.createIconContainer}>
          <Ionicons name="create" size={24} color="white" onPress={createChat} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color="#00AFF0" style={styles.searchIcon} />
        <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#00AFF0" />
      </View>

      {/* Chat List */}
      <ScrollView style={styles.chatList}>
        <TouchableOpacity>
          <ChatItem
            image={require('../assets/avatar1.png')}
            name="John Doe"
            lastMessage="Hello there"
            timestamp="6:30 AM"
            navigation={navigation}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ChatItem
            image={require('../assets/avatar2.png')}
            name="Elizabeth Koomson"
            lastMessage="Are you ready?"
            timestamp="7:00 AM"
            navigation={navigation}
          />
        </TouchableOpacity>
        <TouchableOpacity>
        <ChatItem
            image={require('../assets/avatar2.png')}
            name="Mavis Frimpong"
            lastMessage="Hi"
            timestamp="8:30 AM"
            navigation={navigation}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <ChatItem
            image={require('../assets/avatar1.png')}
            name="Kofi Gyan"
            lastMessage="Yo man "
            timestamp="9:10 AM"
            navigation={navigation}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ChatItem
            image={require('../assets/avatar1.png')}
            name="Bismark Oduro"
            lastMessage="When?"
            timestamp="10:30 AM"
            navigation={navigation}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ChatItem
            image={require('../assets/avatar1.png')}
            name="Robert Anim"
            lastMessage="Sharp"
            timestamp="11:30 AM"
            navigation={navigation}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ChatItem
            image={require('../assets/avatar2.png')}
            name="Anita Sey"
            lastMessage="Lets go today"
            timestamp="1:47 PM"
            navigation={navigation}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ChatItem
            image={require('../assets/avatar2.png')}
            name="Seyram Addo"
            lastMessage="Sure, no problem"
            timestamp="11:30 AM"
            navigation={navigation}
          />
        </TouchableOpacity>
        {/* Add more ChatItem components here */}
      </ScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#00AFF0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    top: -40 ,
    left: 158
  },
  accountImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    top: -10,
    left: -130
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  chatList: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  chatItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  chatItemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  chatItemContent: {
    flex: 1,
    marginLeft: 12,
  },
  chatItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatItemLastMessage: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  chatItemTimestamp: {
    fontSize: 12,
    color: '#777',
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
  },
  iconContainer: {
    alignItems: 'center',
    top: -10,
    paddingHorizontal: 20,
  },
  iconText: {
    marginTop: 4,
    fontSize: 12,
    color: 'black',
  },
    footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#00AFF0',
    },
    topIcons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'absolute',
      bottom: 28,
      left: 370,
      top: 70
    },
    userName: {
      fontWeight: 'bold',
          left: -180,
          top: -8,
          fontSize: 18
    }
});

export default Home