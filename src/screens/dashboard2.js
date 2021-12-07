/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useSelector} from 'react-redux';

// create a component
const dashboard2 = ({navigation, route}) => {
  // const Number = useSelector((state)=> state.Number)
  const smurfName = useSelector(state => state.smurfName);

  //const {data1} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.redux}>REDUX SAGA</Text>
      <Text
        onPress={() => Alert.alert('Welcome To Dashboard')}
        style={styles.text}>
        Dashboard2
      </Text>

      <Button
        title="Go Back"
        onPress={() => navigation.navigate('dashboard1')}
      />
      <Text style={{top: 80, left: -100}}>LoginID-</Text>
      {/* <Text onPress={()=>Alert.alert("ItemId1-",data1)} style={styles.text1} >Data1: NumberID  {data1}  </Text> */}
      {/* <Text onPress={()=>Alert.alert("ItemId2-",data2)} style={styles.text2} >Data2: PasswordID  {data2}</Text> */}
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
  text: {
    top: -25,
    fontSize: 30,
    fontWeight: '700',
  },
  text1: {
    top: 90,
    right: 50,
    fontSize: 16,
  },
  textlogin: {
    top: 55,
    left: -20,
    fontSize: 25,
  },
  text2: {
    top: 90,
    right: 108,
    fontSize: 16,
  },
  redux: {
    bottom: 200,
    fontSize: 50,
    fontWeight: '900',
    color: '#86d46b',
  },
});

//make this component available to the app
export default dashboard2;
