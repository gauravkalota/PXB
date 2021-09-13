
import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
    return <Image source={require('../assets/images/logo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 180,
        height: 130,
        marginBottom: 8,
        top:-100
    },
})