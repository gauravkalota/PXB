/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

//////AVATAR_ICON_IF_SOURCE_IS_MENTION/NOT_MENTION

export function ProfilePictureIcon({style, size, lable, source}) {
  return (
    <View>
      {source ? (
        <Avatar.Image style={style} color="white" size={size} source={source} />
      ) : (
        <Avatar.Text
          style={style}
          color="white"
          size={size}
          label={lable.charAt(0).toUpperCase()}
        />
      )}
    </View>
  );
}
