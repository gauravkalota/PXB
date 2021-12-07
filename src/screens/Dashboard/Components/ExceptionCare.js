//import liraries
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MainButton from './MainButton';
// create a component
const ExceptionCare = ({
  card_text1,
  card_text2,
  card_text3,
  card_text4,
  card_text5,
}) => {
  const [more, setMore] = useState(true);
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 364,
        height: more ? 365 : 515,
        left: 13,
        borderRadius: 4,
        backgroundColor: 'rgba(83,130,246,0.08)',
      }}>
      <View style={styles.container1}>
        <Text style={styles.maintext}>My Exceptional Care</Text>
        <TouchableOpacity
          style={styles.editbtn}
          onPress={() => console.log('Pressed')}>
          <Text style={styles.edittext}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <View style={styles.cardview1}>
          <Text style={styles.cardtext}>{card_text1}</Text>
        </View>
        <View style={styles.cardview2}>
          <Text style={styles.cardtext}>{card_text2}</Text>
        </View>
        <View style={styles.cardview2}>
          <Text style={styles.cardtext}>{card_text3}</Text>
        </View>
        {more ? null : (
          <>
            <View style={styles.cardview2}>
              <Text style={styles.cardtext}>{card_text4}</Text>
            </View>
            <View style={styles.cardview2}>
              <Text style={styles.cardtext}>{card_text5}</Text>
            </View>
          </>
        )}
        <View>
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
  container1: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  maintext: {
    fontSize: 18,
    fontWeight: '700',
    //marginHorizontal: 15,
    //marginTop: 23,
    fontFamily: 'Lato',
  },
  editbtn: {
    width: 80,
    height: 30,
    backgroundColor: '#ffff',
    borderRadius: 4,
    borderColor: '#5382F6',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edittext: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5382F6',
    fontFamily: 'Lato',
  },
  container2: {
    paddingBottom: 25,
  },
  cardview1: {
    borderRadius: 4,
    width: '90%',
    height: 64,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
  },
  cardview2: {
    borderRadius: 4,
    marginTop: 10,
    width: '90%',
    height: 64,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  cardtext: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: 'grey',
    fontFamily: 'Lato',
    paddingTop: 20,
  },
});
