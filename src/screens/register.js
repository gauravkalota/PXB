import React, { useState, useEffect } from 'react';
import { TouchableHighlight, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Logo from '../components/Logo';
import AppButton from '../components/AppButton';
// import { Icon } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons'
// import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Input from '../components/Input';
import { color } from 'react-native-elements/dist/helpers';
import { colors } from 'react-native-elements';
export default function register({navigation}) {
    const [Number, setNumber] = useState(' ');
    const [Password, setPassword] = useState(' ');
    const [hidePass, setHidePass] = useState(true);


    useEffect(() => {
        //  if(SplashScreen){
        //    SplashScreen.hide();
        //  } 
        SplashScreen && SplashScreen.hide()
        ///////this will run only first time when app started
    }, [])


    const onButtonPressed = () => {
        // if(Number===''|| Password===''){
        //     setbutton(true)
        // }
        // else
        // setbutton(false)

        //////body//////
    }
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.inputViewnew1} >
                {/* <Button color="black" mode="outlined" style={styles.combtn} >
                    <Text style={styles.combtn1}>+1</Text>
                    <Text style={styles.combtn2}>↓</Text>
                </Button> */}
                <TouchableOpacity onPress={()=>navigation.navigate('country')} color="black" mode="outlined" style={styles.combtn}   >
                  <View>
                        <Text style={styles.combtn1} >+1</Text>
                        <Text style={styles.combtn2} >ˇ</Text>
                  </View>
                </TouchableOpacity>
                
            </View>
            <View style={styles.inputViewnew}>
                <Input
                    style={styles.inpuText}
                    mode="outlined"
                    label="Mobile Number"
                    placeholderTextColor="#848484"
                    keyboardType="numeric"
                    // outlineColor="#CC1414"
                    onChangeText={val => { setNumber(val) }}
                />
            </View>
            <View style={styles.inputView}>
                <Input 
                    style={styles.inpuText}
                    secureTextEntry={hidePass ? true : false}
                    mode="outlined"
                    label="Password"  
                    keyboardType="default"
                    // outlineColor="#CC1414"
                    right={<TextInput.Icon style={{top:5}}  name={() => <Icon
                        name={hidePass ? 'eye-off' : 'eye'}
                        size={19}
                        
                        color="#8e9493"
                        onPress={() => setHidePass(!hidePass)}
                    />  }  onPress={() => setHidePass(!hidePass)} /> }
                    placeholderTextColor="#848484"
                    onChangeText={val => { setPassword(val) }}
                />
                {/* <Icon
                    name={hidePass ? 'eye-off' : 'eye'}
                    size={15}
                    color="gray"
                    onPress={() => setHidePass(!hidePass)}
                /> */}
            </View>
            <Text style={styles.incorrectText}>Incorrect Mobile Number/Password.Try again</Text>
            <View style={styles.forgotPassword}>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot password?</Text>
                </TouchableOpacity>
            </View> 
            <AppButton title="Log In"/>
            <View style={styles.orlineR}>

            </View>
            <View style={styles.orlineL}>

            </View>
            <View style={styles.orlogin}>
                <Text style={styles.orlogintext} >OR log in with</Text>
            </View >

            <View style={styles.loginWithBar}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon
                        name='facebook'
                        type='font-awesome'
                        size={50}
                        color='#1877F2'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Image source={require('../assets/images/googleLogo.png')} style={styles.combtn3}/>
                    {/* <Ionicons
                        name='logo-google'
                        type='font-awesome'
                        size={50}
                        color='inherited' ////why no colour? 
                        
                    /> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon
                        name='apple'
                        type='font-awesome'
                        size={50}
                        color='black' />
                </TouchableOpacity>
            </View>
            <Text style={styles.fb} >Facebook</Text>
            <Text style={styles.go} >Google</Text>
            <Text style={styles.ap} >Apple</Text>
            <View style={styles.line}>
                <View>
                </View>
                <Text style={styles.lastline1}>New to PX Boost?</Text>
                <TouchableOpacity>
                    <Text style={styles.lastline2}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagecontainer: {
        width: 180,
        height: 120,
        marginBottom: 490
    },
    inputView: {

        width: "85%",
        height: 45,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        top: -50
    },
    inputViewnew: {

        width: "65%",

        height: 45,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        top: -50,
        left: 40
    },
    inputViewnew1: {
        right: 111,
        width: '16%',
        backgroundColor:'#F9F9F9',
        top:1,
        


    },
    combtn: {
        borderWidth: 0.8,
        height: 50,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:2
    },
    inpuText: {
        height: 50,
        color: "white"

    },
    
    forgotPassword: {
        left: 60,
        bottom: 60
    },
    forgot: {
        color: '#5382F6',
        left: 28,
        fontWeight: "600",
        top: 26
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        right: -90,
        bottom: -40
    },
    button: {
        width: '70%',
        marginVertical: 10,
        paddingVertical: 2,
        bottom: 10,
        color: '#D8D8D8'
    },
    orlogin: {
        top: 70,
    },
    orlogintext: {
        fontSize: 13,

    },
    loginWithBar: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    iconButton: {
        backgroundColor: 'white',
        padding: 15,
        marginHorizontal: 15,
        borderRadius: 100,
        top: 60,
        left:4
    },
    iconline: {
        top: 90,
        fontSize: 9,

    },
    lastline1: {
        top: 80,
        left: 59,
        fontSize: 12
    },
    lastline2: {
        left: 163,
        top: 65,
        fontSize: 12,
        fontWeight: '600',
        color: '#5382F6'
    },
    incorrectText: {
        color: '#CC1414',
        bottom: 55,
        fontSize: 12,
        right: 20
    },
    fb: {
        right: 110,
        top: 53
    },
    go: {
        top: 36,
        left:6
    },
    ap: {
        left: 123,
        top: 18
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
        width: '80%',
        top: 25
    },
    orlineR: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.3,
        width: '23%',
        left: 110,
        top: 80
    },
    orlineL: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.3,
        width: '23%',
        right: 110,
        top: 80
    },
    combtn1:{
        right:14,
        top:16

    },
    combtn2:{
        left:20,
        bottom:1,
        fontSize:27

    },
    combtn3:{
        resizeMode:'contain',
        height:42,
        top:8

    },
    appButtonContainer: {
        top: 15,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 13,
        paddingHorizontal: 123
    },
    disable:{
        top: 15,
        backgroundColor: "#E6E6E6",
        borderRadius: 4,
        paddingVertical: 13,
        paddingHorizontal: 123
    }
    

})