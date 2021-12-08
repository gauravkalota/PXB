/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

//////AVATAR_ICON_IF_SOURCE_IS_MENTION/NOT_MENTION
function IsProfilePictureGiven({style, size, lable, source}) {
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

const MyCareTeam = ({drname, drwork}) => {
  const [isValid, setIsValid] = useState(true);
  const [bordervisible, setBorderVisible] = useState(true);
  const [imagelink, setImageLink] = useState(true);

  //When Nurses TAB Clicked
  const NurBtnClicked = () => {
    setIsValid(false);
  };

  //When Clinicians TAB Clicked
  const ClinicBtnClicked = () => {
    setIsValid(true);
  };

  return (
    <View>
      <Text style={styles.mycareText}>My Care Team</Text>
      <View style={{ justifyContent:'flex-start',alignItems:'center',flexDirection:'row',marginTop:20}}>
        <Text
          style={isValid ? styles.cliniciansText : styles.cliniciansTextDIS}
          onPress={() => ClinicBtnClicked()}>
          Doctors
        </Text>
        {/* <View
          style={
            isValid ? styles.cliniciansBorder : styles.cliniciansBorderSHIFT
          }
        /> */}
        <Text
          style={isValid ? styles.nursesTextDIS : styles.nursesText}
          onPress={() => NurBtnClicked()}>
          Nurses
        </Text>
      </View>
      <View style={isValid ? styles.cliniciansBorder : styles.cliniciansBorderSHIFT} ></View>

      {isValid ? (
        <View style={styles.nextcontainer}>
          <View style={styles.card2View}>
            <NoProfilePictureGiven
              style={styles.drpicture}
              size={55}
              lable="A"
            />
            <View
              style={{  flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Text style={styles.drname}>{drname}</Text>
              <Text style={styles.occupation}>{drwork}</Text>
            </View>
          </View>
          <View style={styles.card2View}>
            <NoProfilePictureGiven
              style={styles.drpicture1}
              size={55}
              lable="J"
            />
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Text style={styles.drname}>Jonas Schmedtmann</Text>
              <Text style={styles.occupation}>Neurologist</Text>
            </View>
          </View>
          <View style={styles.card2View}>
            <NoProfilePictureGiven
              style={styles.drpicture1}
              size={55}
              lable="B"
            />
            <View
              style={{
                 flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Text style={styles.drname}>Brent Eviston</Text>
              <Text style={styles.occupation}>
                Dentist, Prosthodontist, Implantologist
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.nextcontainer}>
          <View style={styles.card2View}>
            <IsProfilePictureGiven
              style={styles.drpicture}
              source={require('../../../../assets/images/doctor.png')}
            />
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Text style={styles.drname}>Nurse 1</Text>
              <Text style={styles.occupation}>Nurse</Text>
            </View>
          </View>
          <View style={styles.card2View}>
            <IsProfilePictureGiven
              style={styles.drpicture}
              source={require('../../../../assets/images/doctor.png')}
            />
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',

              }}>
              <Text style={styles.drname}>Nurse 2</Text>
              <Text style={styles.occupation}>Nurse</Text>
            </View>
          </View>
          <View style={styles.card2View}>
            <IsProfilePictureGiven
              style={styles.drpicture}
              source={require('../../../../assets/images/doctor.png')}
            />
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Text style={styles.drname}>Nurse 3</Text>
              <Text style={styles.occupation}>Nurse</Text>
            </View>
          </View>
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
  },
  cliniciansTextDIS: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#999999',
    marginLeft: 25,
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
    marginLeft: 120,
  },
  nursesTextDIS: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#999999',
    marginLeft: 55,
  },
  nursesText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#034C81',
    marginLeft: 55,
  },
  nextcontainer: {
    //width: '100%',
    height: '65%',
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
    justifyContent:'flex-start'
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
    //top: 20,
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
});
