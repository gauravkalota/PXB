import { set } from 'lodash';
import React, { useState, useEffect } from 'react';
import { Image,SafeAreaView, View, ScrollView, StyleSheet, FlatList, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import {   Button, Appbar, Modal, Text, Searchbar, StatusBar, TextInput } from 'react-native-paper';
import Input from '../components/Input';




function forgot ({navigation}) {

    const [Number, setNumber] = useState(' ');

    const [redenable, setRedEnable] = useState(false);
    const [Error1, setError1] = useState(false);
    const [Error2, setError2] = useState(false);


    const User = () => {
        if(Number < 10) {
            setError1(true)
            setRedEnable(true) 
            setError2(false) 
        }
        else {
            setError2(true)
            setRedEnable(true)
            setError1(false)
        }

        
    }


    
    return(
        <View style={{flex:1}}>
            <View>
                <View>
                    <Appbar.Header style={{ backgroundColor:'#034C81'}} >
                        <Appbar.Action color="white" icon="arrow-left" onPress={()=> navigation.navigate('register')} />
                        <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />

                    </Appbar.Header>
                </View>





                <View style={styles.appheader}></View>
                <Text style={styles.text1} >Trouble Logging In?</Text>
                <Text style={styles.text2} >Enter your mobile number and we will send</Text>
                <Text style={styles.text3} >reset to get back into your account.</Text>
                <TextInput 
                   style={styles.textinput} 
                   mode="outlined" 
                   placeholder="Mobile Number" 
                   label="Mobile Number"
                   keyboardType="numeric"
                   onChangeText={val => { setNumber(val) }}
                   error={redenable}

                />
                <View style={styles.inputViewnew1} >
                    <TouchableOpacity style={styles.combtn} >
                        <View style={styles.textv}  >
                            <Text style={styles.text6}>+1</Text>
                            <Text style={styles.text7}>ˇ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text4} >New to PX Boost?</Text>

                {Error1 ? (
                    <Text style={styles.error1} >Phone number invalid</Text>
                ) : null }
                 
                {Error2 ? (
                    <Text style={styles.error2}  >This account does not exist.Register {"\n"} to create account</Text>
                ) : null }


                 <TouchableOpacity style={styles.resetbtn} onPress={User} > 
                     <Text style={styles.resettext}>Send Reset code</Text>
                 </TouchableOpacity>
                 





                <TouchableOpacity style={styles.btntext5} >
                    <Text style={styles.text5} >Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default forgot;

const styles = StyleSheet.create({
    appheader:{
    
              

    },
    Button:{
        backgroundColor: "#5382F6",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 110,
        width:'70%',
        top:270,
        left:70,
        height:70
        
        
    },
    headerimage:{
        top:0,
        left:100,
        width:80,
        height:35
    },
    text1:{
        fontSize:24,
        fontWeight:"700",
        top:80,
        left:38

    },
    text2:{
        fontSize:16,
        fontWeight:'400',
        top:95,
        left:38

    },
    text3:{
        fontSize: 16,
        fontWeight: '400',
        top: 95,
        left: 38
    },
    text4:{
        top:505,
        left:105

    },
    text5:{
        color:'blue'

    },
    btntext5:{
        top:394,
        left:220

    },
    resetbtn:{
        width:'80%',
        height:60,
        top:150,
        left:34,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal:10
        
        

    },
    resettext:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
        fontWeight:'700',
        top:15,
        left:85

            
    },
    textinput:{
        width:'57%',
        height:50,
        top:150,
        left:120
    },
    inputViewnew1:{
        width:'18%',
        top:100,
        left:39,
    
        
    },
    combtn: {
        borderWidth: 0.8,
        height: 50,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    text6:{
        right:15,
        top:5

    },
    text7:{
        fontSize:24,
        right:-15,
        top:5

    },
    textv:{
        flexDirection:'row'

    },
    error1:{
       fontSize:14,
       fontWeight:'500',
       color:'#CC1414',
       top:85,
       left:120
    },
    error2:{
        fontSize: 14,
        fontWeight: '500',
        color: '#CC1414',
        top:85,
        left:120
    }
    
})
