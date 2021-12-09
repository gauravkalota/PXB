/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import {IsProfilePictureGiven,NoProfilePictureGiven} from './ImageComp';
import get from 'lodash/get';


const MyCareTeam = ({dr1name, dr1work,dr2name, dr2work,dr3name, dr3work,nurse1,nurse2,nurse3}) => {
  const [Border, setBorder] = useState(true);
  const [bordervisible, setBorderVisible] = useState(true);
  const [imagelink, setImageLink] = useState(true);
  const [DATA, setDATA] = useState([]);

  //When Nurses TAB Clicked
  const NurBtnClicked = () => {
    setBorder(false);
  };

  //When Clinicians TAB Clicked
  const ClinicBtnClicked = () => {
    setBorder(true);
  };

  ////////////////////
    async function AllDATA() {
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'eyJraWQiOiJaNk1CWjY2cWt3NEJBTm1zUFAxUFJYTWVpbGNYcEVuQlpFYUFHMDB2dXBvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhYmZlZDkwYS04Mzg3LTRjMWItOGZjOS02MjYwYWMwNTBiYzUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYmlydGhkYXRlIjoiMDctMDctMTk0OCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0JTOHl4eVY5OCIsInBob25lX251bWJlcl92ZXJpZmllZCI6dHJ1ZSwiY29nbml0bzp1c2VybmFtZSI6ImFiZmVkOTBhLTgzODctNGMxYi04ZmM5LTYyNjBhYzA1MGJjNSIsImdpdmVuX25hbWUiOiJUaGVvZG9yZSIsImF1ZCI6IjdlbjVtOXFmb2drbW02ODRybm8ybXBjYnBrIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2Mzg5NTQxNjksInBob25lX251bWJlciI6Iis5MTg0MTA1MzQzMDYiLCJleHAiOjE2MzkwNDA1NjksImlhdCI6MTYzODk1NDE2OSwiZmFtaWx5X25hbWUiOiJNeWNoYXJ0IiwiZW1haWwiOiJ0aGVvZG9yQHlvcG1haWwuY29tIn0.CbafVHXQpgbblm4E1KsEXinCnBpjfEactVKx0-ChiBK-ea2dXdS_4EFe8j-XYDz7ZnTkkCmNL0sP1GW5h00--1qhjBAipCeljcyJ7KL1Xv2H-51PcFup1z6h5QMUlrwgTGCTc5KSo9frFazL_QUip0HK_Fis-I34AYPdLCkNTLn_4aF1QLJyzN1Up6paD8Edhlm6I-QdEGlWp489kVC9RzceQdOAs-_nUQxg1rCdWWVy2lavNvCAjZElNBMxFFyXJ5NDDjFwB3AYCBpC20nt_D6zz4rR98Inu05Yrm2c0cuelEKuxLOp4OLMbAEATUsxq1aezrgMNYmUAPFET2482Q',
    );

    try {
        const response = await fetch('https://dev-patientapi.pxboost.io/patient/homescreen', {
          method: 'GET',
          headers: myHeaders,
        });
        const json = await response.json();
        return setDATA(json);
      } catch (error) {
        return console.error(error);
      }
      //.finally(() => setLoading(false));
  }

  //////API_DATA////////
  useEffect(() => {
    AllDATA();
  }, []);


  const CareTeamDATA = get(DATA,'data.careteam','');
  const DoctorArray = CareTeamDATA.filter(x=>{
    return x.profile_info.designation === 'DOCTOR';
  });
  const NurseArray = CareTeamDATA.filter(x=>{
    return x.profile_info.designation === 'NURSE';
  });

  /////DummyArray/////
  const DrArray = [1,2,3,4];
  const NuArray = [10,20,30 ];


  return (
    <View>
      <Text style={styles.mycareText}>My Care Team</Text>
      <View style={{ justifyContent:'flex-start',alignItems:'center',flexDirection:'row',marginTop:20}}>
        <Text
          style={Border ? styles.cliniciansText : styles.cliniciansTextDIS}
          onPress={() => ClinicBtnClicked()}>
          Doctors
        </Text>
        <Text
          style={Border ? styles.nursesTextDIS : styles.nursesText}
          onPress={() => NurBtnClicked()}>
          Nurses
        </Text>
      </View>
      <View style={Border ? styles.cliniciansBorder : styles.cliniciansBorderSHIFT}  />

      {Border ? (
        <View style={styles.nextcontainer}>
          {DoctorArray.map((DoctorArray, index) => (
          <View style={styles.card2View} key={index} >
            <NoProfilePictureGiven
              style={styles.drpicture}
              size={55}
              lable="A"
            />
            <View style={styles.InsideCardView} >
              <Text style={styles.drname}>{DoctorArray.profile_info.first_name + ' ' + DoctorArray.profile_info.last_name}</Text>
              <Text style={styles.occupation}>{DoctorArray.profile_info.specialty[index].specialty}</Text>

              {/* <Text style={styles.occupation}>{DoctorArray.profile_info.specialty.specialtyId}</Text> */}
            </View>
          </View>
          ))}
        </View>
      ) : (
        <View style={styles.nextcontainer}>
          {NurseArray.map((NurseArray, index) => (
          <View style={styles.card2View} key={index} >
            <IsProfilePictureGiven
              style={styles.drpicture}
              source={require('../../../../assets/images/doctor.png')}
            />
            <View style={styles.InsideCardView} >
              <Text style={styles.drname}>{NurseArray.profile_info.first_name + ' ' +  NurseArray.profile_info.first_name }</Text>
              <Text style={styles.occupation}>{NurseArray.profile_info.designation}</Text>
            </View>
          </View>
            ))}
        </View>
      )}
    </View>
  );
};
export default MyCareTeam;

const styles = StyleSheet.create({
  mycareText: {
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    fontFamily: 'Lato',
  },
  cliniciansText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#034C81',
    marginLeft: 25,
    padding: 5,
  },
  cliniciansTextDIS: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#999999',
    marginLeft: 25,
    padding: 5,
  },
  cliniciansBorder: {
    width: '26%',
    height: 2,
    borderWidth: 1,
    backgroundColor: '#034C81',
    marginLeft: 15,
  },
  cliniciansBorderSHIFT: {
    width: '26%',
    borderWidth: 1,
    height: 2,
    backgroundColor: '#034C81',
    marginLeft: 140,
  },
  nursesTextDIS: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#999999',
    marginLeft: 55,
    padding: 5,
  },
  nursesText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#034C81',
    marginLeft: 55,
    padding: 5,
  },
  nextcontainer: {
    height: '64%',
    backgroundColor: '#F7F7F7',
    paddingVertical: 10,
  },
  card1View: {
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.03,
    borderRadius: 4,
    justifyContent:'flex-start',
  },
  card2View: {
    marginTop: 10,
    width: '92%',
    height: '28%',
    marginLeft: 15,
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.03,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drpicture: {
    marginLeft: 10,
    height: 60,
    width: 60,
    backgroundColor: '#FF8A65',
  },
  drpicture1: {
    marginLeft: 10,
    height: 60,
    width: 60,
    backgroundColor: '#4EC4F6',
  },
  drpicture2: {
    top: 20,
    marginLeft: 10,
    height: 60,
    width: 60,
    backgroundColor: '#4DB6AC',
  },
  drname: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 16,
  },
  occupation: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    marginLeft: 16,
  },
  InsideCardView:{
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  } ,
});




