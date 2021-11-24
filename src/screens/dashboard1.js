//import liraries
import React,{useState} from 'react';
import { View, Text, StyleSheet , Button, Alert} from 'react-native';
import {TextInput} from 'react-native-paper'
import {useDispatch} from 'react-redux';
import { setSmurfName } from '../redux/actions';



// create a component
const dashboard1 = ({navigation, route}) => {
    // const Number = useSelector((state)=> state.Number)
    const [enter, setEnter] = useState('')
    const dispatch = useDispatch();


    console.log(enter, 'value')
    //const {data1,data2} = route.params;
    const loginPress = () => {
        //dispatch(fetchSmurfData());
        dispatch(setSmurfName(enter))
        navigation.navigate('dashboard2');
    }





    return (
        <View style={styles.container}>
            <Text style={styles.redux} >REDUX SAGA</Text>
            <Text onPress={()=>Alert.alert("Welcome To Dashboard")} style={styles.text}>Dashboard1</Text>
            <Button
             title="Go Forward"
             onPress={loginPress}
                
            />
            <Text style={styles.textlogin} >Login Here</Text>
            <TextInput 
               style={{height:55, width:'80%'}} 
               mode="outlined" 
               label="ENTER USERNAME"
               onChangeText={(val)=> setEnter(val)} 
            />
            <Button 
              title="Go Back"
              onPress={()=> navigation.navigate('login')}
            />
            {/* <Text onPress={()=>Alert.alert("ItemId1-",data1)} style={styles.text1} >Data1: NumberID  {data1}  </Text>
            <Text onPress={()=>Alert.alert("ItemId2-",data2)} style={styles.text2} >Data2: PasswordID  {data2}</Text> */}
            {/* <Text style={styles.text1} >Data2: NumberID  {Number}</Text> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#2c3e50',
    },
    text:{
        top:-25,
        fontSize:30,
        fontWeight:'700'
    },
    text1:{
        top:90,
        right:50,
        fontSize:16,
    },
    text2:{
        top:90,
        right:108,
        fontSize:16,
    },
    textlogin:{
        fontSize:18,
        top:-10,
        left:-110,

    },
    redux:{
        bottom:200,
        fontSize:50,
        fontWeight:'900',
        color:'#86d46b'
    }
});

//make this component available to the app
export default dashboard1;
