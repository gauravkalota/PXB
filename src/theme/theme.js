import * as React from 'react';
import {
    Provider as PaperProvider, DefaultTheme, configureFonts
} from 'react-native-paper';

const fontConfig = {

    ios: {
        regular: {
            fontFamily: 'Lato Light',
            fontWeight: 'normal',
        }
    },
    android: {
        regular: {
            fontFamily: 'LatoRegular',
            fontWeight: 'normal',
        },
    }
};


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#CC1414',       ///// primary
        accent: '#f1c40f',
        surface: '#618CEF'    //////containertype
    },
    fonts: configureFonts(fontConfig)
};

export default theme 