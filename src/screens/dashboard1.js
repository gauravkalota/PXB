//import liraries
import React,{useState} from 'react';
import { View, Text, StyleSheet , Button, Alert} from 'react-native';
import {TextInput} from 'react-native-paper'
// import {useDispatch} from 'react-redux';
// import { setSmurfName } from '../redux/actions';

import {useSelector} from 'react-redux';


// create a component
const dashboard1 = ({navigation, route}) => {
    // const Number = useSelector((state)=> state.Number)
    const [enter, setEnter] = useState('')
    //const dispatch = useDispatch();

  const Id1 = useSelector((state)=>state.smurfName)
  const Id2 = useSelector((state)=>state.pass)

    console.log(enter, 'value')
    const {data1} = route.params;
    console.log('pass',data1)
    console.log('pass',Id2)

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
            <Text style={styles.textlogin} >User Mobile Number -</Text>
            <Text style={styles.pass} >User PassCode No -</Text>
            <Text style={styles.smurf}  >{Id1}</Text>
            <Text style={styles.smurf1}  >{data1}</Text>
            <Text style={styles.smurf2}  >{Id2}</Text>
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
        left:-65,

    },
    pass:{
        fontSize:18,
        top:-10,
        left: -74

    },
    smurf:{
        fontSize:15,
        top:-51,
        left:85

    },
    smurf1:{
        fontSize:15,
        top:-48,
        left:85
    },
    smurf2:{
        fontSize:20,
        top:-70,
        left:65,

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
