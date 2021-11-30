import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionAnswer = ({onPress,}) => {
    return (
        <View style={{width:414,height:40,top:-450,backgroundColor:'#F9F9F9'}} >
         <Text style={{left:-70,top:10,fontSize:12,fontWeight:'600',alignSelf:'center', fontFamily:'Lato'}} >Have any questions? Ask away</Text>
         <Text onPress={onPress} style={{left:76,top:-4,fontSize:12,fontWeight:'700',alignSelf:'center', color:'#5382F6', fontFamily:'Lato'}} >Get your Answers</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default QuestionAnswer;
