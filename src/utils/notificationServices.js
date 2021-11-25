import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';


export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken()
  }
}

const getFcmToken = async()=>{
    let fcmToken = await AsyncStorage.getItem('fcmToken')
    console.log(fcmToken," Old Token")
    if(!fcmToken){
      try {
        const fcmToken = await messaging().getToken();
        if(fcmToken){
            // console.log(fcmToken,"the new genrated token");
            Alert.alert('TOKEN-gaurav', fcmToken)
            await AsyncStorage.setItem('fcmToken', fcmToken)
        }  
      } catch (error) {
          await AsyncStorage.setItem('fcmToken','fcm not received------------------------------- failed')

          // let newfcmToken = await AsyncStorage.getItem('fcmToken')
          // console.log('NewToken', newfcmToken)
          // console.log(error, "error raised in fcmToken")
          // Alert.alert(error,"error")
          Alert.alert("There is something wrong!!!!", error.message);
      }
    }  
}



////////function_for_Notification////

export const notificationListener = async() => {

    //////BACKGROUND///////
     messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Notification caused app to open from background state:',remoteMessage.notification,);
    });

    /////FOREGROUND///////
    messaging().onMessage(async remoteMessage => {
        console.log("received in foreground", remoteMessage)
    })
    
    /////QUIT///////
     messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
        console.log('Notification caused app to open from quit state:',remoteMessage.notification,);
        }
      });
}