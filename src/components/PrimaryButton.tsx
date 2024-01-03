import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Param {
    title: string;
    onPress: any;
}

const PrimaryButton = (param: Param) => {
  return (
    <Pressable style = {styles.button} onPress={param.onPress}>
        <Text style = {styles.text}>{param.title}</Text>
    </Pressable>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5964AB',
        width: 291,
        height: 44,
        borderRadius: 10
    },

    text: {
        color: '#FFFFFF',
        fontSize: 12,
        lineHeight: 15,
        fontWeight: '500',
        textAlign: 'center'
    }
})