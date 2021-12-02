
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import FaceBook from '../screens/FaceBook';
import Dashboard from '../screens/Dashboard/Dashboard';
import dashboard2 from '../screens/dashboard2';
import history from '../screens/history';
import feedback from '../screens/feedback';
import menu from '../screens/menu';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons'



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function rootnavigator() {
    const[tabenable,setTabEnable] = React.useState(true)
    

    const MainScreen = () =>{
        return(
            <Tab.Navigator  
                 initialRouteName={Dashboard}
                 screenOptions={{headerShown:false, tabBarActiveTintColor:'#034C81', tabBarInactiveTintColor:'#999999'}}
                 tabBarOptions={{indicatorStyle:{backgroundColor:'#034C81'}}}     
                      
            >
                <Tab.Screen 
                    name="dashboard"                     
                    component={Dashboard}  
                    options={{
                        tabBarIcon:( {focused} )=>{
                            return(
                                <Image resizeMode="contain" style={{height:25,width:24, tintColor: focused ? '#034C81' : '#999999' }} source={require('../../assets/images/home.png')}  />
                            )
                        },
                        tabBarLabel:"Home" ,
                        //tabBarActiveTintColor:'#034C81' ,
                        
                    }}
    
                />
                <Tab.Screen 
                    name="history" 
                    component={history} 
                    options={{
                        tabBarIcon:( {focused} )=>{
                            return(
                                <Image resizeMode="contain" style={{height:20,width:25, tintColor: focused ? '#034C81' : '#999999' }} source={require('../../assets/images/history.png')}  />
                            )
                        },
                        
            
                        tabBarLabel:"Hospital History",
                        
                        //tabBarActiveTintColor:'#034C81'
                    }}  
                />
                <Tab.Screen 
                    name="feedback" 
                    component={feedback} 
                    options={{
                        tabBarIcon:( {focused} )=>{
                            return(
                                <Image resizeMode="contain" style={{height:20,width:25,tintColor: focused ? '#034C81' : '#999999'}} source={require('../../assets/images/feedback.png')}  />
                            )
                        },
                        
                        tabBarLabel:"feedback",
                        //tabBarActiveTintColor:'#034C81',
                        
                    }} 
                />
                <Tab.Screen 
                    name="menu" 
                    component={menu} 
                    options={{
                        tabBarIcon:( {focused} )=>{
                            return(
                                <Image resizeMode="contain" style={{height:20,width:25,tintColor: focused ? '#034C81' : '#999999'}} source={require('../../assets/images/menu.png')}  />
                            )
                        },
                        tabBarLabel:"Menu",
                        //tabBarActiveTintColor:'#034C81'
                        
                    }}  
                />
            </Tab.Navigator>
        )
    }








    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                   headerShown: false
              }} 
              >
                <Stack.Screen name="login" component={login} />
                {/* <Stack.Screen name="dashboard1" component={dashboard1} /> */}
                <Stack.Screen name="dashboard1" component={MainScreen} />
                <Stack.Screen name="dashboard2" component={dashboard2} />
                <Stack.Screen name="facebook" component={FaceBook} />
                <Stack.Screen name="country" component={selectcountry} />
                <Stack.Screen name="signup" component={signup} />
                <Stack.Screen name="dailcode" component={dailcode} />
                <Stack.Screen name="dailcode2" component={dailcode2} />
                <Stack.Screen name="forgot" component={forgot} />
                <Stack.Screen name="page" component={page} />
                {/* <Stack.Screen name="dashboard" component={dashboard} /> */}
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