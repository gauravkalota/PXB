import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Panel() {
    return <Image source={require('./Panel')} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        marginBottom: 8,
        top:200
    },
})