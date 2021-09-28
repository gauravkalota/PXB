import React, {useState, useEffect} from 'react';
import {SectionList ,SafeAreaView,View,ScrollView, StyleSheet, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Button , Appbar, Modal,Text, Searchbar, StatusBar, TextInput } from 'react-native-paper';


import Country from '../../countries.json';
import Icons from 'react-native-vector-icons/Feather'
import IconsS from 'react-native-vector-icons/Fontisto'

import { Fragment } from 'react';
import filter  from 'lodash.filter';



function selectcountry({navigation, route})  {

    const [searchData, setSearchData] = useState(Country);
    const [loggedIn, setLoggedIn] = useState(true);
    const [hidecross, setHideCross] = useState(false)

    useEffect (()=> {
   
    
    },[])
    
/////////Render for List///////////////////
    const renderCountries = ({item}) => {
        return(
            <TouchableOpacity onPress={() => {
                navigation.navigate({
                    name:"register",
                    params : {item : item.dial_code}
                })
            }
                
            } >
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

// cross_icon............
    const crossfn = () => {
        setLoggedIn(true)
        setSearchData(Country);

    }

          
 ////////////search function////////////////////   
    const filter = (text) => {
        if (text) {
            setHideCross(true);
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

        const buttpress = ()=> {
            setLoggedIn(false)
        }
    
    return (
        <Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: "#034C81" }} /> 
            {/* Used for area above SafeAreaView styling */}
            <SafeAreaView>
               <View>
                   {loggedIn ? (
                        <View style={{ backgroundColor: '#034C81', height: 40, width: '100%', flexDirection: 'row' }} >
                            <Text style={{ color: 'white', left: 110, top: 7, fontSize: 20, fontWeight: 'bold' }} >Select a Country</Text>
                            <Icons name="arrow-left" size={25} color="white" style={{ right: 135, top: 7 }} onPress={() => navigation.navigate('register')}  />
                            <IconsS name="search" color="white" size={22} style={{ left:186, top: 9 }} onPress={buttpress}  />
                        </View>
                   ) :  (
                            <TextInput
                                style={styles.barS}
                                placeholder="Search countries"
                                onChangeText={(text) => filter(text)}
                                autoCorrect={false}
                                selectionColor="white"
                                theme={{colors:{text:'white'}}}
                                // theme change for specific component
                                placeholderTextColor="#bfbfbf"
                                left={<TextInput.Icon name="arrow-left" color="white" onPress={()=>navigation.navigate('register')} />}
                                right={<TextInput.Icon name= {() => <IconsS name="close-a" onPress={crossfn} color="white" style={{top:4}} />}/>}
                            />
                   )
                   }

            </View>
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
        left:5



    },
    customicon2: {
        color: 'white',

        

    },
    barS: {
        backgroundColor: '#034C81',
        width:'100%',
        height:55,
        borderBottomRightRadius:-10,
        borderBottomLeftRadius:-10,
        borderTopLeftRadius:-10,
        borderTopRightRadius:-10,
        paddingBottom:0,
        color:'white'
        
    },
    searchButton:{
        color:'black',
        top:100,
        left:100,
        
    
    }
    

});

export default selectcountry;