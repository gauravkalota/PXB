/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IsProfilePictureGiven,NoProfilePictureGiven} from './ImageComp';
import get from 'lodash/get';


const MyCareTeam = ( ) => {
  const [Border, setBorder] = useState(true);
  const [bordervisible, setBorderVisible] = useState(true);
  const [imagelink, setImageLink] = useState(true);
  const [DATA, setDATA] = useState([]);
  ///////API_Fetch_Data////////
    async function AllDATA() {
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'eyJraWQiOiJaNk1CWjY2cWt3NEJBTm1zUFAxUFJYTWVpbGNYcEVuQlpFYUFHMDB2dXBvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhYmZlZDkwYS04Mzg3LTRjMWItOGZjOS02MjYwYWMwNTBiYzUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYmlydGhkYXRlIjoiMDctMDctMTk0OCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0JTOHl4eVY5OCIsInBob25lX251bWJlcl92ZXJpZmllZCI6dHJ1ZSwiY29nbml0bzp1c2VybmFtZSI6ImFiZmVkOTBhLTgzODctNGMxYi04ZmM5LTYyNjBhYzA1MGJjNSIsImdpdmVuX25hbWUiOiJUaGVvZG9yZSIsImF1ZCI6IjdlbjVtOXFmb2drbW02ODRybm8ybXBjYnBrIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2Mzc5MjQ1MjQsInBob25lX251bWJlciI6Iis5MTg0MTA1MzQzMDYiLCJleHAiOjE2MzkyMTQ4OTMsImlhdCI6MTYzOTEyODQ5MywiZmFtaWx5X25hbWUiOiJNeWNoYXJ0IiwiZW1haWwiOiJ0aGVvZG9yQHlvcG1haWwuY29tIn0.YA6jJ-JdDJMI3kUDJqU8bzuZJI7zUXZp3Pqp5Kj4bkNY5F1G1jwmMq_6Wm3E4-KjhA_9GIKHMg1gV95kzeCOZvd3JD9Jyltr3UVp-ACht9XiNHK16n40iGpZKgzeieSyPXjXlGcTQ5sQkaYb15EjPHJlv5rETuIYUaexD0lW7vS4PxL4B4AJZIXwpE_GlA8xq6JkF4dim-nPmlwRXf_ZuojucCj3QGZDi_qRyLJX-bU5GuPBU-KUUk01zf3qP76GesDc2r7sSlXFkK7qwpAszuv5wtX5tXQBaa-9QlWWlKBBd1UaOftfqLaYJ8ISz0m_LZKZisfe3Tzt4Bt6BQ-uvg',
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
  }
  //////API_DATA////////
  useEffect(() => {
    AllDATA();
  }, []);

  ////////Filter_array_/////////
  const CareTeamDATA = get(DATA,'data.careteam',[]);
  DoctorArray = CareTeamDATA.filter((item)=>{
    return item.profile_info.designation === 'DOCTOR';
  });
  const NurseArray = CareTeamDATA.filter((item)=>{
    return item.profile_info.designation === 'NURSE';
  });

  return (
    <View>
      <Text style={styles.mycareText}>My Care Team</Text>
      <View style={{ justifyContent:'flex-start',alignItems:'center',flexDirection:'row',marginTop:20}}>
        <Text
          style={Border ? styles.cliniciansText : styles.cliniciansTextDIS}
          onPress={() => setBorder(true)}>
          Doctors
        </Text>
        <Text
          style={Border ? styles.nursesTextDIS : styles.nursesText}
          onPress={() => setBorder(false)}>
          Nurses
        </Text>
      </View>
      <View style={Border ? styles.cliniciansBorder : styles.cliniciansBorderSHIFT}  />
      {Border ? (
        <View style={styles.nextcontainer}>
          {DoctorArray.map((item, index) => {
            const FirstName = get(item,'profile_info.first_name', '');
            const LastName = get(item,'profile_info.last_name', '');
            const Specialities = get(item,'profile_info.specialty',[]);
            const StringArray = Specialities.map((value,index) =>{
              return get(value,'specialty','');
            });
              return (
              <View style={styles.card2View} key={index} >
                <NoProfilePictureGiven
                  style={styles.drpicture}
                  size={65}
                  lable={FirstName}
                />
                <View style={styles.InsideCardView} >
                  <Text style={styles.drname}>{FirstName + ' ' + LastName}</Text>
                  <Text style={styles.occupation}>{StringArray.join( ', \n') }</Text>
                </View>
              </View>
             );
            }
          )}
        </View>
      ) : (
        <View style={styles.nextcontainer}>
          {NurseArray.map((ChildValue, index) => {
            const FirstName = get(ChildValue,'profile_info.first_name', '');
            const LastName = get(ChildValue,'profile_info.last_name', '');
            const Specialities = get(ChildValue,'profile_info.designation','');
            return (
            <View style={styles.card2View} key={index} >
                <NoProfilePictureGiven
                  style={styles.drpicture}
                  size={65}
                  lable={FirstName}
                />
                <View style={styles.InsideCardView} >
                  <Text style={styles.drname}>{FirstName + ' ' + LastName}</Text>
                  <Text style={styles.occupation}>{Specialities}</Text>
                </View>
            </View>
            );
          }
          )}
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
    marginLeft: 12,
  },
  occupation: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    marginLeft: 12,
  },
  InsideCardView:{
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  } ,
});




