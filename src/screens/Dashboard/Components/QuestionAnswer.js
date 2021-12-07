import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const QuestionAnswer = ({onPress}) => {
  return (
    <View>
      <View style={{height: 40, backgroundColor: '#F9F9F9'}}>
        <View
          style={{
            width: '100%',
            backgroundColor: '#1a1a1a',
            borderWidth: 0.1,
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              fontFamily: 'Lato',
            }}>
            Have any questions? Ask away
          </Text>
          <Text
            onPress={onPress}
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: '#5382F6',
              fontFamily: 'Lato',
            }}>
            Get your Answers
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default QuestionAnswer;
