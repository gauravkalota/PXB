import React, {useState, useEffect} from "react";
import {ScrollView, Image, TouchableOpacity, StyleSheet, Text, View, Alert, I18nManager } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo from "../components/logo";
import { Formik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-native-date-picker'
import { upperCase, values } from "lodash";









function page({ navigation, route }) {

    const [fistname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [mobile, setmobile] = useState('');
    const [dob, setdob] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [cpass, setcpass]= useState('');

    const [isSubmitting, isSetSubmitting] = useState(false);
    const [Code, setCode] = useState('+1');


    const [isValidPass, setisValidPass] = useState(false);
    const [isValidPass1, setisValidPass1] = useState(false);
    const [isValidPass2, setisValidPass2] = useState(false);
    const [isValidPass3, setisValidPass3] = useState(false);
    const [isValidPass4, setisValidPass4] = useState(false);
    const [isValidPass1Green, setisValidPass1Green] = useState(false);
    const [isValidPass2Green, setisValidPass2Green] = useState(false);
    const [isValidPass3Green, setisValidPass3Green] = useState(false);
    const [isValidPass4Green, setisValidPass4Green] = useState(false);

/////////////STATES_FOR_DATE_PICKER//////////////////
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


//////////////Mobile_code_parameter////////////////


    useEffect(() => {
        if (route.params?.item) {
            setCode(route.params.item)
        }
    }, [route.params?.item])


///////ON_FOCUS_NEWPASSWORD//////////
    const Pfocus = () => {
        
        setisValidPass(true);
        setisValidPass1(true);
        setisValidPass2(true);
        setisValidPass3(true);
        setisValidPass4(true)
    }

    const Ffocus = () => {

        setisValidPass(false);
        setisValidPass1(false);
        setisValidPass2(false);
        setisValidPass3(false);
        setisValidPass4(false);
        setisValidPass1Green(false);
        setisValidPass2Green(false);
        setisValidPass3Green(false);
        setisValidPass4Green(false);
    }
    const Lfocus = () => {

        setisValidPass(false);
        setisValidPass1(false);
        setisValidPass2(false);
        setisValidPass3(false);
        setisValidPass4(false);
        setisValidPass1Green(false);
        setisValidPass2Green(false);
        setisValidPass3Green(false);
        setisValidPass4Green(false);
    }

    const Mfocus = () => {
        setisValidPass(false);
        setisValidPass1(false);
        setisValidPass2(false);
        setisValidPass3(false);
        setisValidPass4(false);
        setisValidPass1Green(false);
        setisValidPass2Green(false);
        setisValidPass3Green(false);
        setisValidPass4Green(false);
    }
    const Efocus = () => {
        setisValidPass(false);
        setisValidPass1(false);
        setisValidPass2(false);
        setisValidPass3(false);
        setisValidPass4(false);
        setisValidPass1Green(false);
        setisValidPass2Green(false);
        setisValidPass3Green(false);
        setisValidPass4Green(false);
    }

    const CPfocus = () => {
        setisValidPass(false);
        setisValidPass1(false);
        setisValidPass2(false);
        setisValidPass3(false);
        setisValidPass4(false);
        setisValidPass1Green(false);
        setisValidPass2Green(false);
        setisValidPass3Green(false);
        setisValidPass4Green(false);
    }



///////////newPasswordvalidation/////////////
 const handlepass = (val) => {

     const SpecialChar = /[~!@#$%^&*]/;
     const UpperCase = /[A-Z]/;
     const LowerCase = /[a-z]/;

     if(val.trim().length >= 10 ) {
        setisValidPass1Green(true);
        setisValidPass1(false);
     }
     if (val.trim().length < 10 ) {
        setisValidPass1Green(false);
        setisValidPass1(true);
     }
     if (UpperCase.test(val) ){
        setisValidPass2Green(true);
        setisValidPass2(false);
         
     }
     if (!UpperCase.test(val)){
        setisValidPass2Green(false);
        setisValidPass2(true);
         
     }
     if (LowerCase.test(val)) {
        setisValidPass3Green(true);
        setisValidPass3(false);
      
     }
     if (!LowerCase.test(val)) {
        setisValidPass3Green(false);
        setisValidPass3(true);
         
     }
     if (SpecialChar.test(val)) {
        setisValidPass4Green(true);
        setisValidPass4(false);
        
     }
     if (!SpecialChar.test(val)) {
        setisValidPass4Green(false);
        setisValidPass4(true);
         
     }
     

 }

///////////Validation_SChema_YUP////////
    const loginValidationSchema = yup.object().shape({
        firstname: yup
            .string()
            .required(),
        lastname: yup
            .string()
            .required(),

        mobile: yup 
            .string()
            .required()
            .min(10, ({ min }) => `Mobile must be at least ${min} characters`),

            // .matches("1234567890", "The account already exists.Login to\ncontinue"),
            
        dob: yup
            .string()
            .required(),

        email: yup.string().email('This email is Invalid').required(),
 
        cpass: yup 
            .string()
            .matches(pass, 'Password does not match') 

    })

      

    
    return(
<View>
            <Formik
                initialValues={{firstname:'', lastname:'', mobile:'',dob:'',email:'',cpass:'' }}
                validationSchema={loginValidationSchema}
                validateOnChange={isSubmitting}
                onSubmit={values => {
                    isSetSubmitting(true);
                }}

            >

                {({handleChange, handleSubmit, values, errors })=> (
               <>
                
    <View>

                <View>
                    <Appbar.Header style={{ backgroundColor: '#034C81' }} >
                        <Appbar.Action color="white" icon="arrow-left" onPress={() => navigation.navigate('signup')} />
                        <TouchableOpacity  onPress={() => navigation.navigate('mobile')}    >
                            <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />
                        </TouchableOpacity>
                        {/* <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} /> */}

                    </Appbar.Header>
                </View>
  
            <ScrollView style={{paddingBottom:70}}>

                <Text style={styles.text1} >Register</Text>
                <TextInput 
                   placeholderTextColor="#B3B6B7" 
                   placeholder="First Name" 
                   label="First Name"
                   mode="outlined"
                   onFocus={()=>Ffocus()} 
                   style={styles.textinput1} 
                   onChangeText={handleChange('firstname')}
                   value={values.firstname}
                   error={errors.firstname}
                />

                {errors.firstname &&
                   <Text style={styles.incorrectfirst}>{errors.firstname}</Text>
                }

                <View >
                    <TextInput 
                   placeholderTextColor="#B3B6B7" 
                   placeholder="Last Name"
                   label="Last Name"
                   mode="outlined"
                   onFocus={()=>Lfocus()}  
                   style={styles.textinput2} 
                   onChangeText={handleChange('lastname')}
                   value={values.lastname}
                   error={errors.lastname}
                />
                </View>
                

                {errors.lastname &&
                   <Text style={styles.incorrectlast}>{errors.lastname}</Text>
                }

                <View>
                    <TextInput 
                       placeholderTextColor="#B3B6B7"  
                       placeholder="Mobile Number"
                       label="Mobile Number"
                       onFocus={()=>Mfocus()}  
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

                {errors.mobile &&
                <Text style={styles.incorrectmobile}>{errors.mobile}</Text>
                }


                <TextInput 
                   placeholderTextColor="#B3B6B7" 
                   placeholder="Date of Birth"
                   label="Date of Birth" 
                   mode="outlined" 
                   right={<TextInput.Icon onPress={() => setOpen(true)} style={{ top: 4 }} color="#808080" name="calendar-range" />}
                   style={styles.textinput4} 
                //    onChangeText={handleChange('dob')}
                   value={date}
                //    error={errors.dob}
                   editable={false}
                />

                <DatePicker 
                    modal
                    mode="date"
                    androidVariant="nativeAndroid"
                    textColor="black"
                    open={open}
                    date={new Date(date)}
                    maximumDate={new Date("2021-12-31")}  //////////maxdate_this_year
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date.toLocaleDateString())   /////DateString "DAY"_"Mon"_"Date"_"year"
                        
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}  
                />

                {/* {errors.dob &&
                <Text style={styles.incorrectdob}>{errors.dob}</Text>
                } */}


                <TextInput 
                
                   placeholderTextColor="#B3B6B7"   
                   placeholder="Email Address"
                   label="Email Address"
                   onFocus={()=>Efocus()} 
                   mode="outlined" 
                   style={styles.textinput5} 
                   onChangeText={handleChange('email')}
                   value={values.email}
                   error={errors.email}
                   
                />

                {errors.email &&
                <Text style={styles.incorrectemail}>{errors.email}</Text>
                }
                <TextInput 
                   placeholderTextColor="#B3B6B7"   
                   placeholder="Password"
                   label="Password" 
                   mode="outlined" 
                   onFocus={()=> Pfocus()}
                   secureTextEntry={true}
                   style={styles.textinput6} 
                   onChangeText={val => handlepass(val)}

                //    onChangeText={handleChange('pass')}
                //    value={values.pass}
                //    error={errors.pass}
                />
                  


                    {isValidPass ? (
                        <Text style={styles.ErrorPass} >The password will need to have atleast:</Text>
                    ) : null }
                        

                    {isValidPass1 ? (
                        <Text style={ styles.ErrorPass1}   >•  10 characters</Text>
                    ) : null }
                    
                    {isValidPass1Green ? (
                        <Text style={ styles.ErrorPass1G}   >✓  10 characters</Text>
                    ): null }

                      

                    { isValidPass2 ? (
                        <Text style={styles.ErrorPass2}   > •  1 upper case character</Text>
                    ) : null }

                    {isValidPass2Green ? (
                        <Text style={styles.ErrorPass2G}   > ✓  1 upper case character</Text>
                    ): null}

                 

                    {isValidPass3 ? (
                        <Text style={styles.ErrorPass3}   > •  1  lower case character</Text>
                    ) : null}
                   
                    {isValidPass3Green ? (
                    <Text style={styles.ErrorPass3G}   > ✓  1  lower case character</Text>
                    ) : null}

               
                    {isValidPass4 ? (
                        <Text style={styles.ErrorPass4}   > •   special character</Text>
                    ) : null}
                     
                    {isValidPass4Green ? (
                        <Text style={styles.ErrorPass4G}   > ✓   special character</Text>
                    ): null }

               
                <TextInput 
                   placeholderTextColor="#B3B6B7"   
                   placeholder="Confirm Password"
                   label="Confirm Password"
                   onFocus={()=>CPfocus()} 
                   secureTextEntry={true}
                   mode="outlined" 
                   style={styles.textinput7} 
                   onChangeText={handleChange('cpass')}
                   value={values.cpass}
                   error={errors.cpass}
                />

                            
                {errors.cpass &&
                <Text style={styles.incorrectcpass}>{errors.cpass}</Text>
                }


                

                <View>
                    <TouchableOpacity style={!values.firstname || !values.lastname || !values.email || !values.mobile || !values.cpass  ? styles.resetbtndis   : styles.resetbtn} onPress={handleSubmit}  >
                        <Text style={styles.resettext}>Register</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
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
        top: 60,
        left: 35,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10

    },
    resetbtndis: {
        width: '80%',
        height: 52,
        top: 60,
        left: 35,
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
        top: 50,
        left: 35,
        backgroundColor:'#FFFFFF'
    },
    textinput2:{
        width: '80%',
        height: 55,
        top: 60,
        left: 35,
        backgroundColor: '#FFFFFF'

    },
    textinput3:{
        width: '58%',
        height: 55,
        top: 75,
        left: 120,
        backgroundColor: '#FFFFFF'

    },
    textinput4:{
        width: '80%',
        height: 55,
        top: 25,
        left: 35,
        backgroundColor: '#FFFFFF'

    },
    textinput5: {
        width: '80%',
        height: 55,
        top: 30,
        left: 35,
        backgroundColor: '#FFFFFF'

    },
    textinput6: {
        width: '80%',
        height: 55,
        top: 35,
        left: 35,
        backgroundColor: '#FFFFFF'

    },
    textinput7: {
        width: '80%',
        height: 55,
        top: 40,
        left: 35,
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
        left: 35,
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
    box: {
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000',
        height:55,
        width:'80%',
        right:-39,
        top:35
    },
    boxtext:{
        color: "#B3B6B7" ,
        top:15,
        right:-15,
        fontSize:16
    },
    boxicon:{
        right:-277,
        top:-5,
        color:'#B3B6B7'
    },
    incorrectemail:{
        top:33,
        right:-35,
        color: '#CC1414',
        fontSize:14,
        fontWeight:'400'

    },
    incorrectcpass:{
        
    },
    incorrectmobile:{
        top:25,
        right:-120,
        color: '#CC1414',
        fontSize:14,
        fontWeight:'400'
    },
    incorrectdob:{
        top:28,
        right:-37,
        color: '#CC1414',
        fontSize:14,
        fontWeight:'400'
    },
    incorrectfirst:{
        top:53,
        right:-35,
        color: '#CC1414',
        fontSize:14,
        fontWeight:'400'
    },
    incorrectlast:{
        top:65,
        right:-35,
        color: '#CC1414',
        fontSize:14,
        fontWeight:'400'
    },
    ErrorPass:{
        fontSize:14,
        fontWeight:'400',
        alignSelf:'center',
        top:38,
        right:30
        
    },
    ErrorPass1:{
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top:40,
        right:90,
        color:'#050505CC'
    },
    ErrorPass1G:{
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 40,
        right: 90,
        color: '#268E6C'
    },
    ErrorPass2: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 42,
        right: 62,
        color: '#050505CC'
    },
    ErrorPass2G: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 42,
        right: 62,
        color: '#268E6C'
    },
    ErrorPass3: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 44,
        right: 62,
        color: '#050505CC'
    },
    ErrorPass3G: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 44,
        right: 62,
        color: '#268E6C'
    },
    ErrorPass4: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 46,
        right: 78,
        color: '#050505CC'
    },
    ErrorPass4G:{
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 46,
        right: 78,
        color: '#268E6C'
    },
    
    
})

