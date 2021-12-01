//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

// create a component
const feedback = () => {
    return (
        <View style={styles.container}>
            <View style={{alignItems:'center', width:414,height:102, backgroundColor:'#034C81'}} >
                <Text style={{top:60,fontSize:20,fontWeight:'600',fontFamily:'Lato',color:'white'}}  >Feedback</Text>
            </View>
            <View style={{alignItems:'center',top:15,left:8 ,width:374,height:369,backgroundColor:'#FFFF'}} >
              <Text style={{marginTop:24 ,fontSize:16,fontWeight:'600'}} >Rate the Hospital</Text>
              <Text style={{marginTop:8, fontSize:14,fontWeight:'400'}} >Carolinas Medical Center</Text>
              <TextInput mode="outlined" placeholder="Share your feedback"   style={{color:'#FFFF', top:90,width:334,height:110}} />
              <TouchableOpacity style={{top:105,backgroundColor:'#e6e6e6', width:334,height:56,borderRadius:4}} >
                  <Text style={{alignSelf:'center',top:15, fontFamily:'Lato', fontWeight:'700', fontSize:16, color:'white'}} >Submit</Text>
              </TouchableOpacity>
            </View>

            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#FFFF',
    },
});

//make this component available to the app
export default feedback;
