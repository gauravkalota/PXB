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
                <Text style={styles.text1} >Register</Text>
                <TextInput placeholder="First Name" mode="outlined" style={styles.textinput} />
                <TextInput placeholder="Last Name" mode="outlined" style={styles.textinput} />
                <TextInput placeholder="Mobile Number" mode="outlined" style={styles.textinput} />
                <TextInput placeholder="First Name" mode="outlined" style={styles.textinput} />
                <TextInput placeholder="Date of Birth " mode="outlined" style={styles.textinput} />
                <TextInput placeholder="Email Address" mode="outlined" style={styles.textinput} />
                <TextInput placeholder="Password" mode="outlined" style={styles.textinput} />
                <TextInput placeholder="Confirm Password" mode="outlined" style={styles.textinput} />

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
        top: 45,
        left: 38

    },

    resetbtn: {
        width: '77%',
        height: 53,
        top: 120,
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
        width: '77%',
        height: 55,
        top: 80,
        left: 40
    },
    
})

