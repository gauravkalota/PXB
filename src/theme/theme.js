import * as React from 'react';
import {
    Provider as PaperProvider, DefaultTheme, configureFonts
} from 'react-native-paper';

const fontConfig = {

    ios: {
        regular: {
            fontFamily: 'Roboto Bold Italic',
            fontWeight: 'normal',
        }
    },
    android: {
        regular: {
            fontFamily: 'sans-serif',
            fontWeight: 'normal',
        },
    }
};


const theme = {
    // ...DefaultTheme,
    // colors: {
    //     ...DefaultTheme.colors,
    //     primary: '#B6EDF9',       ///// primary
    //     accent: '#f1c40f',
    //     surface: '#618CEF'    //////containertype
    // },
    fonts: configureFonts(fontConfig)
};

export default theme