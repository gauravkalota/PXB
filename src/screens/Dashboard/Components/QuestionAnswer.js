import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionAnswer = ({onPress}) => {
    return (
    <View>
        <View style={{width:414,height:40,backgroundColor:'#F9F9F9'}} >
        <View style={{width:414,backgroundColor:'#1a1a1a', borderWidth:0.1}} ></View>  
        <Text style={{fontSize:12,fontWeight:'600', fontFamily:'Lato',top:12,left:55}} >Have any questions? Ask away</Text>
        <Text onPress={onPress} style={{ fontSize:12,fontWeight:'700', color:'#5382F6', fontFamily:'Lato',top:-2,left:220}} >Get your Answers</Text>
        </View>
    </View>
        
    );
};

const styles = StyleSheet.create({
    
});

export default QuestionAnswer;
