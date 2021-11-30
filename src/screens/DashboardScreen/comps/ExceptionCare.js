//import liraries
import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

// create a component
const ExceptionCare = ({card_text1,card_text2}) => {
    return (
        <View style={{ width:360,height:244,left:15 ,backgroundColor:'#e7edfe'}} >
          <Text style={{fontSize:18,fontWeight:'700', marginHorizontal:20, marginTop:15, fontFamily:'Lato'}} >My Exceptional Care</Text>
          <TouchableOpacity style={{left:262,top:-25, width:88,height:30,backgroundColor:'#ffff',borderRadius:4,borderColor:'#5382F6',borderWidth:1}} onPress={() => console.log('Pressed')}  >
            <Text style={{fontSize:14,fontWeight:'700',alignSelf:'center',alignContent:'center',top:5,color:'#5382F6', fontFamily:'Lato'}} >Edit</Text>
          </TouchableOpacity>
          <View style={{borderRadius:4, width:342,height:64,left:8, backgroundColor:'#FFFFFF'}} >
            <Text style={{ textAlign:'center',top:20,fontSize:16,fontWeight:'400', color:'grey', fontFamily:'Lato'}}  >{card_text1}</Text>
          </View>
          <View style={{borderRadius:4, marginTop:10, width:342,height:64,left:8, backgroundColor:'#FFFFFF'}} >
            <Text style={{textAlign:'center',top:20,fontSize:16,fontWeight:'400', color:'grey', fontFamily:'Lato'}}  >{card_text2}</Text>
          </View>
        </View>
    );
};

export default ExceptionCare;
