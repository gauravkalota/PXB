import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo from "../components/logo";



function page({ navigation }) {
    return(
        <View style={{ flex: 1 }}>
            <View>
                <View>
                    <Appbar.Header style={{ backgroundColor: '#034C81' }} >
                        <Appbar.Action color="white" icon="arrow-left" onPress={() => navigation.navigate('signup')} />
                        <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />

                    </Appbar.Header>
                </View>

                {/* <View style={styles.appheader}></View> */}
                <Text style={styles.text1} >Register</Text>
                <Text style={styles.text2} >Enter your mobile number and we will send</Text>
                <Text style={styles.text3} >reset to get back into your account.</Text>
             

             

                <View>
                    <TouchableOpacity style={styles.resetbtn}  >
                        <Text style={styles.resettext}>Send Reset code</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.baseline} >
                    <Text>New to PX Boost?</Text>
                    <TouchableOpacity style={styles.btntext5} >
                        <Text style={styles.text5} >Register</Text>
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

    Button: {
        backgroundColor: "#5382F6",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 110,
        width: '70%',
        top: 270,
        left: 70,
        height: 70


    },
    headerimage: {
        top: 0,
        left: 100,
        width: 80,
        height: 35
    },
    text1: {
        fontSize: 24,
        fontWeight: "700",
        top: 45,
        left: 38

    },
    text2: {
        fontSize: 16,
        fontWeight: '400',
        top: 53,
        left: 38

    },
    text3: {
        fontSize: 16,
        fontWeight: '400',
        top: 55,
        left: 38
    },

    resetbtn: {
        width: '77%',
        height: 53,
        top: 160,
        left: 41,
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
        left: 85


    },
    textinput: {
        width: '57%',
        height: 50,
        top: 80,
        left: 120
    },
    inputViewnew1: {
        width: '18%',
        top: 50,
        left: 39,


    },
    combtn: {
        borderWidth: 0.8,
        height: 50,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        width: 70,
        left: 43,
        top: 30
    },
    text6: {
        right: 10,
        top: 5

    },
    text7: {
        fontSize: 24,
        right: -10,
        top: 5

    },
    textv: {
        flexDirection: 'row'

    },
    error1: {
        fontSize: 14,
        fontWeight: '500',
        color: '#CC1414',
        top: 34,
        left: 120
    },
    error2: {
        fontSize: 14,
        fontWeight: '500',
        color: '#CC1414',
        top: 34,
        left: 120
    },
    baseline: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 435

    },
    btntext5: {
        position: 'relative'
    },
    text5: {
        color: '#5382F6',
        fontSize: 14,
        fontWeight: '600'
    }
})

