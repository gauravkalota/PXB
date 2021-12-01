import React from 'react';
import { View, Text, ScrollView,Image } from 'react-native';

const MyCareTeam = () => {
    return (
        <View style={{top:-980}} >
        <Text style={{left:14,fontSize:20,fontWeight:'700',lineHeight:24,fontFamily:'Lato'}} >My Care Team</Text>
        <Text style={{top:5,left:33, fontSize:16,fontWeight:'700',fontFamily:'Lato', color:'#034C81'}} >Clinicians</Text>
        <View style={{top:10, left:17,width:110,borderWidth:1}} ></View>
        <Text style={{top:-15, left:140,fontSize:16,fontWeight:'700',fontFamily:'Lato', color:'#034C81'}} >Nurses</Text>
        <ScrollView style={{top:-10 ,width:414,height:360, backgroundColor:"#F7F7F7"}} >
            <View style={{marginTop:15,left:17, width:360,height:100,backgroundColor:'#FFFFFF'}} >
              <Image style={{top:20,marginLeft:10,height:60, width:60}} source={require('../../../../assets/images/doctor.png')} />
              <Text style={{fontSize:16,fontWeight:'700',left:85,top:-30}} >Ardit Sulce</Text>
              <Text style={{fontSize:14,fontWeight:'400',left:85,top:-30,color:'#999999'}} >Cardiologist,Interventional Cardiologist</Text>
            </View>
            <View style={{marginTop:10,left:17, width:360,height:100,backgroundColor:'#FFFFFF'}} >
              <Image style={{top:20,marginLeft:10,height:60, width:60}} source={require('../../../../assets/images/doctor.png')} />
              <Text style={{fontSize:16,fontWeight:'700',left:85,top:-30}} >Jonas Schmedtmann</Text>
              <Text style={{fontSize:14,fontWeight:'400',left:85,top:-30,color:'#999999'}} >Neurologist</Text>
            </View>
            <View style={{marginTop:10,left:17, width:360,height:100,backgroundColor:'#FFFFFF'}} >
              <Image style={{top:20,marginLeft:10,height:60, width:60}} source={require('../../../../assets/images/doctor.png')} />
              <Text style={{fontSize:16,fontWeight:'700',left:85,top:-30}} >Brent Eviston</Text>
              <Text style={{fontSize:14,fontWeight:'400',left:85,top:-30,color:'#999999'}} >Dentist, Prosthodontist, Implantologist</Text>
            </View>
        </ScrollView>
      </View>
    );
};
export default MyCareTeam;
