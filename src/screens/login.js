import React, { useState, useEffect } from 'react';
import {  Image, TouchableOpacity, StyleSheet, Text,ScrollView, View, Alert , Keyboard, TouchableWithoutFeedback} from 'react-native';
import { TextInput, Button, DefaultTheme, Colors } from 'react-native-paper';
import Logo from '../components/logo';
import AppButton from '../components/AppButton';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Input from '../components/Input';

import { useFormik, setFieldValue } from 'formik'
import * as yup from 'yup'



const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

export default function login({navigation, route}) {
    const [Number, setNumber] = useState(' ');
    const [Password, setPassword] = useState(' ');
    const [hidePass, setHidePass] = useState(true);

    const [disable, setDisable] = useState(true);
    const [redenable, setRedEnable]= useState(false)

    const [isValidUser, setisValidUser] = useState(true);

    const [Code, setCode] = useState('+1')
    const [countrycode, setCountryCode] = useState('US')  


    const [isSubmitting, isSetSubmitting] = useState(false);


    useEffect(() => {
        
         if(SplashScreen){
           SplashScreen.hide();
         } 
        // SplashScreen && SplashScreen.hide()
        ///////this will run only first time when app started

        (Number && Password) ? setDisable(false) : setDisable(true);
    }, [Number,Password])
   

    useEffect (()=> {
        if(route.params?.item1) {
           setCode(route.params.item1)
        }
    },[route.params?.item1])

        useEffect(() => {
        if (route.params?.item2) {
            setCountryCode(route.params.item2)
        }
    }, [route.params?.item2])


    // console.log('hello', countrycode)
   


////////////////LOGIN_YUP_VALIDATION_SCHEMA//////////////////
    const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/


    const loginValidationSchema = yup.object().shape({
        Number: yup
            .string()
            // .max(10, 'Incorrect Mobile Number/Password.Try again')
            .min(10, 'Incorrect Mobile Number/Password.Try again')
            .required('Incorrect Mobile Number/Password.Try again')
            .matches(phoneRegExp, 'Incorrect Mobile Number/Password.Try again'),

        Password: yup
            .string()
            .required(null)
    })


///////////////USE_FORMIK////////////
   const Formik = useFormik({
                initialValues:{Number:'', Password:''},
                validationSchema:loginValidationSchema,
                validateOnChange:isSubmitting,
                // enableReinitialize={true}
                onSubmit: values => {
                    isSetSubmitting(true);
                    Alert.alert('Logged In')
                }

}) 


////////////FORMAT_NUMBER////////////

//  const formatPhoneNumber = (phoneNumberString) => {
//      let newText = '';
//      let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
//      for(var i =0; i< cleaned.length; i++) {
//          if(i == 0) {
//              newText = '(';
//          } else if (i==3) {
//              newText =  newText + ')-';
//          } 
//         else if ( i == 6 ) {
//              newText = newText + '-' ;
//          }
//         newText = newText + cleaned[i];
//      }
//      setNumber(newText);

//  };

//////////////Mobile_Number_Format////////

 useEffect(()=> {
    formatPhoneNumber(NumberWithouFormat)
 },[countrycode])

//  console.log('NEW',mobile.replace(/[^0-9]/g,''))

 NumberWithouFormat = Number.replace(/[^0-9]/g,'')

//  console.log('bYE', NumberWithouFormat)



    const formatPhoneNumber = (val, setFieldValue ) => {
          try { 
            if (val.length !== 10 ) {
                setNumber(val)
                                Formik.setFieldValue('Number', val)

                // console.log('WIERD', formik.setFieldValue())
            
            }   else {
                const number = phoneUtil.parse(val , countrycode);
                console.log(phoneUtil.formatInOriginalFormat(number, countrycode));
                const FormattedNumber = phoneUtil.formatInOriginalFormat(number, countrycode);
                setNumber(FormattedNumber)
                                Formik.setFieldValue('Number', FormattedNumber)

                console.log('he', FormattedNumber)
                console.log('be', Number)
                
            }    
        } catch (error) {
            
                 
        }   
    }


    




    return (
// {/* <ScrollView scrollEnabled={false}  > */}
 <ScrollView contentContainerStyle={{flexGrow:1}} >
    <View style={styles.container}>
            {/* <Formik
                initialValues={{ Number: '', Password: '' }}
                validationSchema={loginValidationSchema}
                validateOnChange={isSubmitting}

                // validateOnChange={false}
                // validateOnBlur={true}
                onSubmit={values => { 
                    isSetSubmitting(true);
                    //////do somethingg
                }}
                validationSchema={loginValidationSchema}

            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <> */}
            <Logo  />
            <View style={styles.inputViewnew1} >
                <TouchableOpacity onPress={() => navigation.navigate('country')} color="black" mode="outlined" style={styles.combtn}>  
                  <View>
                        <Text style={styles.combtn1} >{ Code }</Text>
                        <Text style={styles.combtn2} >ˇ</Text>
                  </View>
                </TouchableOpacity> 
            </View>


            <View style={styles.inputViewnew}>   
                <TextInput
                    style={styles.inpuText}
                    mode="outlined"
                    label="Mobile Number"
                    placeholderTextColor="#848484"
                    keyboardType="numeric"
                    // outlineColor="#CC1414"
                    // onChangeText={Formik.handleChange('Number')}
                    onChangeText={(val) => formatPhoneNumber(val, setFieldValue)}

                    // onChangeText={(phoneNumberString)=>formatPhoneNumber(phoneNumberString)}
                    // onBlur = {handleBlur('Number')}
                    value={Number}
                    // value={Formik.values.Number}
                    error={Formik.errors.Number} 
                />
            </View>

            <View style={styles.inputView}>
                <TextInput 
                    style={styles.inpuText}
                    secureTextEntry={hidePass ? true : false}
                    mode="outlined"
                    label="Password"  
                    keyboardType="default"
                    // outlineColor="#CC1414"
                    right={<TextInput.Icon style={{top:5}}  name={() => <Icon
                        name={hidePass ? 'eye-off' : 'eye'}
                        size={19}
                        
                        color="#8e9493"
                        onPress={() => setHidePass(!hidePass)}
                    />  }  onPress={() => setHidePass(!hidePass)} /> }
                    placeholderTextColor="#848484"
                    onChangeText={Formik.handleChange('Password')}
                    // onBlur={handleBlur('Password')}
                    value={Formik.values.Password}
                    error={  Formik.errors.Password || Formik.errors.Number}

                    // error={redenable}
                />
                {/* <Icon
                    name={hidePass ? 'eye-off' : 'eye'}
                    size={15}
                    color="gray"
                    onPress={() => setHidePass(!hidePass)}
                /> */}
            </View>
         

            {Formik.errors.Number &&
                <Text style={styles.incorrectText}>{Formik.errors.Number}</Text>
            }
            {Formik.errors.Password &&
                <Text style={styles.incorrectText}>{Formik.errors.Password}</Text>
            }
            <View style={styles.forgotPassword}>
                <TouchableOpacity onPress={()=> navigation.navigate('forgot')} >
                    <Text style={styles.forgot}>Forgot password?</Text>
                </TouchableOpacity>
            </View> 
                        <AppButton  onpress={Formik.handleSubmit} title="Log In" style={!Formik.values.Number || !Formik.values.Password  ? styles.disablebtn : styles.appButtonContainer} />
                    {/* </>
                )}
            </Formik> */}
            <View style={styles.orlineR}>

            </View>
            <View style={styles.orlineL}>

            </View>
            <View style={styles.orlogin}>
                <Text style={styles.orlogintext} >OR log in with</Text>
            </View >

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
                    <Image source={require('../../assets/images/googleLogo.png')} style={styles.combtn3}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('page')} style={styles.iconButton}>
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
                <View style={styles.baseline} >
                    <Text>New to PX Boost?</Text>
                    <TouchableOpacity style={styles.btntext5} onPress={()=> navigation.navigate('signup')} >
                        <Text style={styles.text5} >Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
    
    </View>

</ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagecontainer: {
        width: 180,
        height: 120,
        marginBottom: 490
    },
    inputView: {

        width: "85%",
        height: 45,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        top: -50
    },
    inputViewnew: {

        width: "65%",

        height: 45,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        top: -50,
        left: 40
    },
    inputViewnew1: {
        right: 106,
        width: '18%',
        backgroundColor:'#F9F9F9',
        top:2,
        

    },
    combtn: {
        borderWidth: 0.8,
        height: 51,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:4
    },
    inpuText: {
        height: 50,
        color: "white"

    },
    
    forgotPassword: {
        left: 60,
        bottom: 60
    },
    forgot: {
        color: '#5382F6',
        left: 28,
        fontWeight: "600",
        top: 26
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        right: -90,
        bottom: -40
    },
    button: {
        width: '70%',
        marginVertical: 10,
        paddingVertical: 2,
        bottom: 10,
        color: '#D8D8D8'
    },
    orlogin: {
        top: 70,
    },
    orlogintext: {
        fontSize: 13,

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
        left:4
    },
    iconline: {
        top: 90,
        fontSize: 9,

    },
    lastline1: {
        top: 80,
        left: 59,
        fontSize: 12
    },
    lastline2: {
        left: 163,
        top: 65,
        fontSize: 12,
        fontWeight: '600',
        color: '#5382F6'
    },
    incorrectText: {
        color: '#CC1414',
        bottom: 55,
        fontSize: 14,
        fontWeight:'500',
        right: 0,
    },
    fb: {
        right: 110,
        top: 53
    },
    go: {
        top: 36,
        left:6
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
    orlineR: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.3,
        width: '23%',
        left: 110,
        top: 80
    },
    orlineL: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.3,
        width: '23%',
        right: 110,
        top: 80
    },
    combtn1:{
        right:12,
        top:16

    },
    combtn2:{
        left:26,
        bottom:1,
        fontSize:27

    },
    combtn3:{
        resizeMode:'contain',
        height:42,
        top:8

    },
    appButtonContainer: {
        top: 15,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 13,
        paddingHorizontal: 123,
        height:53
    },
    disablebtn:{
        top: 15,
        backgroundColor: "#E6E6E6",
        borderRadius: 4,
        paddingVertical: 13,
        paddingHorizontal: 123,
        height:53
    },
    baseline: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 65

    },
    btntext5: {
        position: 'relative',
        right:-10
    },
    text5: {
        color: '#5382F6',
        fontSize: 14,
        fontWeight: '600'
    }
    

})