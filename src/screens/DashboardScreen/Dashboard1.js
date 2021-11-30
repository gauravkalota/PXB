import React,{useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Platform ,Image, TouchableOpacity} from 'react-native';
import {} from 'react-native-paper'
import {useSelector} from 'react-redux';
import ExceptionCare from './comps/ExceptionCare';
import MyCareTeam from './comps/MyCareTeam';
import ProfilePicture from './comps/ProfilePicture';
import QuestionAnswer from './comps/QuestionAnswer';


function dashboard1  ({navigation, route})  {
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

    
return (
    <ScrollView style={{backgroundColor :'#ffff'}} >
      <View style={styles.picture} >
        <ProfilePicture patient_name={'Felix Harder'} patient_status={'In Patient'} uri={'https://cdn-icons.flaticon.com/png/512/3024/premium/3024605.png?token=exp=1638269673~hmac=bcdf1b520fdb3a426eda766fc65570c2'} />
        <View style={{top:-615 ,alignSelf:'center', borderBottomColor:'#999999', borderBottomWidth:0.3,height:'50%', width:374 }}/>
        <Text style={styles.name} >Carolinas Medical Center</Text>
        <View style={{top:-1182 ,alignSelf:'center', borderBottomColor:'#999999', borderBottomWidth:0.3,height:'50%', width:374 }}/>
      </View>
      <View>
        <TouchableOpacity style={styles.butn} mode="contained" onPress={() => console.log('Pressed')}   >
          <Text style={{ fontFamily:'Lato',color:'white',fontWeight:'700',fontSize:14 ,alignSelf:'center',top:5 }}  >Change</Text>
        </TouchableOpacity>
        <Text style={{fontFamily:'Lato', top:-945,left:20,fontSize:12,fontWeight:'500',color:'#999999'}}  >Attending Doctor</Text>
        <Text style={{fontFamily:'Lato',top:-942,left:20,fontSize:14,fontWeight:'700', color:'#5382F6'}}  >Dr Jose Portilla</Text>
       <Image style={styles.pp} style={styles.pp} source={require('../../../assets/images/doctor.png')}/>
      </View>
      <View style={{top:-965}}>
        <ExceptionCare card_text1={'//body//'} card_text2={'//body//'} />
      </View>
      <View style={{top:25}} >
        <MyCareTeam />
      </View>
      <View style={{top:-490}} >
        <QuestionAnswer onPress={()=>console.log('Pressed')} />
      </View>
      
     

           
        
   </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
  picture:{
    top:45
  },
  line:{
    borderBottomWidth:0.1,
    width:'80%'
  },
  name:{
    fontSize:14,
    fontWeight:'500',
    lineHeight:16.8,
    top:-598,
    marginHorizontal:20,
    fontFamily:'Lato'
  },
  butn:{
    width:79,
    height:30,
    backgroundColor:'#5382F6',
    top:-965,
    left: 289,
    borderRadius:4,
  },
  pp:{
    width:40,
    height:40,
    borderRadius:18,
    top:-976,
    left:316
  }
});

//make this component available to the app
export default dashboard1;
