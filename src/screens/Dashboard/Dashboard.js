import React,{useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import {Avatar} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import MyCareTeam from './components/MyCareTeam';
import ProfilePicture from './components/ProfilePicture';
import QuestionAnswer from './components/QuestionAnswer';
import ExceptionCare from './components/ExceptionCare';
import AppButton from '../../components/AppButton';

function Dashboard  ({navigation, route})  {
const [enter, setEnter] = useState('')
const [one,setone] = useState('');
const [two,settwo] = useState('');
const Id1 = useSelector((state)=>state.smurfName)
const Id2 = useSelector((state)=>state.pass)
const Id3 = useSelector((state)=>state.obj)

const loginPress = () => {
    dispatch(setSmurfName(enter))
    navigation.navigate('dashboard2');
}

const[dis,setDis] = useState(true);
  
const dial = () => {
    setDis(false);

}
//////////GET_DATA///////////
// console.log(app_version,app_name,'XX')
// const OsVer = Platform.constants['Release'];
// console.log(OsVer,'os_version');
//console.log(" Minimum Android version - Lollipop-5.0, API-level-21")
//console.log("Minimum OS version ios - platform :ios, '11.0")
console.log("DATA", Id3 )


//////AVATAR_ICON_IF_SOURCE_IS_MENTION/NOT_MENTION
function IsProfilePictureGiven({style,size,source}) {
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





    
return (
  <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
    <ScrollView  contentContainerStyle={{paddingBottom:60}} style={{top:-12,marginBottom:-74 ,backgroundColor :'#ffff'}} >
      <View style={styles.container1}  >
        <ProfilePicture patient_name={'Felix Harder'} patient_status={'In Patient'} uri={'https://cdn-icons.flaticon.com/png/512/3024/premium/3024605.png?token=exp=1638269673~hmac=bcdf1b520fdb3a426eda766fc65570c2'} />
        <View style={{top:-170, alignSelf:'center', borderBottomColor:'#999999', borderBottomWidth:0.3,height:'50%', width:374 }}/>
        <Text style={styles.name} >Carolinas Medical Center</Text>
        <View style={{top:-289, alignSelf:'center', borderBottomColor:'#999999', borderBottomWidth:0.3,height:'50%', width:374 }}/>
        <AppButton style={styles.butn} title={"change"} onpress={()=>console.warn("Pressed")} /> 
        <Text style={{fontFamily:'Lato', top:-305,left:20,fontSize:12,fontWeight:'500',color:'#999999'}}  >Attending Doctor</Text>
        <Text style={{fontFamily:'Lato',top:-300,left:20,fontSize:14,fontWeight:'700', color:'#5382F6'}}  >Dr Jose Portilla</Text>
        <NoProfilePictureGiven  style={styles.pp}  size={40} lable="J" />
      </View>
      <View style={{marginTop:10}}>
        <ExceptionCare 
          card_text1={"STATEMENT//"}
          card_text2={"STATEMENT//"}
          card_text3={"STATEMENT//"}
          card_text4={"STATEMENT//"}
          card_text5={"STATEMENT//"}   
        />
      </View>
      <View style={{top:1100}} >
         <MyCareTeam />
      </View>
   </ScrollView>
   <View style={{top:485}} >
        <QuestionAnswer onPress={()=>console.log('Pressed')} />
      </View>
  </SafeAreaView>   
    );
};

// define your styles
const styles = StyleSheet.create({
  container1:{
    top:20,
    //backgroundColor:"blue",
    height:300,
  },
  line:{
    borderBottomWidth:0.1,
    width:'80%'
  },
  name:{
    fontSize:14,
    fontWeight:'500',
    lineHeight:16.8,
    top:-158,
    marginHorizontal:20,
    fontFamily:'Lato'
  },
  butn:{
    width:79,
    height:30,
    backgroundColor:'#5382F6',
    top:-327,
    left: 289,
    borderRadius:4,
  },
  pp:{
    width:40,
    height:40,
    //borderRadius:18,
    top:-340,
    left:316,
    backgroundColor:'#A479E2'
  }
});

//make this component available to the app
export default Dashboard;
