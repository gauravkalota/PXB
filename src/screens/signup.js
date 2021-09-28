import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo from "../components/logo";

 function signup({navigation}) {
     return(
         <View style={styles.container}>
           <Logo/>
             <TouchableOpacity style={styles.resetbtn} onPress={() => navigation.navigate('page')} >
                 <Text style={styles.resettext}>Register with Mobile Number</Text>
             </TouchableOpacity>

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
                     <TouchableOpacity style={styles.btntext5} onPress={() => navigation.navigate('register')} >
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
        right: 110,
        top: 53
    },
    go: {
        top: 36,
        left: 6
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
    baseline: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 85

    },
    btntext5: {
        position: 'relative'
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
        top: 70
    },
    orlineL: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.3,
        width: '23%',
        right: 110,
        top: 70
    },
    orline:{
        top:80
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
        top: 10,
        left: 5,
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
        top:100

    },
    text2:{
        top:83,
        left:205,
        color:'#5382F6'

    },
    text3:{
        top:80

    },
    text4:{
        top:65,
        left:29,
        color:'#5382F6'


    },
    textone:{

    },
    texttwo:{

    }
    
})