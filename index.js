/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
import App from './App';
import {name as appName} from './app.json';
PushNotification.configure({
 
    onNotification: function(notification){
        console.log("NOTIFICATION:", notification);
    },
    onRegister: function (token) {
        console.log('TOKEN:', token);
    },
    requestPermissions: Platform.OS === 'ios'
});

AppRegistry.registerComponent(appName, () => App);
