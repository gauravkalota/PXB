//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import CustomButton from '../components/CustomButton';
// create a component
const history = () => {
    return (
        <View style={styles.container}>
            <Text>history</Text>
            <CustomButton style={styles.btn} text={"BUTTON"} onPress={()=>console.warn("Pressed")}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    btn:{
    borderRadius:4,
    }
});

//make this component available to the app
export default history;
