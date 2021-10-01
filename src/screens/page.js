import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo from "../components/logo";



function page({ navigation }) {
    return(
        <View style={{ flex: 1 , backgroundColor:'#ffffff' }}>
            <View>
                <View>
                    <Appbar.Header style={{ backgroundColor: '#034C81' }} >
                        <Appbar.Action color="white" icon="arrow-left" onPress={() => navigation.navigate('signup')} />
                        <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />

                    </Appbar.Header>
                </View>
                <Text style={styles.text1} >Register</Text>
                <TextInput placeholder="First Name" mode="outlined" style={styles.textinput1} />
                <TextInput placeholder="Last Name" mode="outlined" style={styles.textinput2} />
                <TextInput placeholder="Mobile Number" mode="outlined" style={styles.textinput3} />
                <TextInput placeholder="Date of Birth " mode="outlined" style={styles.textinput4} />
                <TextInput placeholder="Email Address" mode="outlined" style={styles.textinput5} />
                <TextInput placeholder="Password" mode="outlined" style={styles.textinput6} />
                <TextInput placeholder="Confirm Password" mode="outlined" style={styles.textinput7} />

                <View>
                    <TouchableOpacity style={styles.resetbtn}  >
                        <Text style={styles.resettext}>Register</Text>
                    </TouchableOpacity>
                </View>

                






            </View>
        </View>
    );
}

export default page;


const styles = StyleSheet.create({

    headerimage: {
        top: 0,
        left: 100,
        width: 80,
        height: 35
    },
    text1: {
        fontSize: 24,
        fontWeight: "700",
        top: 30,
        left: 40

    },

    resetbtn: {
        width: '80%',
        height: 52,
        top: 140,
        left: 40,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10

    },
    resetbtndis: {
        width: '78%',
        height: 53,
        top: 75,
        left: 38,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#DDDD",

    },
    resettext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        fontWeight: '700',
        top: 10,
        left: 108


    },
    textinput: {
        
    },
    textinput1:{
        width: '80%',
        height: 55,
        top: 55,
        left: 40,
        backgroundColor:'#FFFFFF'
    },
    textinput2:{
        width: '80%',
        height: 55,
        top: 65,
        left: 40,
        backgroundColor: '#FFFFFF'

    },
    textinput3:{
        width: '58%',
        height: 55,
        top: 75,
        left: 125,
        backgroundColor: '#FFFFFF'

    },
    textinput4:{
        width: '80%',
        height: 55,
        top: 85,
        left: 40,
        backgroundColor: '#FFFFFF'

    },
    textinput5: {
        width: '80%',
        height: 55,
        top: 95,
        left: 40,
        backgroundColor: '#FFFFFF'

    },
    textinput6: {
        width: '80%',
        height: 55,
        top: 105,
        left: 40,
        backgroundColor: '#FFFFFF'

    },
    textinput7: {
        width: '80%',
        height: 55,
        top: 115,
        left: 40,
        backgroundColor: '#FFFFFF'

    }
    
})

