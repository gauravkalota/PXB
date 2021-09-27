
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import register from '../screens/register';
import selectcountry from '../screens/selectcountry';
import forgot from '../screens/forgot';
import resetpassword from '../screens/resetpassword';
import passwordset from '../screens/passwordset';
import dailcode from '../screens/dailcode'; 

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
                <Stack.Screen name="dailcode" component={dailcode} />
                <Stack.Screen name="forgot" component={forgot} />
                <Stack.Screen name="resetpassword" component={resetpassword} />
                <Stack.Screen name="passwordset" component={passwordset} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default rootnavigator;