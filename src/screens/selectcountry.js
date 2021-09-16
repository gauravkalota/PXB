import React, {useState} from 'react';
import { View,ScrollView, Text, StyleSheet } from 'react-native';
import { Button , Appbar } from 'react-native-paper';



import CountryModalProvider from 'react-native-country-picker-modal'

import CountryPicker from 'react-native-country-picker-modal'


function selectcountry({navigation}) {
    const [selectedCallingCode, setSelectedCallingCode] = useState('');

    const _goBack = () => navigation.navigate('register') ;

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    /////////lib///
    // const [countryCode, setCountryCode] = useState < CountryCode > ('FR')
    // const [country, setCountry] = useState < Country > (null)
    const [withCountryNameButton, setWithCountryNameButton] = useState(false)
    const [withFlag, setWithFlag] = useState(true)
    const [withEmoji, setWithEmoji] = useState (true)
    const [withFilter, setWithFilter] = useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState (false)
    const [withCallingCode, setWithCallingCode] = useState(false)
    
    


    const ContentTitle = ({title,style}) => {
        return(
            <Appbar.Content
            title={<Text style={style}>{title}</Text>}
            style={{left:55}}
            />
        )
    }
    return (
        <View>
            <Appbar.Header style={styles.bar} >
                <Appbar.BackAction onPress={_goBack} />
                <ContentTitle title={'Select a Country'} style={{ color: 'white', fontWeight: "bold" }} />
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
                <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            </Appbar.Header>


            {/* ///////Country List */}


            {/* <CountryModalProvider>
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.welcome}>Welcome to Country Picker !</Text>
                    <CountryPicker
                       
                        {...{
                            allowFontScaling: fontScaling,
                            countryCode,
                            withFilter,
                            excludeCountries: ['FR'],
                            withFlag,
                            withCurrencyButton,
                            withCallingCodeButton,
                            withCountryNameButton,
                            withAlphaFilter,
                            withCallingCode,
                            withCurrency,
                            withEmoji,
                            withModal,
                            withFlagButton,
                            onSelect,
                            disableNativeModal,
                            preferredCountries: ['US', 'GB'],
                            modalProps: {
                                visible,
                            },
                            onClose: () => setVisible(false),
                            onOpen: () => setVisible(true),
                        }}
                    />
                    <Text style={styles.instructions}>Press on the flag to open modal</Text>
                    <Button
                        title={'Open modal from outside using visible props'}
                        onPress={switchVisible}
                    />
                    {country !== null && (
                        <Text style={styles.data}>{JSON.stringify(country, null, 0)}</Text>
                    )}
                </ScrollView>
            </CountryModalProvider> */}


            {/* /////////countryend */}
        </View>
    );
}

const styles = StyleSheet.create({
    bar:{
        backgroundColor:'#034C81',    
        fontWeight:"bold"    
    },
    bar1:{
        height:22,
        left:50,
        
    },
    welcome: {
        fontSize: 17,
        textAlign: 'center',
        margin: 5,
    },
    instructions: {
        fontSize: 10,
        textAlign: 'center',
        color: '#888',
        marginBottom: 0,
    },
    data: {
        maxWidth: 250,
        padding: 10,
        marginTop: 7,
        backgroundColor: '#ddd',
        borderColor: '#888',
        borderWidth: 1 ,
        color: '#777',
    },

});

export default selectcountry;