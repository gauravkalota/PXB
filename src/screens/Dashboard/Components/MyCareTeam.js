import React,{useState,useEffect} from 'react';
import { Alert } from 'react-native';
import { View, Text, ScrollView,Image, StyleSheet } from 'react-native';

const MyCareTeam = () => {

  const [isValid,setIsValid] = useState(true);
  const [bordervisible , setBorderVisible] = useState(true);

  const NurBtnClicked = () =>{
    setIsValid(false);
  }
  const ClinicBtnClicked = () => {
    setIsValid(true);
  }
   
  

    return (
      <View style={styles.container} >
        <Text style={styles.mycareText} >My Care Team</Text>
        <Text style={styles.cliniciansText} onPress={()=>ClinicBtnClicked()} >Clinicians</Text>
        <View style={styles.cliniciansBorder} ></View>
        <Text style={styles.nursesText} onPress={()=>NurBtnClicked()}  >Nurses</Text>
      {isValid ? (
        <View style={styles.nextcontainer} >
            <View style={styles.card1View} >
              <Image style={styles.drpicture} source={require('../../../../assets/images/doctor.png')} />
              <Text style={styles.drname} >Ardit Sulce</Text>
              <Text style={styles.occupation} >Cardiologist,Interventional Cardiologist</Text>
            </View>
            <View style={{marginTop:10,left:17, width:360,height:100,backgroundColor:'#FFFFFF',shadowOpacity:0.1}} >
              <Image style={styles.drpicture} source={require('../../../../assets/images/doctor.png')} />
              <Text style={styles.drname} >Jonas Schmedtmann</Text>
              <Text style={styles.occupation} >Neurologist</Text>
            </View>
            <View style={{marginTop:10,left:17, width:360,height:100,backgroundColor:'#FFFFFF',shadowOpacity:0.1}} >
              <Image style={styles.drpicture} source={require('../../../../assets/images/doctor.png')} />
              <Text style={styles.drname} >Brent Eviston</Text>
              <Text style={styles.occupation} >Dentist, Prosthodontist, Implantologist</Text>
            </View>
        </View>

      ) : (
        <View style={styles.nextcontainer} ></View>
      ) }  
        
      </View>
    );
};
export default MyCareTeam;

const styles = StyleSheet.create({
  container: {
    top:-980
  },
  mycareText:{
    left:15,
    fontSize:20,
    fontWeight:'700',
    lineHeight:24,
    fontFamily:'Lato'
  },
  cliniciansText:{
    top:22,
    left:30,
    fontSize:16,
    fontWeight:'700',
    fontFamily:'Lato', 
    color: '#034C81'
  },
  cliniciansBorder:{
    top:29, 
    left:15,
    width:110,
    borderWidth:1
  },
  nursesText:{
    top:0, 
    left:150,
    fontSize:16,
    fontWeight:'700',
    fontFamily:'Lato', 
    color:'#999999'
  },
  nextcontainer:{
    top:10 ,
    width:414,
    height:360, 
    backgroundColor:"#F7F7F7"
  },
  card1View:{
    marginTop:25,
    left:17, 
    width:360,
    height:100,
    backgroundColor:'#FFFFFF', 
    shadowOpacity:0.1
  },
  drpicture:{
    top:20,
    marginLeft:10,
    height:60, 
    width:60
  },
  drname:{
    fontSize:16,
    fontWeight:'700',
    left:85,
    top:-30
  },
  occupation:{
    fontSize:14,
    fontWeight:'400',
    left:85,
    top:-30,
    color:'#999999'
  }

})
