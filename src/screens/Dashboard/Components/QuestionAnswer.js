import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionAnswer = ({onPress,}) => {
    return (
        <View style={{width:414,height:40,top:-450,backgroundColor:'#F9F9F9'}} >
          <View style={{width:414,backgroundColor:'#1a1a1a', borderWidth:0.1}} ></View>  
         <Text style={{left:-65,top:13,fontSize:12,fontWeight:'600',alignSelf:'center', fontFamily:'Lato'}} >Have any questions? Ask away</Text>
         <Text onPress={onPress} style={{left:69,top:-1,fontSize:12,fontWeight:'700',alignSelf:'center', color:'#5382F6', fontFamily:'Lato'}} >Get your Answers</Text>
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
