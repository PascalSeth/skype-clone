
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



const Header = ({ navigation }) => {
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

export default Header


