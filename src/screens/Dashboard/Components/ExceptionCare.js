/* eslint-disable no-const-assign */
/* eslint-disable no-shadow */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MainButton from './MainButton';
import get from 'lodash/get';

const ExceptionCare = () => {
  const [more, setMore] = useState(true);
  const [ExceptData, setExceptData] = useState([]);

  ////////Fetch_ExceptionalCare_Data_from_API/////////
  async function getDATA() {
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'eyJraWQiOiJaNk1CWjY2cWt3NEJBTm1zUFAxUFJYTWVpbGNYcEVuQlpFYUFHMDB2dXBvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhYmZlZDkwYS04Mzg3LTRjMWItOGZjOS02MjYwYWMwNTBiYzUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYmlydGhkYXRlIjoiMDctMDctMTk0OCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0JTOHl4eVY5OCIsInBob25lX251bWJlcl92ZXJpZmllZCI6dHJ1ZSwiY29nbml0bzp1c2VybmFtZSI6ImFiZmVkOTBhLTgzODctNGMxYi04ZmM5LTYyNjBhYzA1MGJjNSIsImdpdmVuX25hbWUiOiJUaGVvZG9yZSIsImF1ZCI6IjdlbjVtOXFmb2drbW02ODRybm8ybXBjYnBrIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2Mzg5NTQxNjksInBob25lX251bWJlciI6Iis5MTg0MTA1MzQzMDYiLCJleHAiOjE2Mzk0NTczNDEsImlhdCI6MTYzOTM3MDk0MSwiZmFtaWx5X25hbWUiOiJNeWNoYXJ0IiwiZW1haWwiOiJ0aGVvZG9yQHlvcG1haWwuY29tIn0.OD0FZZnQ-jc15KEx7mylc6pqvud_zCjLPmkpBARdaFdo_oXBpku8d_BSWwS8uMZWtVMXeOF9y4l4bbE8YhrtC_GhLW_J9ySlg-nIwymPcbhiZuZZ2mbo09ZnYF506EStU4C5QmJZZAtn4nK4vsPLoU759cULcBfi_lpRAcu3h08q7DjyPdLPxwpLKaLEw3PnZiDkzOT4MGTXI52jjU6h5dnVpnODFq5SMn6O6Qh13mAmSTUN03Qw4r6U9H1vjZ-m8uCdfGyC18h7Z1n3YWhW_LN1-gm-M6cwWrn1uEQ7BQOOxsF6e9shpNpL6JOorVemse9TVRcgxG0l9NlTPvN5Fw',
    );

    try {
      const response = await fetch(
        'https://dev-patientapi.pxboost.io/patient/abfed90a-8387-4c1b-8fc9-6260ac050bc5/exceptionalCare',
        {
          method: 'GET',
          headers: myHeaders,
        },
      );
      const json = await response.json();
      return setExceptData(json);
    } catch (error) {
      return console.error(error);
    }
  }
  //////API_DATA////////
  useEffect(() => {
    getDATA();
  });

  //////Create_new_array_from_api_data_whose_ispatientmapped=true///////
  const NEW = get(ExceptData, 'data', []);
  //console.log("object,",NEW);
  const FilterData = NEW.filter(x => {
    return x.ispatientmapped === true;
  });

  /////////////ShowMoreData_ShowLessData///////////////////
  FilterData.splice(more ? 3 : FilterData.length);

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
      {FilterData.map((item, index) => {
        const exceptionalData = get(item, 'parameter', '');
        return (
          <View style={styles.cardMAP} key={index}>
            <Text style={styles.cardtext}>{exceptionalData}</Text>
          </View>
        );
      })}

      <View style={styles.container2}>
        <View style={styles.ShowMoreBtnView}>
          <MainButton
            text={more ? 'Show more' : 'Show less'}
            onPress={() => {
              setMore(!more);
            }}
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
  cardMAP: {
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
