/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import {IsProfilePictureGiven,NoProfilePictureGiven} from './ImageComp';

const MyCareTeam = ({dr1name, dr1work,dr2name, dr2work,dr3name, dr3work,nurse1,nurse2,nurse3}) => {
  const [Border, setBorder] = useState(true);
  const [bordervisible, setBorderVisible] = useState(true);
  const [imagelink, setImageLink] = useState(true);

  //When Nurses TAB Clicked
  const NurBtnClicked = () => {
    setBorder(false);
  };

  //When Clinicians TAB Clicked
  const ClinicBtnClicked = () => {
    setBorder(true);
  };
  const CardArray = [1,2,3,4];

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
          {CardArray.map((item, index) => (
        <View style={styles.card2View} key={index} >
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
              <Text style={styles.drname}>{dr1name}</Text>
              <Text style={styles.occupation}>{item}</Text>
            </View>
          </View>
      ))}
           {/* <View style={styles.card2View}>
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
              <Text style={styles.drname}>{dr1name}</Text>
              <Text style={styles.occupation}>{dr1work}</Text>
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
              <Text style={styles.drname}>{dr2name}</Text>
              <Text style={styles.occupation}>{dr2work}</Text>
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
              <Text style={styles.drname}>{dr3name}</Text>
              <Text style={styles.occupation}>{dr3work}</Text>
            </View>
          </View> */}
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
              <Text style={styles.drname}>{nurse1}</Text>
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
              <Text style={styles.drname}>{nurse2}</Text>
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
              <Text style={styles.drname}>{nurse3}</Text>
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
});
