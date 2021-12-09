/* eslint-disable no-shadow */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MainButton from './MainButton';
import get from 'lodash/get';

const ExceptionCare = ({
  card_text1,
  card_text2,
  card_text3,
  card_text4,
  card_text5,
}) => {
  const [more, setMore] = useState(true);
  const [ExceptData, setExceptData] = useState([]);
  const CardArray = [card_text1, card_text2 ,card_text3];


////////Fetch_ExceptionalCare_Data_from_API/////////
    async function getDATA() {
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'eyJraWQiOiJaNk1CWjY2cWt3NEJBTm1zUFAxUFJYTWVpbGNYcEVuQlpFYUFHMDB2dXBvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhYmZlZDkwYS04Mzg3LTRjMWItOGZjOS02MjYwYWMwNTBiYzUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYmlydGhkYXRlIjoiMDctMDctMTk0OCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0JTOHl4eVY5OCIsInBob25lX251bWJlcl92ZXJpZmllZCI6dHJ1ZSwiY29nbml0bzp1c2VybmFtZSI6ImFiZmVkOTBhLTgzODctNGMxYi04ZmM5LTYyNjBhYzA1MGJjNSIsImdpdmVuX25hbWUiOiJUaGVvZG9yZSIsImF1ZCI6IjdlbjVtOXFmb2drbW02ODRybm8ybXBjYnBrIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2Mzg5NTQxNjksInBob25lX251bWJlciI6Iis5MTg0MTA1MzQzMDYiLCJleHAiOjE2MzkwNDA1NjksImlhdCI6MTYzODk1NDE2OSwiZmFtaWx5X25hbWUiOiJNeWNoYXJ0IiwiZW1haWwiOiJ0aGVvZG9yQHlvcG1haWwuY29tIn0.CbafVHXQpgbblm4E1KsEXinCnBpjfEactVKx0-ChiBK-ea2dXdS_4EFe8j-XYDz7ZnTkkCmNL0sP1GW5h00--1qhjBAipCeljcyJ7KL1Xv2H-51PcFup1z6h5QMUlrwgTGCTc5KSo9frFazL_QUip0HK_Fis-I34AYPdLCkNTLn_4aF1QLJyzN1Up6paD8Edhlm6I-QdEGlWp489kVC9RzceQdOAs-_nUQxg1rCdWWVy2lavNvCAjZElNBMxFFyXJ5NDDjFwB3AYCBpC20nt_D6zz4rR98Inu05Yrm2c0cuelEKuxLOp4OLMbAEATUsxq1aezrgMNYmUAPFET2482Q',
    );

    try {
        const response = await fetch('https://dev-patientapi.pxboost.io/patient/abfed90a-8387-4c1b-8fc9-6260ac050bc5/exceptionalCare', {
          method: 'GET',
          headers: myHeaders,
        });
        const json = await response.json();
        return setExceptData(json);
      } catch (error) {
        return console.error(error);
      }
      //.finally(() => setLoading(false));
  }
  console.log('EXDATA',ExceptData);

  //////API_DATA////////
  useEffect(() => {
    getDATA();
  }, []);

  //////Create_new_array_from_api_data_whose_ispatientmapped=true///////
  const NEW = get(ExceptData,'data',[]);
  //console.log("object,",NEW);
  const FilterData = NEW.filter((x)=>{
    return x.ispatientmapped === true;
  });
  //console.log('filter',FilterData);
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

      {FilterData.map((FilterData, index) => (
        <View style={styles.cardMAP} key={index} >
          <Text style={styles.cardtext}>{FilterData.parameter}</Text>
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
