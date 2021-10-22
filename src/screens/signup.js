import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from "../components/CustomButton";

import Logo from "../components/logo";

 function signup({navigation}) {
     return(
         <View style={styles.container}>
             <View style={styles.imageview}>
                <Logo/>
             </View>
             
             <TouchableOpacity style={styles.resetbtn} onPress={() => navigation.navigate('page')} >
                 <Text style={styles.resettext}>Register with Mobile Number</Text>
             </TouchableOpacity>
             {/* <CustomButton 
                 onPress={() => navigation.navigate('page')}
                 text="Register with Mobile Number"
            
             /> */}


             <View style={styles.orline} >
                 <Text >OR Register with</Text>
             </View >
             <View style={styles.orlineR}>

             </View>
             <View style={styles.orlineL}>

             </View>
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
                     <Image source={require('../../assets/images/googleLogo.png')} style={styles.combtn3} />
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
                 <View>
                        <Text style={styles.text1}>By Continuing, you agree to the</Text>
                        <TouchableOpacity style={styles.textone} >
                        <Text style={styles.text2} >Terms & Conditions</Text>
                        </TouchableOpacity>
                        <Text style={styles.text3}  >and</Text>
                     <TouchableOpacity style={styles.texttwo} >
                         <Text style={styles.text4} >Privacy Policy</Text>
                     </TouchableOpacity>
                     
                 </View>
                 <View style={styles.baseline} >
                     <Text>Already PX Boost?</Text>
                     <TouchableOpacity style={styles.btntext5} onPress={() => navigation.navigate('login')} >
                         <Text style={styles.text5} >Log In</Text>
                     </TouchableOpacity>
                 </View>
             </View>   
         </View>
     );

 }

 export default signup;


const styles = StyleSheet.create({

    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff'
    },
    loginWithBar: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
        top:-80
    },
    iconButton: {
        backgroundColor: 'white',
        padding: 15,
        marginHorizontal: 15,
        borderRadius: 100,
        top: 60,
        left: 4
    },
    combtn3: {
        resizeMode: 'contain',
        height: 42,
        top: 8

    },
    fb: {
        right: 115,
        top: -23,
    },
    go: {
        top: -40,
        left: 3
    },
    ap: {
        left: 120,
        top: -56,
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
        width: '80%',
        top: -130
    },
    baseline: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 304

    },
    btntext5: {
        position: 'relative',
        right:-5,
        top:-1
    },
    text5: {
        color: '#5382F6',
        fontSize: 14,
        fontWeight: '600'
    },
    orlineR: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.3,
        width: '23%',
        left: 110,
        top: -18
    },
    orlineL: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.3,
        width: '23%',
        right: 110,
        top: -18
    },
    orline:{
        top:-10
    },
    appButtonContainer: {
        top: 15,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 13,
        paddingHorizontal: 123,
        width:'75%',
        height:53,
    },
    resetbtn: {
        width: '77%',
        height: 53,
        top: -50,
        left: -1,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10

    },
    resettext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
        fontWeight: '700',
        top: 15,
        left: 55
    },
    text1:{
        top:100,
        left:-13,
        fontSize:14

    },
    text2:{
        top:83,
        left:195,
        color:'#5382F6',
        fontSize: 14


    },
    text3:{
        top:87,
        right:-100,
        fontSize: 14


    },
    text4:{
        top:70,
        left:130,
        color:'#5382F6',
        fontSize: 14




    },
    textone:{

    },
    texttwo:{

    },
    imageview:{
        top:-35

    }
    
})