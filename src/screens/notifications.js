import React, { useState, useEffect } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import messaging from '@react-native-firebase/messaging';


const notifications = ({navigation}) => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
 

useEffect(() => {
    requestUserPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
   }, []);    

requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken()
      console.log('Authorization status:', authStatus);
    }
  }

getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
     console.log(fcmToken);
     console.log("Your Firebase Token is:", fcmToken);
    } else {
     console.log("Failed", "No token received");
    }
  }



    return(
        <View>
            <Text onPress={()=> navigation.navigate('login')} style={{top:270,right:-180}}>PUSH</Text>
        </View>
    );
}

export default notifications;