/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ProfilePictureIcon} from './ImageComp';

const ProfilePicture = ({uri, patient_name, patient_status}) => {
  return (
    <View style={styles.mainContainer}>
      <ProfilePictureIcon style={styles.profilePicture} size={100} lable="F" />
      <Text style={styles.patient_nameText}>{patient_name}</Text>
      <Text style={styles.patient_statusText}>{patient_status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 30,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 57,
    borderWidth: 0.1,
    backgroundColor: 'mediumturquoise',
  },
  patient_nameText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    fontFamily: 'Lato',
    marginTop: 10,
  },
  patient_statusText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999999',
    fontFamily: 'Lato',
    marginTop: 4,
  },
});

export default ProfilePicture;
