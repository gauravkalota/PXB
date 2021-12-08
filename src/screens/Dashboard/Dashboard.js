/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Avatar, ActivityIndicator} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import MyCareTeam from './components/MyCareTeam';
import ProfilePicture from './components/ProfilePicture';
import QuestionAnswer from './components/QuestionAnswer';
import ExceptionCare from './components/ExceptionCare';
import AppButton from '../../components/AppButton';
import theme from '../../theme/theme';
import get from 'lodash/get';

function Dashboard({navigation, routes}) {
  const [enter, setEnter] = useState('');
  const [one, setone] = useState('');
  const [two, settwo] = useState('');
  const Id1 = useSelector(state => state.smurfName);
  const Id2 = useSelector(state => state.pass);
  const Id3 = useSelector(state => state.obj);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const loginPress = () => {
    // eslint-disable-next-line no-undef
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

  //////AVATAR_ICON_IF_SOURCE_IS_MENTION/NOT_MENTION
  function IsProfilePictureGiven({style, size, source}) {
    const [isgiven, setIsGiven] = useState(true);

    return (
      <View>
        <Avatar.Image style={style} size={size} source={source} />
      </View>
    );
  }
  function NoProfilePictureGiven({style, size, lable}) {
    return (
      <View>
        <Avatar.Text style={style} color="white" size={size} label={lable} />
      </View>
    );
  }

  /////////////FETCH_DATA_FROM_AN_API///////
  function getAllDATA() {
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'eyJraWQiOiJaNk1CWjY2cWt3NEJBTm1zUFAxUFJYTWVpbGNYcEVuQlpFYUFHMDB2dXBvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhYmZlZDkwYS04Mzg3LTRjMWItOGZjOS02MjYwYWMwNTBiYzUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImJpcnRoZGF0ZSI6IjA3LTA3LTE5NDgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9CUzh5eHlWOTgiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOnRydWUsImNvZ25pdG86dXNlcm5hbWUiOiJhYmZlZDkwYS04Mzg3LTRjMWItOGZjOS02MjYwYWMwNTBiYzUiLCJnaXZlbl9uYW1lIjoiVGhlb2RvcmUiLCJhdWQiOiI3ZW41bTlxZm9na21tNjg0cm5vMm1wY2JwayIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM4ODY5ODIwLCJwaG9uZV9udW1iZXIiOiIrOTE4NDEwNTM0MzA2IiwiZXhwIjoxNjM4OTU2MjIwLCJpYXQiOjE2Mzg4Njk4MjAsImZhbWlseV9uYW1lIjoiTXljaGFydCIsImVtYWlsIjoidGhlb2RvckB5b3BtYWlsLmNvbSJ9.DKTTt2QCUDA1LqazuHS4n_gy3168WzXq31vWf3i-IOIFM_WMpcJEap2MKaRSMFsLW_9Wr7QRJ7uvjM3ctkANRikA2NILUDlrIeU_-Vn20lpnLT1Rnfe6Up1IZaTSNPbjyF-5mPivHWmAJF5lYOrXFB50JT9Snqmtl7fgJto1jId8MtxOkjEojftF687FZPk9XSK8tFxZRF59AH3erqllQyCEjx_0HzzQdfy49tqONCpuxs0e0Z_rDTd8S8EwVIffyFmZrOmQF96J0Du6Zml0FxC0csTFpe5z8vOLTh2McTExWj0_53ds4Yq8XkFXB888Rx0nPu2JSmofXzM3gp5xRg',
    );

    return fetch('https://dev-patientapi.pxboost.io/patient/homescreen', {
      method: 'GET',
      headers: myHeaders,
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  //////API_DATA////////
  useEffect(() => {
    getAllDATA();
  }, []);

  //console.log('DATA', data);

  ////////////Data_Binding////////////
  const HospitalName = get(data, 'data.hospital_name', '');
  const PatientStatus = get(data, 'data.patient_status', '');
  const Dr1FirstName = get(
    data,
    'data.careteam[2].profile_info.first_name',
    '',
  );
  const Dr1LastName = get(data, 'data.careteam[2].profile_info.last_name', '');
  const Dr1specialtyOne = get(
    data,
    'data.careteam[2].profile_info.specialty[0].specialty',
    '',
  );
  const Dr1specialtyTwo = get(
    data,
    'data.careteam[2].profile_info.specialty[1].specialty',
    '',
  );
  const Dr2FirstName = get(
    data,
    'data.careteam[3].profile_info.first_name',
    '',
  );
  const Dr2LastName = get(data, 'data.careteam[3].profile_info.last_name', '');
  const Dr2specialtyOne = get(
    data,
    'data.careteam[3].profile_info.specialty[0].specialty',
    '',
  );
  const Dr2specialtyTwo = get(
    data,
    'data.careteam[3].profile_info.specialty[1].specialty',
    '',
  );
  const Dr2specialtyThree = get(
    data,
    'data.careteam[3].profile_info.specialty[2].specialty',
    '',
  );
  const Nurse1FirstName = get(
    data,
    'data.careteam[0].profile_info.first_name',
    '',
  );
  const Nurse1LastName = get(
    data,
    'data.careteam[0].profile_info.last_name',
    '',
  );
  const Nurse2FirstName = get(
    data,
    'data.careteam[1].profile_info.first_name',
    '',
  );
  const Nurse2LastName = get(
    data,
    'data.careteam[1].profile_info.last_name',
    '',
  );
  const AttendingDrF_Name = get(
    data,
    'data.careteam[2].profile_info.first_name',
    '',
  );
  const AttendingDrL_Name = get(
    data,
    'data.careteam[2].profile_info.last_name',
    '',
  );

  return (
    <SafeAreaView style={styles.MainContainer}>
      {isLoading ? (
        <ActivityIndicator style={{flex: 1}} size={'large'} color={'#5382F6'} />
      ) : (
        <>
          <ScrollView
            contentContainerStyle={{paddingBottom: 140}}
            style={{backgroundColor: '#ffff'}}>
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
                {'Dr.' + AttendingDrF_Name + ' ' + AttendingDrL_Name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row-reverse',
                marginLeft: 20,
                marginTop: -35,
              }}>
              <NoProfilePictureGiven
                style={styles.attendingDRprofileP}
                size={40}
                lable="J"
              />
            </View>

            <View style={styles.myexcepcare}>
              <ExceptionCare
                card_text1={'STATEMENT//'}
                card_text2={'STATEMENT//'}
                card_text3={'STATEMENT//'}
                card_text4={'STATEMENT//'}
                card_text5={'STATEMENT//'}
              />
            </View>
            <View style={styles.mycareteam}>
              <MyCareTeam
                dr1name={Dr1FirstName + ' ' + Dr1LastName}
                dr1work={Dr1specialtyOne + ',' + Dr1specialtyTwo}
                dr2name={Dr2FirstName + ' ' + Dr2LastName}
                dr2work={
                  Dr2specialtyOne +
                  ',' +
                  Dr2specialtyTwo +
                  ',' +
                  '\n' +
                  Dr2specialtyThree
                }
                nurse1={Nurse1FirstName + ' ' + Nurse1LastName}
                nurse2={Nurse2FirstName + ' ' + Nurse2LastName}
              />
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
  container1: {},
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
