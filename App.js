import React, {useState, useEffect} from 'react';
import {  TouchableHighlight,Image ,TouchableOpacity,StyleSheet, Text, View } from 'react-native';
import { Button, TextInput  } from 'react-native-paper';
import { create } from 'react-test-renderer';
import Logo from './src/components/logo';
import custombutn from './src/components/custombutn';
import Panel from './src/components/Panel';
import { Icon } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';

// import Icon from 'react-native-vector-icons'
export default function App() {
  const [Number, setNumber] = useState(' ');
  const [Password, setPassword] = useState(' ');

  useEffect(()=>{
    SplashScreen.hide();   ///////this will run only first time when app started
  },[])
  

  const onButtonPressed = () => {
    //////body//////
  }
  return(
    <View style={styles.container}>
      <Logo/>
      <View style={styles.inputView}>
        <TextInput
          style = {styles.inpuText}
          placeholder = "Mobile Number"
          placeholderTextColor="#848484"
          keyboardType="numeric"
          onChangeText ={val=> {setNumber(val)}}
        />
      </View>
      <View style={styles.inputView}>
       <TextInput
       style = {styles.inpuText}
       secureTextEntry={true} 
       label="Password"
       keyboardType="default"
       right = {<TextInput.Icon name = "eye"/>}
       placeholderTextColor="#848484"
       onChangeText={val=> {setPassword(val)}}
       />
      </View>
      {/* <Text style={styles.incorrectText}>Incorrect Mobile Number/Password. Try again</Text> /////////ConditionalView */}
      <View style={styles.forgotPassword}>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button color="#D8D8D8" style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
        Log In
      </Button>
      {/* <TouchableOpacity style= {styles.button}>
          <Text style={styles.text}>Log In</Text>
      </TouchableOpacity> */}
      <View style= {styles.orlogin}>
        <Text style={styles.orlogintext} >––––––––––––––––OR log in with–––––––––––––––––––</Text>
      </View >
      <View style={styles.loginWithBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name='google' type='font-awesome' size={30} color='#808e9b' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon
            name='facebook-square'
            type='font-awesome'
            size={30}
            color='#808e9b'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name='apple' type='font-awesome' size={30} color='#808e9b' />
        </TouchableOpacity>
      </View>
      <Text style={styles.iconline}>–––––––––––––––––––––––––––––––––––––––––––––––––––</Text>
    <View>
      <Text style={styles.lastline1}>New to PX Boost?</Text>
      <Text style={styles.lastline2}>Register</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagecontainer: {
   width:180,
   height:120,
   marginBottom:490
  },
  inputView: {
    
    width: "80%",
    height: 35,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    top:-80

  },
  inpuText: {
    height: 50,
    color: "white",
   

  },
  forgotPassword: {
    left:60,
    bottom:60
  },
  forgot:{
    color:'blue'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    right:-90,
    bottom:-40
  },
  button: {
    width: '70%',
    marginVertical: 10,
    paddingVertical: 2,
    bottom:10,
    color:'#D8D8D8'
  },
  orlogin:{
    top:-50,
  },
  orlogintext:{
    fontSize:10,
    top:100
  },
  loginWithBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    marginTop: 20,
  },
  iconButton: {
    backgroundColor: '#333',
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
    top:70
  },
  iconline: {
    top:90,
    fontSize:9,
    
  },
  lastline1:{
    top:130,
    right:50,
    fontSize:12
  },
  lastline2: {
    left:59,
    top:114,
    fontSize:15,
    color:'blue'
  },
  incorrectText: {
    color:'darkred',
    bottom:67,
    fontSize:11,
    right:16
  }

 
})