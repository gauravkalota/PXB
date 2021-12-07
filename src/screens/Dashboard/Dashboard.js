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
      'eyJraWQiOiJaNk1CWjY2cWt3NEJBTm1zUFAxUFJYTWVpbGNYcEVuQlpFYUFHMDB2dXBvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhYmZlZDkwYS04Mzg3LTRjMWItOGZjOS02MjYwYWMwNTBiYzUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImJpcnRoZGF0ZSI6IjA3LTA3LTE5NDgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9CUzh5eHlWOTgiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOnRydWUsImNvZ25pdG86dXNlcm5hbWUiOiJhYmZlZDkwYS04Mzg3LTRjMWItOGZjOS02MjYwYWMwNTBiYzUiLCJnaXZlbl9uYW1lIjoiVGhlb2RvcmUiLCJhdWQiOiI3ZW41bTlxZm9na21tNjg0cm5vMm1wY2JwayIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM4NTEyNTA1LCJwaG9uZV9udW1iZXIiOiIrOTE4NDEwNTM0MzA2IiwiZXhwIjoxNjM4ODU1MjA0LCJpYXQiOjE2Mzg3Njg4MDQsImZhbWlseV9uYW1lIjoiTXljaGFydCIsImVtYWlsIjoidGhlb2RvckB5b3BtYWlsLmNvbSJ9.p6Pv7ZFeTlhb3A7kSvqQnQERenDW4k0DTis556SlIVuZN7qMqn32BqGlI4NoEiwsQtqGSKaC3W7grDrIvZDabFgnmhaGPkGEvm5LempF1QTt5-LQKq-uDz3kHIChYWhT-Voyr91dqtiCbVtA3XR9mR1iRvF2fXegClKU5qOs6pZ_2JRl5v6m6SAQRFlcssK89fWPWlGWJdF8va4cicdMePr9-l2_wU16DvuRab1X-m85Bf8FdiIRwUsKYP1NVODPP6luYKw1LpxKckXooHPsomy3uWbi8N7bdJ4CqXoNYX1CgPxHqoxBNaC_ZyR2n2dDI9uhsh7LsyVW6D_6pNM9nQ',
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

  useEffect(() => {
    getAllDATA();
  }, []);

  console.log('DATA', data);
  //  console.log("DATANEW", data.data.careteam[0].profile_info.active_status )

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      {isLoading ? (
        <ActivityIndicator style={{flex: 1}} size={'large'} color={'#5382F6'} />
      ) : (
        <>
          <ScrollView
            contentContainerStyle={{paddingBottom: 10}}
            style={{backgroundColor: '#ffff'}}>
            <View>
              <ProfilePicture
                patient_name={'Felix Harder'}
                patient_status={data.data.patient_status}
                uri={
                  'https://cdn-icons.flaticon.com/png/512/3024/premium/3024605.png?token=exp=1638269673~hmac=bcdf1b520fdb3a426eda766fc65570c2'
                }
              />
            </View>
            <View
              style={{
                borderBottomColor: '#999999',
                borderBottomWidth: 0.3,
                borderTopWidth: 0.3,
                borderTopColor: '#999999',
                marginLeft: 10,
                marginRight: 10,
              }}>
              <Text style={styles.hospname}>{data.data.hospital_name}</Text>
              <AppButton
                style1={styles.butntext}
                style={styles.butn}
                title={'Change'}
                onpress={() => console.warn('Pressed')}
              />
            </View>
            <View
              style={{flexDirection: 'column', paddingLeft: 20, marginTop: 10}}>
              <Text style={styles.attendingdr}>Attending Doctor</Text>
              <Text style={styles.attendingdrname}>Dr Jose Portilla</Text>
            </View>
            <View
              style={{
                flexDirection: 'row-reverse',
                marginLeft: 20,
                marginTop: -35,
              }}>
              <NoProfilePictureGiven
                style={styles.ProfilePictureSmall}
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
                drname={
                  data.data.careteam[0].profile_info.first_name +
                  ' ' +
                  data.data.careteam[0].profile_info.last_name
                }
                drwork={'Cardiologist, Interventional Cardiologist'}
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
  container1: {},
  butn: {
    width: 79,
    height: 30,
    //backgroundColor:'#5382F6',
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    justifyContent: 'center',
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
  },
  attendingdr: {
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: '500',
    color: '#999999',
  },
  attendingdrname: {
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: '700',
    color: '#5382F6',
  },
  ProfilePictureSmall: {},

  myexcepcare: {
    marginTop: 10,
  },
  mycareteam: {
    marginTop: 30,
  },
  myQAcomp: {
    marginBottom: -34,
  },
});

//make this component available to the app
export default Dashboard;
