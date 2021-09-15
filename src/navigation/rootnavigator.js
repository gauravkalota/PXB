
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import register from '../screens/register';
import selectcountry from '../screens/selectcountry';
const Stack = createNativeStackNavigator();

function rootnavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                   headerShown: false
              }} 
              >
                <Stack.Screen name="register" component={register} />
                <Stack.Screen name="country" component={selectcountry} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default rootnavigator;