/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MainButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.ShowMoreBtn}>
      <Text style={styles.ShowMoreBtnText}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  ShowMoreBtn: {
    height: 48,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#5382F6',
    backgroundColor: '#FFFFFF',
  },
  ShowMoreBtnText: {
    textAlign: 'center',
    top: 13,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#5382F6',
  },
});

export default MainButton;
