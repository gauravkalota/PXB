import React from 'react'
import { StyleSheet, TouchableOpacity,View,Text } from 'react-native'
import { color } from 'react-native-elements/dist/helpers';

const AppButton = ({onpress,title, disabled, style}) => {
    return (
        <TouchableOpacity  disabled={disabled}  onPress={onpress} style={style}  >
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}
export default AppButton;

const styles = StyleSheet.create({
    appButtonContainer: {
        top:15,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 13,
        paddingHorizontal: 123
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        // textTransform: "uppercase"
    }
})