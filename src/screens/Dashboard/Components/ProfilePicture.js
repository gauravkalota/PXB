//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppButton from '../../../components/AppButton';

// create a component
const ProfilePicture = ({uri, patient_name, patient_status}) => {
  return (
    <View style={styles.headerContent}>
      <Image resizeMode="contain" style={styles.avatar} source={{uri: uri}} />
      <Text style={styles.patient_name}>{patient_name}</Text>
      <Text style={styles.patient_status}>{patient_status}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 57,
    borderWidth: 0.1,
    //borderColor: "white",
  },
  patient_name: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    fontFamily: 'Lato',
  },
  patient_status: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999999',
    fontFamily: 'Lato',
    marginTop: 4,
  },
});

export default ProfilePicture;
