import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const QuestionAnswer = ({onPress}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.border} />
        <View style={styles.itemcontainer}>
          <Text style={styles.text1}>Have any questions? Ask away</Text>
          <Text onPress={onPress} style={styles.text2btn}>
            {'  '} Get your Answers
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  text1: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Lato',
  },
  text2btn: {
    fontSize: 12,
    fontWeight: '700',
    color: '#5382F6',
    fontFamily: 'Lato',
  },
});

export default QuestionAnswer;
