
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



const ChatItem = ({ image, name, lastMessage, timestamp, navigation }) => {
  const openChatScreen = () => {
    navigation.navigate('ChatScreen', { name});
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

const Home = ({ route, navigation }) => {
  // Get the username from the route params
  
  const username = route.params?.usernamegh || 'Default User';
    return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerTop}>     
      <View style={styles.header}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image  source={require('../assets/1.jpeg')} style={styles.accountImage} />
        </TouchableOpacity>
        <View  style={{flexDirection:'column',paddingLeft:10}}>
        <Text onPress={() => navigation.navigate('Profile')} style={styles.userName}>{username}</Text>
        <Text style={{fontWeight:300,fontSize:12, color:"#0078D1"}}>Share what you are up to</Text></View>
        </View>
        <TouchableOpacity style={styles.createIconContainer}>
          <Ionicons style={{paddingRight:20}} name="videocam-outline" size={24} color="blue" onPress={() => navigation.navigate('Meeting')} />
         <Ionicons  name="notifications-outline" size={24} color="blue" onPress={() => navigation.navigate('Notification')} />
</TouchableOpacity>
        
      </View>
      <View style={{marginHorizontal:"5%",flexDirection:'row',alignItems:'center',}}>
<View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#00AFF0" style={styles.searchIcon} />
        <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#00AFF0" />

      </View>
      <View>
      <Ionicons name='filter' style={{borderRadius:9,backgroundColor:'white',padding:7}} size={24}/>

      </View></View>
      </View>
 
      

      {/* Chat List */}
      <ScrollView style={styles.chatList}>
        <TouchableOpacity>
          <ChatItem
            image={require('../assets/5.webp')}
            name="John Donut"
            lastMessage="Hello there"
            timestamp="6:30 AM"
            navigation={navigation}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ChatItem
            image={require('../assets/7.jpg')}
            name="Elizabeth Koomson"
            lastMessage="Are you ready?"
            timestamp="7:00 AM"
            navigation={navigation}
          />
        </TouchableOpacity>
        <TouchableOpacity>
        <ChatItem
            image={require('../assets/8.jpg')}
            name="Mavis Frimpong"
            lastMessage="Hi"
            timestamp="8:30 AM"
            navigation={navigation}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <ChatItem
            image={require('../assets/6.webp')}
            name="Kofi Gyan"
            lastMessage="Yo man "
            timestamp="9:10 AM"
            navigation={navigation}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ChatItem
            image={require('../assets/10.webp')}
            name="Bismark Oduro"
            lastMessage="When?"
            timestamp="10:30 AM"
            navigation={navigation}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ChatItem
            image={require('../assets/3.jpg')}
            name="Robert Anim"
            lastMessage="Sharp"
            timestamp="11:30 AM"
            navigation={navigation}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ChatItem
            image={require('../assets/4.jpg')}
            name="Anita Sey"
            lastMessage="Lets go today"
            timestamp="1:47 PM"
            navigation={navigation}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ChatItem
            image={require('../assets/9.jpg')}
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
    alignItems: 'center',
    marginBottom:20,
    justifyContent:"space-between",
    paddingHorizontal:20,
    paddingTop:15
  },
  headerTop: {
backgroundColor:'#D9FBFF',
paddingBottom:"2%"

}
  ,
 
  accountImage: {
    width: 35,
    height: 35,
    borderRadius: 25,
    alignItems:'center',
    marginTop:0
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    width:"85%",
    marginRight:8,
  },
  searchIcon: {
    marginRight: 8,
    marginLeft: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    alignItems:'center',width:'100%'
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
 
    userName: {
          fontSize: 18,
          fontWeight:600,
          fontSize:18, 
          color:"#0078D1"
    },
    createIconContainer:{
flexDirection:'row'
    }
});

export default Home