//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
//import { Avatar } from 'react-native-elements';

// create a component
const ImageComp = ({size, label, source}) => {
  const [imagePresent, setImagePresent] = useState(true);

  return (
    <>
      {imagePresent ? (
        <View>
          <Avatar.Image size={size} style={styles.pp} source={source} />
        </View>
      ) : (
        <View>
          <Avatar.Text size={size} style={styles.pk} color="white" label="XX" />
        </View>
      )}
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  pp: {
    width: 0,
    height: 40,
    //borderRadius:18,
    top: -974,
    left: 316,
  },
  pk: {
    width: 0,
    height: 40,
    //borderRadius:18,
    top: -974,
    left: 316,
  },
});

//make this component available to the app
export default ImageComp;
