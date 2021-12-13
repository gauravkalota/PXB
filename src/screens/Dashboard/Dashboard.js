/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, ActivityIndicator } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { ProfilePictureIcon } from './components/ImageComp';
import MyCareTeam from './components/MyCareTeam';
import ProfilePicture from './components/ProfilePicture';
import QuestionAnswer from './components/QuestionAnswer';
import ExceptionCare from './components/ExceptionCare';
import AppButton from '../../components/AppButton';
import theme from '../../theme/theme';
import get from 'lodash/get';

function Dashboard({ navigation, routes }) {
  const [enter, setEnter] = useState('');
  const [one, setone] = useState('');
  const [two, settwo] = useState('');
  // const Id1 = useSelector(state => state.smurfName);
  // const Id2 = useSelector(state => state.pass);
  // const Id3 = useSelector(state => state.obj);
  const [isLoading, setLoading] = useState(true);
  const [HomeScreenData, setHomeScreenData] = useState([]);
  const loginPress = () => {
    dispatch(setSmurfName(enter));
    navigation.navigate('dashboard2');
  };
  const [dis, setDis] = useState(true);
  const dial = () => {
    setDis(false);
  };
  //////////GET_DATA///////////
  // console.log(app_version,app_name,'XX')
  // const OsVer = Platform.constants['Release'];
  // console.log(OsVer,'os_version');
  //console.log(" Minimum Android version - Lollipop-5.0, API-level-21")
  //console.log("Minimum OS version ios - platform :ios, '11.0")
  //console.log("DATA", Id3 )

  /////////////FETCH_HOMESCREEN_Data_FROM_API///////
  async function getAllDATA() {
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'eyJraWQiOiJaNk1CWjY2cWt3NEJBTm1zUFAxUFJYTWVpbGNYcEVuQlpFYUFHMDB2dXBvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhYmZlZDkwYS04Mzg3LTRjMWItOGZjOS02MjYwYWMwNTBiYzUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYmlydGhkYXRlIjoiMDctMDctMTk0OCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0JTOHl4eVY5OCIsInBob25lX251bWJlcl92ZXJpZmllZCI6dHJ1ZSwiY29nbml0bzp1c2VybmFtZSI6ImFiZmVkOTBhLTgzODctNGMxYi04ZmM5LTYyNjBhYzA1MGJjNSIsImdpdmVuX25hbWUiOiJUaGVvZG9yZSIsImF1ZCI6IjdlbjVtOXFmb2drbW02ODRybm8ybXBjYnBrIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2Mzg5NTQxNjksInBob25lX251bWJlciI6Iis5MTg0MTA1MzQzMDYiLCJleHAiOjE2Mzk0NTczNDEsImlhdCI6MTYzOTM3MDk0MSwiZmFtaWx5X25hbWUiOiJNeWNoYXJ0IiwiZW1haWwiOiJ0aGVvZG9yQHlvcG1haWwuY29tIn0.OD0FZZnQ-jc15KEx7mylc6pqvud_zCjLPmkpBARdaFdo_oXBpku8d_BSWwS8uMZWtVMXeOF9y4l4bbE8YhrtC_GhLW_J9ySlg-nIwymPcbhiZuZZ2mbo09ZnYF506EStU4C5QmJZZAtn4nK4vsPLoU759cULcBfi_lpRAcu3h08q7DjyPdLPxwpLKaLEw3PnZiDkzOT4MGTXI52jjU6h5dnVpnODFq5SMn6O6Qh13mAmSTUN03Qw4r6U9H1vjZ-m8uCdfGyC18h7Z1n3YWhW_LN1-gm-M6cwWrn1uEQ7BQOOxsF6e9shpNpL6JOorVemse9TVRcgxG0l9NlTPvN5Fw',
    );

    try {
      try {
        const response = await fetch('https://dev-patientapi.pxboost.io/patient/homescreen', {
          method: 'GET',
          headers: myHeaders,
        });
        const json = await response.json();
        return setHomeScreenData(json);
      } catch (error) {
        return console.error(error);
      }
    } finally {
      return setLoading(false);
    }
  }

  //////API_DATA////////
  useEffect(() => {
    getAllDATA();
  }, []);
  //console.log("object",HomeScreenData);
  ////////////Data_Binding////////////
  const HospitalName = get(HomeScreenData, 'data.hospital_name', '');
  const PatientStatus = get(HomeScreenData, 'data.patient_status', '');
  const Dr1FirstName = get(
    HomeScreenData,
    'data.careteam[2].profile_info.first_name',
    '',
  );
  const Dr1LastName = get(
    HomeScreenData,
    'data.careteam[2].profile_info.last_name',
    '',
  );
  const Dr1specialtyOne = get(
    HomeScreenData,
    'data.careteam[2].profile_info.specialty[0].specialty',
    '',
  );
  const Dr1specialtyTwo = get(
    HomeScreenData,
    'data.careteam[2].profile_info.specialty[1].specialty',
    '',
  );
  const Dr2FirstName = get(
    HomeScreenData,
    'data.careteam[3].profile_info.first_name',
    '',
  );
  const Dr2LastName = get(
    HomeScreenData,
    'data.careteam[3].profile_info.last_name',
    '',
  );
  const Dr2specialtyOne = get(
    HomeScreenData,
    'data.careteam[3].profile_info.specialty[0].specialty',
    '',
  );
  const Dr2specialtyTwo = get(
    HomeScreenData,
    'data.careteam[3].profile_info.specialty[1].specialty',
    '',
  );
  const Dr2specialtyThree = get(
    HomeScreenData,
    'data.careteam[3].profile_info.specialty[2].specialty',
    '',
  );
  const Nurse1FirstName = get(
    HomeScreenData,
    'data.careteam[0].profile_info.first_name',
    '',
  );
  const Nurse1LastName = get(
    HomeScreenData,
    'data.careteam[0].profile_info.last_name',
    '',
  );
  const Nurse2FirstName = get(
    HomeScreenData,
    'data.careteam[1].profile_info.first_name',
    '',
  );
  const Nurse2LastName = get(
    HomeScreenData,
    'data.careteam[1].profile_info.last_name',
    '',
  );
  const AttendingDrF_Name = get(
    HomeScreenData,
    'data.careteam[2].profile_info.first_name',
    '',
  );
  const AttendingDrL_Name = get(
    HomeScreenData,
    'data.careteam[2].profile_info.last_name',
    '',
  );

  //////Attending_DR//////////
  const CareTeamDATA = get(HomeScreenData, 'data.careteam', []);
  AttendingDrArray = CareTeamDATA.filter((item) => {
    return item.is_attender === true;
  });
  const AttendingDrFirstName = get(AttendingDrArray, '[0].profile_info.first_name', '');
  const AttendingDrLastName = get(AttendingDrArray, '[0].profile_info.last_name', '');

  console.log('object', AttendingDrFirstName);

  return (
    <SafeAreaView style={styles.MainContainer}>
      {isLoading ? (
        <ActivityIndicator style={styles.activityindicatorstyle} size={'large'} color={'#5382F6'} />
      ) : (
        <>
          <ScrollView
            contentContainerStyle={{ paddingBottom: 140 }}
            style={{ backgroundColor: '#ffff' }}>
            <View style={styles.profilepictureView}>
              <ProfilePicture
                patient_name={'Felix Harder'}
                patient_status={PatientStatus}
                uri={
                  'https://cdn-icons.flaticon.com/png/512/3024/premium/3024605.png?token=exp=1638269673~hmac=bcdf1b520fdb3a426eda766fc65570c2'
                }
              />
            </View>
            <View style={styles.ViewunderProfilePicture}>
              <Text style={styles.hospname}>{HospitalName}</Text>
              <AppButton
                style1={styles.butntext}
                style={styles.butn}
                title={'Change'}
                onpress={() => console.warn('Pressed')}
              />
            </View>
            <View style={styles.ViewforAttendingdr}>
              <Text style={styles.attendingdr}>Attending Doctor</Text>
              <Text style={styles.attendingdrname}>
                {'Dr.' + ' ' + AttendingDrFirstName + ' ' + AttendingDrLastName}
              </Text>
            </View>
            <View style={styles.attendingDRprofileView}>
              <ProfilePictureIcon
                style={styles.attendingDRprofileP}
                size={40}
                lable={AttendingDrFirstName}
              />
            </View>

            <View style={styles.myexcepcare}>
              <ExceptionCare />
            </View>
            <View style={styles.mycareteam}>
              <MyCareTeam />
            </View>
          </ScrollView>
          <View style={styles.myQAcomp}>
            <QuestionAnswer onPress={() => navigation.navigate('login')} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

// define your styles
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  activityindicatorstyle: { flex: 1 },
  profilepictureView: {
    paddingTop: 20,
  },
  ViewunderProfilePicture: {
    borderBottomColor: '#999999',
    borderBottomWidth: 0.3,
    borderTopWidth: 0.3,
    borderTopColor: '#999999',
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
  },
  butn: {
    width: 79,
    height: 30,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    justifyContent: 'center',
    marginRight: 10,
  },
  butntext: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    textAlign: 'center',
  },
  hospname: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Lato',
    marginLeft: 10,
  },
  ViewforAttendingdr: {
    flexDirection: 'column',
    paddingLeft: 20,
    marginTop: 10,
  },
  attendingdr: {
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: '500',
    color: '#999999',
    marginLeft: 8,
  },
  attendingdrname: {
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: '700',
    color: '#5382F6',
    marginLeft: 8,
    marginTop: 3,
  },
  attendingDRprofileView: {
    flexDirection: 'row-reverse',
    marginLeft: 20,
    marginTop: -35,
  },
  attendingDRprofileP: {
    marginRight: 10,
  },

  myexcepcare: {
    marginTop: 10,
  },
  mycareteam: {
    marginTop: 30,
  },
  myQAcomp: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default Dashboard;
