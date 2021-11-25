//import liraries
import React,{useState} from 'react';
import { View, Text, StyleSheet , Button, Alert, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
// import {useDispatch} from 'react-redux';
// import { setSmurfName } from '../redux/actions';

import {useSelector} from 'react-redux';



// create a component
const dashboard1 = ({navigation, route}) => {
// const Number = useSelector((state)=> state.Number)
const [enter, setEnter] = useState('')
//const dispatch = useDispatch();

  const Id1 = useSelector((state)=>state.smurfName)
  const Id2 = useSelector((state)=>state.pass)
  const loginPress = () => {
//dispatch(fetchSmurfData());
    dispatch(setSmurfName(enter))
    navigation.navigate('dashboard2');
    }

    return (
        // <View style={styles.container}>
        //     <Text style={styles.redux} >REDUX SAGA</Text>
        //     <Text onPress={()=>Alert.alert("Welcome To Dashboard")} style={styles.text}>Dashboard1</Text>
        //     <Button
        //      title="Go Forward"
        //      onPress={loginPress}
                
        //     />
        //     <Text style={styles.textlogin} >User Mobile Number -</Text>
        //     <Text style={styles.pass} >User PassCode No -</Text>
        //     <Text style={styles.smurf}  >{Id1}</Text>
        //     <Text style={styles.smurf2}  >{Id2}</Text>
        //     <TextInput 
        //        style={{height:55, width:'80%'}} 
        //        mode="outlined" 
        //        label="ENTER USERNAME"
        //        onChangeText={(val)=> setEnter(val)} 
        //     />
        //     <Button 
        //       title="Go Back"
        //       onPress={()=> navigation.navigate('login')}
        //     />
        // </View>

    <SafeAreaView>
        <View style={{backgroundColor :'#ffff'}} >
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri:'' }}/>
                <Text style={styles.name}>
                  Felix Harder
                </Text>
                <Text >Currently not in a hospital</Text>
            </View>
          </View>

         
         

          <View >
            <View style={styles.bodyContent}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Select Hospital</Text>  
              </TouchableOpacity> 
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
            </View>
        </View>
      </View>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     //backgroundColor: '#2c3e50',
    // },
    // text:{
    //     top:-25,
    //     fontSize:30,
    //     fontWeight:'700'
    // },
    // text1:{
    //     top:90,
    //     right:50,
    //     fontSize:16,
    // },
    // text2:{
    //     top:90,
    //     right:108,
    //     fontSize:16,
    // },
    // textlogin:{
    //     fontSize:18,
    //     top:-10,
    //     left:-65,

    // },
    // pass:{
    //     fontSize:18,
    //     top:-10,
    //     left: -74

    // },
    // smurf:{
    //     fontSize:15,
    //     top:-51,
    //     left:85

    // },
    // smurf1:{
    //     fontSize:15,
    //     top:-48,
    //     left:85
    // },
    // smurf2:{
    //     fontSize:20,
    //     top:-70,
    //     left:65,

    // },
    // redux:{
    //     bottom:200,
    //     fontSize:50,
    //     fontWeight:'900',
    //     color:'#86d46b'
    // }
    header:{
    backgroundColor: "#fff",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 0.4,
    //borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"black",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:-30
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#5382F6",
  },
  description:{
    fontSize:20,
    color: "#00CED1",
    marginTop:10,
    textAlign: 'center'
  },



});

//make this component available to the app
export default dashboard1;
