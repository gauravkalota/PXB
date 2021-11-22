//import liraries
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet , Button} from 'react-native';

// create a component
const dashboard = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>dashboard</Text>
            <Button 
              title="Go Back"
              onPress={()=> navigation.navigate('login')}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default dashboard;
