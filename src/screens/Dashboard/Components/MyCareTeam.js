import React,{useState,useEffect} from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';


//////AVATAR_ICON_IF_SOURCE_IS_MENTION/NOT_MENTION
function IsProfilePictureGiven({style,size,lable,source}) {
  const [isgiven, setIsGiven] = useState(true);
  return (
    <View>
      <Avatar.Image  style={style} size={size} source={source} />
    </View>
    
  );
}
function NoProfilePictureGiven ({style,size,lable}){
  return(
    <View>
      <Avatar.Text style={style} color="white" size={size} label={lable} />
    </View>
  )
}

const MyCareTeam = ({drname,drwork}) => {

  const [isValid,setIsValid] = useState(true);
  const [bordervisible , setBorderVisible] = useState(true);
  const [imagelink, setImageLink] = useState(true)

//When Nurses TAB Clicked 
  const NurBtnClicked = () =>{
    setIsValid(false);
  }
   
//When Clinicians TAB Clicked 
  const ClinicBtnClicked = () => {
    setIsValid(true);
  }
   
  

    return (
      <View style={styles.container} >
        <Text style={styles.mycareText} >My Care Team</Text>
        <Text style={ isValid ?  styles.cliniciansText : styles.cliniciansTextDIS} onPress={()=>ClinicBtnClicked()} >Doctors</Text>
        <View style={isValid ? styles.cliniciansBorder : styles.cliniciansBorderSHIFT} ></View>
        <Text style={ isValid ? styles.nursesTextDIS : styles.nursesText} onPress={()=>NurBtnClicked()}  >Nurses</Text>
      {isValid ? (
        <View style={styles.nextcontainer} >
            <View style={styles.card1View} >
              <NoProfilePictureGiven style={styles.drpicture} size={55} lable="A" />
              {/* <Avatar.Text style={styles.drpicture} label="A" size={55} /> */}
              <Text style={styles.drname} >{drname}</Text>
              <Text style={styles.occupation} >{drwork}</Text>
            </View>
            <View style={styles.card2View} >
              {/* <Image style={styles.drpicture} source={require('../../../../assets/images/doctor.png')} /> */}
              <NoProfilePictureGiven style={styles.drpicture1} size={55} lable="J" />
              <Text style={styles.drname} >Jonas Schmedtmann</Text>
              <Text style={styles.occupation} >Neurologist</Text>
            </View>
            <View style={styles.card2View} >
              {/* <Image style={styles.drpicture} source={require('../../../../assets/images/doctor.png')} /> */}
              <NoProfilePictureGiven style={styles.drpicture2} size={55} lable="B" />
              <Text style={styles.drname} >Brent Eviston</Text>
              <Text style={styles.occupation} >Dentist, Prosthodontist, Implantologist</Text>
            </View>
        </View>

      ) : (
          <View style={styles.nextcontainer} >
            <View style={styles.card1View} >
              <IsProfilePictureGiven style={styles.drpicture} source={require('../../../../assets/images/doctor.png')} />
              <Text style={styles.drname} >Nurse 1</Text>
              <Text style={styles.occupation} >Nurse</Text>
            </View>
            <View style={styles.card2View} >
              <IsProfilePictureGiven style={styles.drpicture} source={require('../../../../assets/images/doctor.png')} />
              <Text style={styles.drname} >Nurse 2</Text>
              <Text style={styles.occupation} >Nurse</Text>
            </View>
            <View style={styles.card2View} >
              <IsProfilePictureGiven style={styles.drpicture} source={require('../../../../assets/images/doctor.png')} />
              <Text style={styles.drname} >Nurse 3</Text>
              <Text style={styles.occupation}>Nurse</Text>
            </View>
        </View>
      ) }  
        
      </View>
    );
};
export default MyCareTeam;

const styles = StyleSheet.create({


  container: {
    top:-1070
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
    color:   '#034C81'
  },
  cliniciansTextDIS:{
    top:22,
    left:30,
    fontSize:16,
    fontWeight:'700',
    fontFamily:'Lato', 
    color:   '#999999'
  },
  cliniciansBorder:{
    top:29, 
    left:15,
    width:110,
    height:2,
    //borderWidth:1,
    backgroundColor:'#034C81'
  
    
  },
  cliniciansBorderSHIFT:{
    top:29, 
    left:145,
    width:110,
    //borderWidth:1
    height:2,
    backgroundColor:'#034C81'
  },
  nursesTextDIS:{
    top:0, 
    left:150,
    fontSize:16,
    fontWeight:'700',
    fontFamily:'Lato', 
    color: '#999999'
  },
  nursesText:{
    top:0, 
    left:150,
    fontSize:16,
    fontWeight:'700',
    fontFamily:'Lato', 
    color: '#034C81'
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
    shadowOpacity:0.03,
    
  },
  card2View:{
    marginTop:10,
    left:17, 
    width:360,
    height:100,
    backgroundColor:'#FFFFFF',
    shadowOpacity:0.03

  },
  drpicture:{
    top:20,
    marginLeft:10,
    height:60, 
    width:60,
    backgroundColor: '#FF8A65'
  },
  drpicture1:{
    top:20,
    marginLeft:10,
    height:60, 
    width:60,
    backgroundColor: '#4EC4F6'
  },
  drpicture2:{
    top:20,
    marginLeft:10,
    height:60, 
    width:60,
    backgroundColor: '#4DB6AC'
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
