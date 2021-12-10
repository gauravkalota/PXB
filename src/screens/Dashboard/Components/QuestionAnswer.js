/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const QuestionAnswer = ({onPress}) => {
  return (
    <View>
      <View style={styles.Maincontainer}>
        <View style={styles.border} />
        <View style={styles.itemcontainer}>
          <Text style={styles.questions_text}>
            Have any questions? Ask away
          </Text>
          <Text onPress={onPress} style={styles.answersBtn}>
            {'  '} Get your Answers
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    height: 40,
    backgroundColor: '#F9F9F9',
  },
  border: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    borderWidth: 0.2,
  },
  itemcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questions_text: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Lato',
  },
  answersBtn: {
    fontSize: 12,
    fontWeight: '700',
    color: '#5382F6',
    fontFamily: 'Lato',
  },
});

export default QuestionAnswer;
