import  React, {useState} from 'react';
import { Button, View, StyleSheet ,Image, TouchableOpacity, Alert} from 'react-native';
import { Appbar, Text, TextInput } from 'react-native-paper';


function resetpassword({ navigation }) {

    const [redenable, setRedEnable] = useState(false);



   const Valid = () => {
       setRedEnable(true)
   }







    return (
        
        <View style={{flex:1}} >
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
                        <TextInput 
                          mode="outlined" 
                          style={styles.textin3} 
                          placeholder="Confirm Password"
                          label= "Confirm Password"
                          error={redenable}

                          
                          />

                        <TouchableOpacity  style={styles.resetbtn} onPress={Valid}  >
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
            left:40

        },
        text2:{
            fontSize: 16,
            fontWeight: '400',
            top:45,
            left:40

        },
        text3:{
            fontSize: 14,
            fontWeight: '400',
            top:80,
            left:40
        },
        text4:{
            color:'#5382F6',
            fontSize: 14,
            fontWeight: '700',
            top:63,
            left:180
        },
        text5:{
            fontSize:16,
            fontWeight:'700',
            top:26,
            left:40

        },
        textin1:{
            top:100,
            width:'77%',
            left:40
        

        },
        textin2:{
            top:110,
            width: '77%',
            left: 40

        },
        textin3:{
            top:120,
            width: '77%',
            left: 40

        },
        resetbtn: {
        width: '77%',
        height: 53,
        top: 139,
        left: 40,
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
        left: 110


    },
    

})