import React, {useState} from 'react';
import { View,ScrollView, Text, StyleSheet } from 'react-native';
import { Button , Appbar } from 'react-native-paper';


function selectcountry({navigation}) {
    const [selectedCallingCode, setSelectedCallingCode] = useState('');

    const _goBack = () => navigation.navigate('register') ;

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    
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
        
    }

});

export default selectcountry;