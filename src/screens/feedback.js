/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Appbar, TextInput, Button} from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';
// create a component
const feedback = () => {
  const [rating, setRating] = useState(0);

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Appbar.Header style={styles.appBarHead}>
          <Appbar.Content
            color="#F7F7F7"
            style={styles.appBarText}
            title="Feedback"
          />
        </Appbar.Header>
      </View>
      <View style={{paddingHorizontal: 20, paddingVertical: 19}}>
        <View style={styles.nextContainer}>
          <Text style={styles.textHeading}>Rate the Hospital</Text>
          <Text style={styles.textSubHeading}>Carolinas Medical Center</Text>
          <StarRating
            rating={rating}
            onChange={setRating}
            style={styles.stars}
            color="#034C81"
            starSize={36}
            starStyle={styles.STAR}
          />
          <TextInput
            style={styles.feedbackTextinput}
            mode="outlined"
            placeholder="Share your feedback"
            placeholderTextColor={'#666666'}
          />
          <Button mode="contained" uppercase={false}>
            <Text style={styles.btnTXT}>Submit</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  appBarHead: {
    backgroundColor: '#034C81',
  },
  appBarText: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Lato',
  },
  nextContainer: {
    height: '78%',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.3,
    alignItems: 'center',
  },
  textHeading: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Lato',
    marginTop: 24,
  },
  textSubHeading: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato',
    marginTop: 8,
  },
  stars: {
    alignSelf: 'center',
    marginTop: 24,
  },
  feedbackTextinput: {
    width: '100%',
    // height: '58%',
    marginTop: 25,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  BTN: {
    backgroundColor: '#5382F6',
    color: '#5382F6',
  },
  btnTXT: {},
});

export default feedback;
