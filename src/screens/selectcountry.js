import React, {useState, useEffect} from 'react';
import {SectionList ,SafeAreaView,View,ScrollView, StyleSheet, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Button , Appbar, Modal,Text, Searchbar, StatusBar } from 'react-native-paper';

import AlphabetList from "react-native-flatlist-alphabet";

import Country from '../../countries.json';
import Icons from 'react-native-vector-icons/Feather'
import IconsS from 'react-native-vector-icons/Fontisto'

import { Fragment } from 'react';
import filter  from 'lodash.filter';



function selectcountry({navigation})  {

    const [searchData, setSearchData] = useState(Country);

    useEffect (()=> {
   
    
    },[])
    
/////////Render for List///////////////////
    const renderCountries = ({item}) => {
        return(
            <TouchableOpacity>
                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 0.2 }} ></View>
                <View style={{height:50,paddingLeft:22 , paddingVertical:10}}>
                    <Text style={{ fontSize: 16, justifyContent: 'center', alignSelf: 'flex-start', color:'#050505'}} >{item.flag}     {item.value} ({item.dial_code})</Text>
                </View>
                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 0.2 }} ></View>
            </TouchableOpacity>
        )
    }

///////////section header for alphabetic diversions/////////
    const renderSectionHeader = ({section}) => {
        return (  
            <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
            </View>
        );
    };

          
 ////////////search function////////////////////   
    const filter = (text) => {
        if (text) {
            let newData = [];
            for(var i = 0; i<Country.length; i++) {
                const dataItem = Country[i];
                const filterItem = dataItem.data.filter(
                    (item)=> {
                        const itemData = item.value 
                        ? item.value.toLowerCase()
                        : ''.toLowerCase();
                    
                    const textData = text.toLowerCase();
                    return itemData.indexOf(textData) > -1 ;
                    });
                    console.log('whichData', dataItem )
                    if(filterItem.length > 0 ) {
                        const obj ={
                            title : dataItem.title,
                            data: filterItem
                        }
                        newData.push(obj)
                       }    
                    }
                console.log("Search result => " + JSON.stringify(newData));
                setSearchData(newData);
            }  else {
                setSearchData(Country);
            }
        }
    
    return (
        <Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: "#034C81" }} /> 
            {/* Used for area above SafeAreaView styling */}
            
            <SafeAreaView>
              <Searchbar
                style={styles.barS}
                placeholder="Search countries"
                onChangeText={(text) =>  filter(text) }
                autoCorrect={false}
                icon={() => <Icons name="arrow-left" size={25} style={styles.customicon1} onPress={() => navigation.navigate('register')} /> }
                // icon={() => <Icons name="search" size={25} style={styles.searchButton} />}  
            />
                {/* <IconsS name="search" size={20} style={styles.searchButton} onPress={()=> console.log()} /> */}
            <SectionList
                sections={searchData}
                renderItem={renderCountries}
                renderSectionHeader={renderSectionHeader}
                indexLetterColor={'white'}
                indexLetterSize={0.1}
                keyExtractor={(item, index) => String(index) }
                />
            </SafeAreaView>
        </Fragment>
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
    sectionHeaderContainer: {
        marginVertical: 0,
        backgroundColor: "#e6e6e6",
        height:35,
        marginTop:0
    },

    sectionHeaderLabel: {
        fontSize: 14,
        color: "#202020",
        fontWeight:'600',
        paddingLeft:18,
        top:8
    },
    customicon1:{
        color:'white',
        left:10



    },
    customicon2: {
        color: 'white',

        

    },
    barS: {
        backgroundColor: '#034C81',
        fontWeight: "bold",
        borderRadius:0,
    },
    searchButton:{
        color:'white',
        bottom:30,
        left:350,
        
    
    }
    

});

export default selectcountry;