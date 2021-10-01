import React, {useState, useEffect} from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo from "../components/logo";

import { Formik } from 'formik';
import * as yup from 'yup';




function page({ navigation, route }) {

    const [fistname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [mobile, setmobile] = useState('');
    const [dob, setdob] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [cpass, setcpass]= useState('');

    const [isSubmitting, isSetSubmitting] = useState(false);
    const [Code, setCode] = useState('+1')

    useEffect(() => {
        if (route.params?.item) {
            setCode(route.params.item)
        }
    }, [route.params?.item])


    const loginValidationSchema = yup.object().shape({
        firstname: yup
            .string()
            // .max(10, 'Incorrect Mobile Number/Password.Try again')
            .min(10, 'Incorrect Mobile Number/Password.Try again')
            .required('Incorrect Mobile Number/Password.Try again'),
        lastname: yup
            .string()
            .required(),

        mobile: yup 
            .string()
            .required(),
            
        dob: yup 
            .string()
            .required(),
            
        email: yup 
              .string()
              .required(),
              
        pass: yup 
             .string()
             .required(),
             
        cpass: yup 
            .string()
            .required()
    })












    
    return(
        <View style={{ flex: 1 , backgroundColor:'#ffffff' }}>
            <Formik
                initialValues={{ firstname: '',lastname:'',mobile:'',dob:'',email:'',pass:'',cpass:'' }}
                validationSchema={loginValidationSchema}
                validateOnChange={isSubmitting}
                onSubmit={values => {
                    isSetSubmitting(true);
                }}

            >

                {({handleChange, handleBlur, handleSubmit, values, errors })=> (
               <>
                
            <View>
                <View>
                    <Appbar.Header style={{ backgroundColor: '#034C81' }} >
                        <Appbar.Action color="white" icon="arrow-left" onPress={() => navigation.navigate('signup')} />
                        <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />

                    </Appbar.Header>
                </View>
                <Text style={styles.text1} >Register</Text>
                <TextInput 
                   placeholderTextColor="#B3B6B7" 
                   placeholder="First Name" 
                   mode="outlined" 
                   style={styles.textinput1} 
                   onChangeText={handleChange('firstname')}
                   value={values.firstname}
                   error={errors.firstname}
                />
                <TextInput 
                   placeholderTextColor="#B3B6B7" 
                   placeholder="Last Name" 
                   mode="outlined" 
                   style={styles.textinput2} 
                   onChangeText={handleChange('lastname')}
                   value={values.lastname}
                   error={errors.lastname}
                />
                <View>
                    <TextInput 
                       placeholderTextColor="#B3B6B7"  
                       placeholder="Mobile Number" 
                       mode="outlined" 
                       style={styles.textinput3} 
                       onChangeText={handleChange('mobile')}
                       value={values.mobile}
                       error={errors.mobile}
                    />
                                <TouchableOpacity style={styles.code1} onPress={() => navigation.navigate('dailcode2')}    >
                        <View style={styles.code2} >
                            <Text style={styles.code3} >{Code}</Text>
                            <Text style={styles.code4} >ˇ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TextInput 
                   placeholderTextColor="#B3B6B7"  
                   placeholder="Date of Birth " 
                   mode="outlined" 
                   style={styles.textinput4} 
                   onChangeText={handleChange('dob')}
                   value={values.dob}
                   error={errors.dob}
                />
                <TextInput 
                   placeholderTextColor="#B3B6B7"   
                   placeholder="Email Address" 
                   mode="outlined" 
                   style={styles.textinput5} 
                   onChangeText={handleChange('email')}
                   value={values.email}
                   error={errors.email}
                />
                <TextInput 
                   placeholderTextColor="#B3B6B7"   
                   placeholder="Password" 
                   mode="outlined" 
                   style={styles.textinput6} 
                   onChangeText={handleChange('pass')}
                   value={values.pass}
                   error={errors.pass}
                />
                <TextInput 
                   placeholderTextColor="#B3B6B7"   
                   placeholder="Confirm Password" 
                   mode="outlined" 
                   style={styles.textinput7} 
                    onChangeText={handleChange('cpass')}
                    value={values.cpass}
                    error={errors.cpass}
                />

                            {errors.Number &&
                                <Text style={styles.incorrectText}>{errors.firstname}</Text>
                            }

                <View>
                    <TouchableOpacity style={styles.resetbtn} onPress={handleSubmit}  >
                        <Text style={styles.resettext}>Register</Text>
                    </TouchableOpacity>
                </View>

            </View>

                </>
            )}
        </Formik>
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
        top: 85,
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
        top: 35,
        left: 40,
        backgroundColor: '#FFFFFF'

    },
    textinput5: {
        width: '80%',
        height: 55,
        top: 45,
        left: 40,
        backgroundColor: '#FFFFFF'

    },
    textinput6: {
        width: '80%',
        height: 55,
        top: 55,
        left: 40,
        backgroundColor: '#FFFFFF'

    },
    textinput7: {
        width: '80%',
        height: 55,
        top: 65,
        left: 40,
        backgroundColor: '#FFFFFF'

    },
    code1:{
        borderWidth: 0.8,
        height: 56,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        width: 75,
        left: 43,
        top: 19,
    },
    code2:{
        flexDirection: 'row',

    },
    code3:{
        right: 5,
        top: 4,
        fontSize:16
    },
    code4:{
        fontSize: 24,
        right: -5,
        top: 6
    },
    incorrectText: {
        color: '#CC1414',
        bottom: 55,
        fontSize: 14,
        fontWeight: '500',
        right: 0,
    },
    
})

