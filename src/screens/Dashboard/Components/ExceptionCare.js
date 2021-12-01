//import liraries
import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

// create a component
const ExceptionCare = ({card_text1,card_text2}) => {
    return (
        <View style={{ width:364,height:230,left:13,borderRadius:4 ,backgroundColor:'rgba(83,130,246,0.08)'}} >
          <Text style={{fontSize:18,fontWeight:'700', marginHorizontal:15, marginTop:23, fontFamily:'Lato'}} >My Exceptional Care</Text>
          <TouchableOpacity style={{left:271,top:-25, width:80,height:30,backgroundColor:'#ffff',borderRadius:4,borderColor:'#5382F6',borderWidth:1}} onPress={() => console.log('Pressed')}  >
            <Text style={{fontSize:14,fontWeight:'700',alignSelf:'center',alignContent:'center',top:5,color:'#5382F6', fontFamily:'Lato'}} >Edit</Text>
          </TouchableOpacity>
          <View style={{borderRadius:4, width:340,height:64,left:12, backgroundColor:'#FFFFFF'}} >
            <Text style={{ textAlign:'center',top:20,fontSize:16,fontWeight:'400', color:'grey', fontFamily:'Lato'}}  >{card_text1}</Text>
          </View>
          <View style={{borderRadius:4, marginTop:10, width:340,height:64,left:12, backgroundColor:'#FFFFFF'}} >
            <Text style={{textAlign:'center',top:20,fontSize:16,fontWeight:'400', color:'grey', fontFamily:'Lato'}}  >{card_text2}</Text>
          </View>
        </View>
    );
};

export default ExceptionCare;
