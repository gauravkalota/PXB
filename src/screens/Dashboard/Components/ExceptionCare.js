//import liraries
import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MainButton from './MainButton';
// create a component
const ExceptionCare = ({card_text1,card_text2,card_text3,card_text4,card_text5}) => {
  const[more, setMore] =useState(true);
    return (
        <View style={styles.container} >
          <Text style={styles.maintext} onPress={()=>setMore(true)} >My Exceptional Care</Text>
          <TouchableOpacity style={styles.editbtn} onPress={() => console.log('Pressed')}  >
            <Text style={styles.edittext} >Edit</Text>
          </TouchableOpacity>
          <View style={styles.cardview1} >
            <Text style={styles.cardtext}  >{card_text1}</Text>
          </View>
          <View style={styles.cardview2} >
            <Text style={styles.cardtext}  >{card_text2}</Text>
          </View>
          <View style={styles.cardview2} >
            <Text style={styles.cardtext} >{card_text3}</Text>
          </View>
          { more ? null : (
            <>
            <View style={styles.cardview2}>
              <Text style={styles.cardtext} >{card_text4}</Text>
            </View>
            <View style={styles.cardview2}>
              <Text style={styles.cardtext} >{card_text5}</Text>
            </View>
            </>
          ) }
          <View>
            <MainButton text="Show more" onPress={()=> setMore(false)}/>
          </View>
        </View>
    );
};

export default ExceptionCare;

const styles = StyleSheet.create({ 
  container :{
    width:364,
    height:365,
    left:13,
    borderRadius:4,
    backgroundColor:'rgba(83,130,246,0.08)'
  },
  maintext:{
    fontSize:18,
    fontWeight:'700', 
    marginHorizontal:15, 
    marginTop:23, 
    fontFamily:'Lato'
  },
  editbtn:{
    left:271,
    top:-25, 
    width:80,
    height:30,
    backgroundColor:'#ffff',
    borderRadius:4,
    borderColor:'#5382F6',
    borderWidth:1
  },
  edittext:{
    fontSize:14,
    fontWeight:'700',
    alignSelf:'center',
    alignContent:'center',
    top:5,color:'#5382F6', 
    fontFamily:'Lato'
  },
  cardview1:{
    borderRadius:4, 
    width:335,
    height:64,
    left:15, 
    backgroundColor:'#FFFFFF'
  },
  cardview2:{
    borderRadius:4, 
    marginTop:10, 
    width:335,
    height:64,
    left:15, 
    backgroundColor:'#FFFFFF'
  },
  cardtext:{
    textAlign:'center',
    top:20,
    fontSize:16,
    fontWeight:'400', 
    color:'grey', 
    fontFamily:'Lato'
  },
 
  



})