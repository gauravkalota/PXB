/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MainButton from './MainButton';

const ExceptionCare = ({
  card_text1,
  card_text2,
  card_text3,
  card_text4,
  card_text5,
}) => {
  const [more, setMore] = useState(true);

  const CardArray = [(card_text1), (card_text2) ,(card_text3)];

  return (
    <View style={styles.Maincontainer}>
      <View style={styles.container1}>
        <Text style={styles.maintext}>My Exceptional Care</Text>
        <TouchableOpacity
          style={styles.Editbtn}
          onPress={() => console.log('Pressed')}>
          <Text style={styles.EditBtntext}>Edit</Text>
        </TouchableOpacity>
      </View>

      {CardArray.map((item, key) => (
        <View style={styles.cardMAP} key={key} >
          <Text style={styles.cardtext} >
            {item}
          </Text>
        </View>
      ))}

      <View style={styles.container2}>
        {more ? null : (
          <>
            {/* <View style={styles.cardview1}>
              <Text style={styles.cardtext}>{card_text4}</Text>
            </View>
            <View style={styles.cardview1}>
              <Text style={styles.cardtext}>{card_text5}</Text>
            </View> */}
          </>
        )}
        <View style={styles.ShowMoreBtnView}>
          <MainButton
            text={more ? 'Show more' : 'Show less'}
            onPress={() => (more ? setMore(false) : setMore(true))}
          />
        </View>
      </View>
    </View>
  );
};

export default ExceptionCare;

const styles = StyleSheet.create({
  Maincontainer: {
    borderRadius: 4,
    backgroundColor: 'rgba(83,130,246,0.08)',
    marginHorizontal: 20,
  },
  container1: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 25,
  },
  maintext: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Lato',
  },
  Editbtn: {
    width: 80,
    height: 30,
    backgroundColor: '#ffff',
    borderRadius: 4,
    borderColor: '#5382F6',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  EditBtntext: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5382F6',
    fontFamily: 'Lato',
  },
  container2: {
    paddingBottom: 25,
  },
  cardMAP:{
    flex: 1,
    borderRadius: 4,
    width: '90%',
    height: 64,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 10,
  },
  cardtext: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: 'grey',
    fontFamily: 'Lato',
    paddingTop: 20,
  },
  ShowMoreBtnView: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
