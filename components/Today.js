import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Linking } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

const Today = () => {
  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);

  const handleThumbsUpClick = () => {
    setThumbsUpClicked(!thumbsUpClicked);
  };

  const handleThumbsDownClick = () => {
    setThumbsDownClicked(!thumbsDownClicked);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Profiletop}>
        <Image
          style={styles.avatar}
          source={require('../assets/1.jpeg')}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontWeight: 600, fontSize: 18, color: "#0078D1" }}>
            Pascal Seth
          </Text>
          <Text style={{ fontWeight: 300, fontSize: 12, color: "#0078D1" }}>
            Share what you are up to
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ paddingHorizontal: 15, fontSize: 19, fontWeight: 700, marginVertical: 18 }}>
          My feed
        </Text>
      </View>
      <View style={styles.Imagec}>
        <Image
          style={styles.postImage}
          source={require('../assets/1.jpeg')}
        />
        <View style={{ paddingLeft: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={{ height: 20, width: 20, marginVertical: 10 }} source={require('../assets/2.jpeg')} />
            <Text style={{ fontWeight: 300, fontSize: 14 }}>
              The Daily Digest
            </Text>
          </View>
          <Text onPress={() => Linking.openURL('https://www.yesglasses.com/blog/80s-glasses')} style={{ fontWeight: 600, fontSize: 21 }}>
            How To Find 80s Glasses & Sunglasses
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleThumbsUpClick}>
            <Icon style={{ paddingRight: 25, color: thumbsUpClicked ? 'blue' : undefined }} name={thumbsUpClicked ? 'thumbs-up' : 'thumbs-up-outline'} size={23} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleThumbsDownClick}>
            <Icon style={{ color: thumbsDownClicked ? 'blue' : undefined }} name={thumbsDownClicked ? 'thumbs-down' : 'thumbs-down-outline'} size={23} />
          </TouchableOpacity>
        </View>
      </View>




    <View style={styles.Imagec}>

    <View style={{paddingLeft:15}}>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Image style={{height:20,width:20,marginVertical:10}} source={require('../assets/2.jpeg')}/>
      <Text style={{fontWeight:300, fontSize:14,}}>The Daily Digest</Text>
      </View>
      <Text onPress={() => Linking.openURL('https://news.sky.com/story/ukraine-war-latest-russia-putin-nato-nuclear-belarus-12541713')}  style={{fontWeight:600,fontSize:21,}}>
      Ukraine-Russia war latest: NATO chief speaking after Zelenskyy hits out at 'absurd' delays; Navalny 'played same Putin speech' in prison for 100 days</Text>
    <Text  style={{fontSize:13,}}>
    The Ukrainian president says it would be "absurd" if his country is not offered NATO membership at the alliance's summit, which is under way in the Lithuanian capital of Vilnius. And the Kremlin critic Alexei Navalny has revealed the "morale building" he has been subjected to behind bars.
    </Text>
    </View>
    <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={handleThumbsUpClick}>
            <Icon style={{ paddingRight: 25, color: thumbsUpClicked ? 'blue' : undefined }} name={thumbsUpClicked ? 'thumbs-up' : 'thumbs-up-outline'} size={23} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleThumbsDownClick}>
            <Icon style={{ color: thumbsDownClicked ? 'blue' : undefined }} name={thumbsDownClicked ? 'thumbs-down' : 'thumbs-down-outline'} size={23} />
          </TouchableOpacity>
        </View>
          </View> 
    
          <View style={styles.Imagec}>
    <Image
        style={styles.postImage}
        source={require('../assets/3.jpg')}
      />
    <View style={{paddingLeft:15}}>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Image style={{height:20,width:20,marginVertical:10}} source={require('../assets/2.jpeg')}/>
      <Text style={{fontWeight:300, fontSize:14,}}>The Daily Digest</Text>
      </View>
      <Text onPress={() => Linking.openURL('https://www.hotcars.com/50m-luxury-car-collections-hungry-business/')}  style={{fontWeight:600,fontSize:21,}}>
      $50 Million Luxury Collection in Germany
  </Text>
    </View>
    <View style={styles.seperation}>
    <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={handleThumbsUpClick}>
            <Icon style={{ paddingRight: 25, color: thumbsUpClicked ? 'blue' : undefined }} name={thumbsUpClicked ? 'thumbs-up' : 'thumbs-up-outline'} size={23} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleThumbsDownClick}>
            <Icon style={{ color: thumbsDownClicked ? 'blue' : undefined }} name={thumbsDownClicked ? 'thumbs-down' : 'thumbs-down-outline'} size={23} />
          </TouchableOpacity>
        </View>
      </View>
    </View> 

<View style={styles.Imagec}>
    <Image
        style={styles.postImage}
        source={require('../assets/ai.jpg')}
      />
    <View style={{paddingLeft:15}}>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Image style={{height:20,width:20,marginVertical:10}} source={require('../assets/2.jpeg')}/>
      <Text style={{fontWeight:300, fontSize:14,}}>The Daily Digest</Text>
      </View>
      <Text onPress={() => Linking.openURL('https://www.theverge.com/23610427/chatbots-chatgpt-new-bing-google-bard-conversational-ai')}  style={{fontWeight:600,fontSize:21,}}>
      Bing, Bard, and ChatGPT: AI chatbots are rewriting the internet
  </Text>
    </View>
    <View style={styles.seperation}>
    <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={handleThumbsUpClick}>
            <Icon style={{ paddingRight: 25, color: thumbsUpClicked ? 'blue' : undefined }} name={thumbsUpClicked ? 'thumbs-up' : 'thumbs-up-outline'} size={23} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleThumbsDownClick}>
            <Icon style={{ color: thumbsDownClicked ? 'blue' : undefined }} name={thumbsDownClicked ? 'thumbs-down' : 'thumbs-down-outline'} size={23} />
          </TouchableOpacity>
        </View>
      </View>
    </View> 

     
    </ScrollView>
  );
};

export default Today;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'#fff',
   height:'100%'
  },
  Profiletop:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:15,
    backgroundColor:'#D9FBFE'
  ,paddingVertical:20,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  Imagec:{
    backgroundColor:'#E5F5FF',
    marginHorizontal:20,
    height:310,
    marginBottom:20,
    shadowColor:"#E5F5FF",
    elevation:10,
    borderRadius:14
    
  },
  postImage: {
    width: '100%',
    height: "50%",
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius:14,
    borderTopRightRadius:14,
    resizeMode:'stretch',

  },
  buttonContainer: {
    flexDirection: 'row',
    width: 150,
    paddingLeft:15,
    paddingTop:10,

  },
  seperation:{
    justifyContent:'space-between',
    

  }
 
});