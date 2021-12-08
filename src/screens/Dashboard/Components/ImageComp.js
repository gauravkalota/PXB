/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AvatarIcon = () => {
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

  return (
    <View style={styles.container}>
      <Text>AvatarIcon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default AvatarIcon;
