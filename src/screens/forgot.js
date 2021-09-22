import React, { useState, useEffect } from 'react';
import { Image,SafeAreaView, View, ScrollView, StyleSheet, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import {   Button, Appbar, Modal, Text, Searchbar, StatusBar } from 'react-native-paper';
import AppButton from '../components/AppButton';




function forgot ({navigation}) {


    const ContentTitle = ({ title, style }) => (
        <Appbar.Content
            title={<Text style={style}> {title} </Text>}
            style={{ alignItems: 'center' }}
        />
    );
    
    return(
        <View>
            <View >
                <Appbar style={styles.appheader}/>
                <Text style={styles.text1}  >Trouble Logging In?</Text>
                <Text style={styles.text2}  >Enter your mobile number and we will send reset code to get back into your account.</Text>
                <AppButton style={styles.Button} title="Send Reset Code" onpress={()=> navigation.navigate('register')} />
            </View>
           <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />
        </View>
    )
}

export default forgot;

const styles = StyleSheet.create({
    appheader:{
        height:100,
        color:'#034C81'
              

    },
    Button:{
        backgroundColor: "#5382F6",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 110,
        width:'80%',
        top:270,
        left:70
        
        
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
        top:80,
        left:50

    },
    text2:{
        fontSize:16,
        fontWeight:'400',
        top:80,
        left:50

    }
})
