import  React, {useState} from 'react';
import { Button, View, StyleSheet ,Image, TouchableOpacity, Alert} from 'react-native';
import { Appbar, Text, TextInput } from 'react-native-paper';


function resetpassword({ navigation }) {

    const [redenable, setRedEnable] = useState(false);

    const [isValidPass, setisValidPass] = useState(true);
    const [isValidPass1, setisValidPass1] = useState(true);
    const [isValidPass2, setisValidPass2] = useState(true);
    const [isValidPass3, setisValidPass3] = useState(true);
    const [isValidPass4, setisValidPass4] = useState(true);



   const Valid = () => {
       setRedEnable(true)
   }


    return (
        
        <View style={{ flex: 1, backgroundColor:'#fff'}} >
            <View>
                <View>
                    <Appbar.Header style={{ backgroundColor: '#034C81' }} >
                        <Appbar.Action color="white" icon="arrow-left" onPress={() => navigation.navigate('forgot')} />
                        <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />

                    </Appbar.Header>
                </View>
                <View>
                    <Text style={styles.text1} >Reset Password</Text>
                    <Text style={styles.text2} >A password reset code has been sent on{'\n'}                                        on SMS</Text>
                    <Text style={styles.text5} >+1  2025550143</Text>
                    <Text style={styles.text3} >Did not receive Code?</Text>
                    <TouchableOpacity onPress={()=> Alert.alert('Resend SMS')} >
                         <Text style={styles.text4}>Resend SMS</Text>
                    </TouchableOpacity>
                    <View>
                        <TextInput 
                          mode="outlined" 
                          style={styles.textin1}
                          placeholder="Password Reset Code"
                          label="Password Reset Code"
                          error={redenable}
                          



                          />
                        <TextInput 
                          mode="outlined"  
                          style={styles.textin2} 
                          placeholder="New Password"
                          label="New Password"
                          error={redenable}
                          />

                        {isValidPass ? (
                            <Text style={styles.ErrorPass} >The password will need to have atleast:</Text>)
                            : null}

                        { isValidPass1 ? ( 
                            <Text style={styles.ErrorPass1}   >✓  10 characters</Text>
                        ) : null }   

                        { isValidPass2 ? (
                            <Text style={styles.ErrorPass2}   >✓ 1 Upper case character</Text>
                        ) : null }

                        { isValidPass3 ? (
                            <Text style={styles.ErrorPass3}   >✓ 1  lower case character</Text>
                        ) : null }

                        {isValidPass4 ? (
                            <Text style={styles.ErrorPass4}   >✓  special character</Text>
                        ) : null }

                        <TextInput 
                          mode="outlined" 
                          style={styles.textin3} 
                          placeholder="Confirm Password"
                          label= "Confirm Password"
                          error={redenable}

                          
                          />

                        <TouchableOpacity  style={styles.resetbtn} onPress={()=> navigation.navigate('passwordset')}  >
                            <Text style={styles.resettext}>Reset</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            
            
        </View>
    );
}

export default resetpassword;

const styles = StyleSheet.create({
    headerimage:{
        
            top: 0,
            left: 100,
            width: 80,
            height: 35
        },
        text1:{
            fontSize:24,
            fontWeight:'700',
            top:35,
            left:44,
            

        },
        text2:{
            fontSize: 16,
            fontWeight: '400',
            top:45,
            left:44

        },
        text3:{
            fontSize: 14,
            fontWeight: '400',
            top:50,
            left:44
        },
        text4:{
            color:'#5382F6',
            fontSize: 14,
            fontWeight: '700',
            top:34,
            left:180
        },
        text5:{
            fontSize:16,
            fontWeight:'700',
            top:26,
            left:44

        },
        textin1:{
            top:60,
            width:'77%',
            left:40,
            backgroundColor:'#fff'
        

        },
        textin2:{
            top:70,
            width: '77%',
            left: 40,
            backgroundColor: '#fff'


        },
        textin3:{
            top:90,
            width: '77%',
            left: 40,
            backgroundColor: '#fff'


        },
        resetbtn: {
        width: '78%',
        height: 53,
        top: 109,
        left: 38,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10

        },
        resettext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        fontWeight: '700',
        top: 10,
        left: 120


    },
    ErrorPass:{
        fontSize:14,
        fontWeight:'400',
        alignSelf:'center',
        top:75,
        right:35
        
    },
    ErrorPass1:{
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top:79,
        right:100,
        color:'#268E6C'


    },
    ErrorPass2: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 80,
        right: 72,
        color:'#268E6C'
    },
    ErrorPass3: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 83,
        right: 74,
        color:'#268E6C'
    },
    ErrorPass4: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 85,
        right: 90,
        color:'#268E6C'
    },
    

})