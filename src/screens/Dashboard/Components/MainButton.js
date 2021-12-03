//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';

// create a component
const MainButton = ({text}) => {
    return (
        <TouchableOpacity style={{top:16,left:13,width:342,height:48,borderRadius:4, borderWidth:1,borderColor:'#5382F6',backgroundColor:'#FFFFFF',}} >
              <Text style={{textAlign:'center',top:13,fontSize:14,fontWeight:'700',fontFamily:'Lato',color:'#5382F6'}} >{text}</Text>
        </TouchableOpacity>
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
export default MainButton;
