import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

export default function TouchableText() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>
                Skip
            </Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    container:{alignSelf:"flex-end"}
})


