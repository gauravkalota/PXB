
import * as React from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import login from '../screens/login';
import selectcountry from '../screens/selectcountry';
import forgot from '../screens/forgot';
import resetpassword from '../screens/resetpassword';
import passwordset from '../screens/passwordset';
import dailcode from '../screens/dailcode'; 
import signup from '../screens/signup';
import page from '../screens/page';
import dailcode2 from '../screens/dailcode2';
import mobileverification from '../screens/mobileverification';
import optionalverification from '../screens/optionalverification';
import verificationsuccessful from '../screens/verificationsuccessful';
import profilepicture from '../screens/profilepicture';
import redux1 from '../screens/redux1';
import redux2 from '../screens/redux2';
import notifications from '../screens/notifications'

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};


function Home() {

  return (
    <Tab.Navigator  screenOptions={{ headerShown: false }} >
      <Tab.Screen name="movies" options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="movie-filter" color={color} size={size} />
            ),
          }} component={redux1}  />
      <Tab.Screen name="favourites"   options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="favorite" color={color} size={size} />
            ),
          }} component={redux2} />
    </Tab.Navigator>
  );
}



const Stack = createNativeStackNavigator();

function rootnavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                   headerShown: false
              }} 
              >
                <Stack.Screen name="login" component={login} />
                <Stack.Screen name="notifications" component={notifications} />
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="country" component={selectcountry} />
                <Stack.Screen name="signup" component={signup} />
                <Stack.Screen name="dailcode" component={dailcode} />
                <Stack.Screen name="dailcode2" component={dailcode2} />
                <Stack.Screen name="forgot" component={forgot} />
                <Stack.Screen name="page" component={page} />
                <Stack.Screen name="resetpassword" component={resetpassword} />
                <Stack.Screen name="mobile" component={mobileverification} />
                <Stack.Screen name="optional" component={optionalverification} />
                <Stack.Screen name="passwordset" component={passwordset} />
                <Stack.Screen name="verification" component={verificationsuccessful} />
                <Stack.Screen name="profilepicture" component={profilepicture} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default rootnavigator;