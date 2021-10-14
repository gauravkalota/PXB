import React, { useState, useEffect} from 'react';
import { Image,View, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import {  Appbar, Text,  TextInput} from 'react-native-paper';


function mobileverification ({navigation, route}) {

    const [Number1, setNumber1] = useState(' ');
    const [Number2, setNumber2] = useState(' ');
    const [Number3, setNumber3] = useState(' ');
    const [Number4, setNumber4] = useState(' ');

    const [Code, setCode] = useState('+1')

    useEffect(() => {
        if (route.params?.item) {
            setCode(route.params.item)
        }
    }, [route.params?.item])

    console.log('g',Code)



   



 
    return(
    <View style={{flex:1}}>    
            <ScrollView scrollEnabled={false} >
                <View>
                    <Appbar.Header style={{ backgroundColor:'#034C81'}} >
                        <Appbar.Action color="white" icon="arrow-left" onPress={()=> navigation.navigate('page')} />
                        <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />

                    </Appbar.Header>
                </View>

                {/* <View style={styles.appheader}></View> */}
                <Text style={styles.text1} >Mobile Number Verification</Text>
                <Text style={styles.text2} >A verification code has been sent to your</Text>
                <Text style={styles.text3} >mobile number</Text>
                <Text style={styles.text4} >{Code}</Text>
                <View style={styles.btn}>   
                    <TouchableOpacity onPress={()=> navigation.navigate('verification')} disabled={!Number1 || !Number2 || !Number3 || !Number4} style={ !Number1 || !Number2 || !Number3 || !Number4  ? styles.verifybtndis  : styles.verifybtn}>
                        <Text style={styles.verifybtntext} >Verify</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.otpcontainer}>
                    <Text style={styles.otpboxtext} >Please enter code to confirm registration</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-around', paddingHorizontal:30}}>
                        <TextInput 
                           keyboardType={'numeric'} 
                           maxLength={1} 
                           mode={'outlined'} 
                           style={styles.otpinput}
                           onChangeText={val => setNumber1(val)}
                        //    value={Number1} 
                        //    onEndEditing={()=> Alert.alert('ENDS')}
                           
                           
                        />
                        <TextInput 
                           keyboardType={'numeric'} 
                           maxLength={1} 
                           mode={'outlined'} 
                           style={styles.otpinput}
                           onChangeText={val => setNumber2(val)}
                        //    value={Number2} 

 


                        />
                        <TextInput 
                           keyboardType={'numeric'} 
                           maxLength={1} mode={'outlined'} 
                           style={styles.otpinput}
                           onChangeText={val => setNumber3(val)} 
                        //    value={Number3} 


                        />
                        <TextInput 
                           keyboardType={'numeric'} 
                           maxLength={1} 
                           mode={'outlined'} 
                           style={styles.otpinput}
                           onChangeText={val => setNumber4(val)} 
                        //    value={Number4} 


                        />

                    </View>   
                    <Text style={styles.error}>Code Invalid/Expired</Text> 
                </View>
                
                <View style={styles.baseline} >
                    <Text >Did not receive Code?</Text>
                    <TouchableOpacity style={styles.btntext5} onPress={()=>Alert.alert('SMS Send')} >
                        <Text style={styles.text5} >Resend SMS</Text>
                    </TouchableOpacity>
                </View>
         </ScrollView>
    </View>
    )
}

export default mobileverification;

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
    text4:{
        top:36,
        right:-150,
        fontSize:16,
        fontWeight:'700'

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
        top:220,
        right:50
        
    },
    btntext5:{
        position:'relative',
        right:-5,
    },
    text5:{
        color:'#5382F6',
        fontSize:14,
        fontWeight:'600'
    },
    btn:{
        top:200,
        right:5
        
    },
    otpcontainer:{
        backgroundColor:'#e1f9ef',
        width:334,
        position:'absolute',
        top:250,
        right:30,
        height:186,
     
    },
    otpboxtext:{
        fontSize:14,
        fontWeight:'500',
        top:30,
        right:40,
        position:'absolute',

    },
    otpinput:{
        width:60,
        height:60,
        top:70,
        textAlign:'center'
         ////////////enter-text=center-for-textinput
        // backgroundColor:'#69E2B3'
    
    },
    verifybtn:{
        width: '83%',
        height: 54,
        top: 110,
        left: 36,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    verifybtndis:{
        width: '83%',
        height: 54,
        top: 110,
        left: 36,
        backgroundColor: "#DDDD",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    verifybtntext:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        fontWeight: '700',
        top: 12,
        left: 125
    },
    error:{
        top:75,
        right:-35,
        fontSize:14,
        fontWeight:'500',
        color:'#CC1414'
    }


    
})
