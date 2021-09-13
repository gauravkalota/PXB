import React from 'react'
import { StyleSheet, TouchableOpacity,View,Text } from 'react-native'

export default function custombutn({text,onpress}) {
    return (
        <TouchableOpacity onPress={onpress}>
            <View style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 10,
        paddingVertical: 2,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
    },
})