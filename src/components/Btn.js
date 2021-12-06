import React from 'react';
import {View,Text} from 'react-native';
import {Button} from 'react-native-paper';
import { DefaultTheme } from '../../src/theme/theme';


const Btn = ({onPress,title,style,labelStyle}) => {
    return(
       <Button theme={DefaultTheme} compact={true} labelStyle={labelStyle} uppercase={false} style={style} mode="contained" onPress={onPress} >
          {title}
       </Button>
    );
};

export default Btn;
