import React, { useState, useEffect } from 'react';
import { Image,View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import {  Appbar, Text,  TextInput } from 'react-native-paper';


import { ErrorMessage, Formik } from 'formik'
import * as yup from 'yup'
import CustomButton from '../components/CustomButton';
import { values } from 'lodash';

function forgot ({navigation, route}) {

    const [Number, setNumber] = useState(' ');

    const [redenable, setRedEnable] = useState(false);
    const [Error1, setError1] = useState(false);
    const [Error2, setError2] = useState(false);
    const [btnstatus, Setbtnstatus] = useState(false);
    const [Code, setCode] = useState('+1');


useEffect (()=> {
        if(route.params?.item) {
           setCode(route.params.item)
        }
    },[route.params?.item])


   

 
///////Validtion_schema_YUP///////////

    const loginValidationSchema = yup.object().shape({
        Number: yup
            .string()
            .min(10, ({ min }) => `Number must be  ${min} digits`)

            // .required('This account does not exist.Register to create account'),
        
    })

   
       
    return(
    <View style={{flex:1}}>
        <Formik
           validationSchema={loginValidationSchema}
           initialValues={{Number:''}}
           validateOnChange={false}
           validateOnBlur={false}
           onSubmit={(values) => {
            //    handleSubmit(values);

               navigation.navigate({
                   name: "resetpassword",
                   params: { item: values.Number },
               })
            
           }}
        >
            
        {({ handleChange, handleSubmit, values, errors, isValid, touched }) => (
            <>
            

            <View>
                <View>
                    <Appbar.Header style={{ backgroundColor:'#034C81'}} >
                        <Appbar.Action color="white" icon="arrow-left" onPress={()=> navigation.navigate('login')} />
                        <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />

                    </Appbar.Header>
                </View>

                {/* <View style={styles.appheader}></View> */}
                <Text style={styles.text1} >Trouble Logging In?</Text>
                <Text style={styles.text2} >Enter your mobile number and we will send</Text>
                <Text style={styles.text3} >reset to get back into your account.</Text>
                <View>
                <TextInput
                   style={styles.textinput} 
                   mode="outlined" 
                   placeholder="Mobile Number" 
                   label="Mobile Number"
                   keyboardType="numeric"
                //    onChangeText={val => textInputChange(val) }
                //    error={errors}
                   onChangeText={handleChange('Number')}
                   value={values.Number}
                   error={touched.Number && errors.Number}
                />
                    <TouchableOpacity style={styles.combtn} onPress = {()=> navigation.navigate('dailcode')} >
                        <View style={styles.textv}  >
                            <Text style={styles.text6}>{ Code }</Text>
                            <Text style={styles.text7}>ˇ</Text>
                        </View>
                    </TouchableOpacity>
                </View>

              

                { errors.Number && 
                   <Text style={styles.error1} >{errors.Number}</Text>
                }


                <View>
                 <TouchableOpacity disabled={!isValid}   style={ !values.Number ? styles.resetbtndis  : styles.resetbtn} onPress={handleSubmit} > 
                     <Text style={styles.resettext}>Send Reset code</Text>
                 </TouchableOpacity>
                </View>

                {/* <CustomButton
                  onPress={handleSubmit}
                  disabled={isValid}
                  text="Send Reset Code"
                /> */}

                <View style={styles.baseline} >
                    <Text>New to PX Boost?</Text>
                    <TouchableOpacity style={styles.btntext5} onPress={()=> navigation.navigate('resetpassword')} >
                        <Text style={styles.text5} >Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
        )}
    </Formik>

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
        top:45,
        left:38

    },
    text2:{
        fontSize:16,
        fontWeight:'400',
        top:53,
        left:38

    },
    text3:{
        fontSize: 16,
        fontWeight: '400',
        top: 55,
        left: 38
    },
    
    resetbtn:{
        width:'77%',
        height:53,
        top:50,
        left:41,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal:10
        
    },
    resetbtndis:{
        width: '77%',
        height: 53,
        top: 60,
        left: 41,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#DDDD",

    },
    resettext:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
        fontWeight:'700',
        top:10,
        left:85

            
    },
    textinput:{
        width:'57%',
        height:50,
        top:80,
        left:120
    },
    inputViewnew1:{
        width:'18%',
        top:50,
        left:39,
    
        
    },
    combtn: {
        borderWidth: 0.8,
        height: 50,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        width:70,
        left:43,
        top:30
    },
    text6:{
        right:10,
        top:5

    },
    text7:{
        fontSize:24,
        right:-10,
        top:5

    },
    textv:{
        flexDirection:'row'

    },
    error1:{
       fontSize:14,
       fontWeight:'500',
       color:'#CC1414',
       top:34,
       left:120
    },
    error2:{
        fontSize: 14,
        fontWeight: '500',
        color: '#CC1414',
        top:34,
        left:120
    },
    baseline:{
        flexDirection:'row',
        justifyContent:'center',
        top:435
        
    },
    btntext5:{
        position:'relative'
    },
    text5:{
        color:'#5382F6',
        fontSize:14,
        fontWeight:'600'
    }

    
})
