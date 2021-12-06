import React from 'react'
import { StyleSheet, TouchableOpacity,View,Text } from 'react-native'

const AppButton = ({onpress,title,style,disabled}) => {

     

    return (
        <TouchableOpacity disabled={disabled}    onPress={onpress} style={style}  >
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}
export default AppButton;

const styles = StyleSheet.create({
    
    appButtonContainer: {
        top:15,
        height:50,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 13,
        paddingHorizontal: 123
    },
    appButtonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "500",
        top:5,
        left:12,
        //textTransform: "uppercase"
    }
})