//import liraries
import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

// create a component
const ExceptionCare = ({text}) => {
    return (
        <View style={{width:374,height:154,left:8 ,backgroundColor:'#e7edfe'}} >
          <Text style={{fontSize:18,fontWeight:'700', marginHorizontal:20, marginTop:15}} >My Exceptional Care</Text>
          <TouchableOpacity style={{left:270,top:-25, width:88,height:30,backgroundColor:'#ffff',borderRadius:4,borderColor:'#5382F6',borderWidth:1}} onPress={() => console.log('Pressed')}  >
            <Text style={{fontSize:14,fontWeight:'700',alignSelf:'center',alignContent:'center',top:5,color:'#5382F6'}} >Edit</Text>
          </TouchableOpacity>
          <View style={{width:342,height:64,left:15, backgroundColor:'#f2f2f2'}} >
            <Text style={{textAlign:'center',top:20,fontSize:16,fontWeight:'400'}}  >{text}</Text>
          </View>
        </View>
    );
};

export default ExceptionCare;
