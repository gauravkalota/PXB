//import liraries
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
const ProfilePicture = ({uri,text1,text2}) => {
    return (
        <View style={styles.headerContent}>
            <Image resizeMode='contain' style={styles.avatar} source={{uri:uri}}/>
            <Text style={styles.name}>{text1}</Text>
            <Text >{text2}</Text>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 0.4,
    //borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"black",
    fontWeight:'600',
  }

});

export default ProfilePicture;
