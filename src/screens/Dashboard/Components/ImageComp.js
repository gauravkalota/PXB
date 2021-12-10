/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

//////AVATAR_ICON_IF_SOURCE_IS_MENTION/NOT_MENTION
export function IsProfilePictureGiven({style, size, lable, source}) {
  const [isgiven, setIsGiven] = useState(true);
  return (
    <View>
      <Avatar.Image style={style} size={size} source={source} />
    </View>
  );
}
export function NoProfilePictureGiven({style, size, lable}) {
  return (
    <View>
      <Avatar.Text
        style={style}
        color="white"
        size={size}
        label={lable.charAt(0).toUpperCase()}
      />
    </View>
  );
}
