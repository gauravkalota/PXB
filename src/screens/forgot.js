import React, { useState, useEffect } from 'react';
import { Image,SafeAreaView, View, ScrollView, StyleSheet, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import {   Button, Appbar, Modal, Text, Searchbar, StatusBar } from 'react-native-paper';
import AppButton from '../components/AppButton';
import Input from '../components/Input';




function forgot ({navigation}) {


    const ContentTitle = ({ title, style }) => (
        <Appbar.Content
            title={<Text style={style}> {title} </Text>}
            style={{ alignItems: 'center' }}
        />
    );
    
    return(
        <View>
            <View  >
                <View style={styles.appheader}></View>
                <Text style={styles.text1} >Trouble Logging In?</Text>
                <Text style={styles.text2} >Enter your mobile number and we will send</Text>
                <Text style={styles.text3} >reset to get back into your account.</Text>
                <Text style={styles.text4} >New to PX Boost?</Text>
                <TouchableOpacity style={styles.btntext5} >
                    <Text style={styles.text5} >Register</Text>
                </TouchableOpacity>
                <AppButton style={styles.Button} title="Send Reset Code" onpress={()=> navigation.navigate('register')} />
            </View>
           <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />
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
        top:143,
        left:160,
        width:60,
        height:35
    },
    text1:{
        fontSize:24,
        fontWeight:"700",
        top:150,
        left:50

    },
    text2:{
        fontSize:16,
        fontWeight:'400',
        top:180,
        left:50

    },
    text3:{
        fontSize: 16,
        fontWeight: '400',
        top: 180,
        left: 50
    },
    text4:{
        top:700,
        left:200

    },
    text5:{
        color:'blue'

    },
    btntext5:{
        top:700,
        left:170

    },
    
})
