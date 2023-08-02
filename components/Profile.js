
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

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

const Profile = ({ navigation }) => {
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
        <Text onPress={() => navigation.navigate('Profile')} style={styles.userName}>Peter Paul</Text>
        <Text style={{fontWeight:300,fontSize:12, color:"#0078D1"}}>peterpaul@gmail.com</Text>
      <Text style={{color:'blue'}}>My Microsoft Account</Text>
        </View></View>
        <TouchableOpacity style={styles.createIconContainer}>
          <Ionicons style={{color:'black'}} name="qr-code-outline" size={24} color="blue" onPress={() => navigation.navigate('Meeting')} />
</TouchableOpacity>
        
      </View>
    
      </View>
      <TouchableOpacity>
 <View style={{flexDirection:'column'}} >
  <View style={styles.topsection}>
 <FontAwesomeIcon name="circle" size={14} color="green" />
<Text style={{paddingLeft:30}}>Active</Text>
</View>
<View style={styles.topsection}>
 <FontAwesomeIcon style={{marginRight:20}} name="bullhorn" size={24} color="black" />
<TextInput placeholder='Share what you are up to'></TextInput>
</View>
<View style={styles.topsection}>
 <FontAwesomeIcon  name="bookmark-o" size={24} color="black" />
<Text style={{paddingLeft:30}}>Bookmarks</Text>
</View>
<View style={styles.topsection}>
<Ionicons  name="people-outline" size={24} color="black" onPress={() => navigation.navigate('Meeting')} />
<Text style={{paddingLeft:25,fontWeight:700}}>Invite Friends</Text>
</View>
 </View></TouchableOpacity>
<View style={{backgroundColor:'lightgray'}}>
  <Text style={{color:'gray',fontWeight:700,fontSize:16,paddingLeft:20}}>MANAGE</Text>
</View>

<View>
<View style={styles.topsection}>
 <Ionicons name="person" size={14} color="black" />
<Text style={{paddingLeft:30}}>Skype Profile</Text>
</View>
<View style={styles.topsection}>
 <FontAwesomeIcon name="skype" size={14} color="black" />
<Text style={{paddingLeft:30}}>Skype to phone</Text>
</View>
<View style={styles.topsection}>
 <FontAwesomeIcon name="phone" size={14} color="black" />
 <View>
<Text style={{paddingLeft:30}}>Skype Number</Text>
<Text style={{paddingLeft:30,fontSize:12,color:'gray'}}>Get a second Number</Text>
</View>
</View>
<View style={styles.topsection}>
 <Ionicons name="settings-outline" size={14} color="black" />
<Text style={{paddingLeft:30}}>Settings</Text>
</View>
<View style={styles.topsection}>
 <Ionicons name="bulb-outline" size={14} color="black" />
<Text style={{paddingLeft:30}}>What's New</Text>
</View>
<View style={styles.topsection}>
 <Ionicons name="exit-outline" size={14} color="green" />
<Text style={{paddingLeft:30}}>Sign out</Text>
</View>
</View>


    
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
    justifyContent:"space-between",
    paddingTop:15
  },
  headerTop: {
paddingBottom:"2%",
paddingHorizontal:20,

}
  ,
 topsection:{
flexDirection:'row',
alignItems:'center',
padding:20,
borderBottomWidth: 1,
borderBottomColor:'lightgray',
    paddingHorizontal:20,

 }
 ,
  accountImage: {
    width: 35,
    height: 35,
    borderRadius: 25,
    alignItems:'center',
    marginTop:0
  },
  userName: {
    fontSize: 18,
    fontWeight:600,
    fontSize:18, 
},

    createIconContainer:{
flexDirection:'row'
    }
});

export default Profile