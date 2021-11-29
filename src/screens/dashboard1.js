import React,{useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Platform ,Image, TouchableOpacity} from 'react-native';
import {Button,} from 'react-native-paper'
import {useSelector} from 'react-redux';
import ExceptionCare from '../components/ExceptionCare';
import ProfilePicture from '../components/ProfilePicture';




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
        <ProfilePicture text1={'Felix Harder'} text2={'In Patient'} uri={'https://cdn-icons-png.flaticon.com/128/387/387561.png'} />
        <View style={{top:-370 ,alignSelf:'center', borderBottomColor:'black', borderBottomWidth:0.3,height:'50%', width:'90%' }}/>
        <Text style={styles.name} >Carolinas Medical Center</Text>
        <View style={{top:-710 ,alignSelf:'center', borderBottomColor:'black', borderBottomWidth:0.3,height:'50%', width:'90%' }}/>
      </View>
      <View>
        <Button style={styles.butn} mode="contained" onPress={() => console.log('Pressed')}  >
          <Text style={{color:'white',fontWeight:'700',fontSize:9}} >Change </Text>
        </Button>
        <Text style={{ top:-450,left:20,fontSize:12,fontWeight:'500',}}  >Attending Doctor</Text>
        <Text style={{top:-445,left:20,fontSize:14,fontWeight:'700', color:'#5382F6'}}  >Dr Jose Portilla</Text>
       <Image style={styles.pp} style={styles.pp} source={require('../../assets/images/doctor.png')}/>
      </View>
      <View style={{top:-460}}>
        <ExceptionCare text={'body'} />
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
    top:-355,
    marginHorizontal:30
  },
  butn:{
    width:79,
    height:30,
    backgroundColor:'#5382F6',
    top:-462,
    left: 289
  },
  pp:{
    width:40,
    height:40,
    borderRadius:18,
    top:-480,
    left:316
  }
});

//make this component available to the app
export default dashboard1;
