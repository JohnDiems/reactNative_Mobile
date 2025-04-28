import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>register Form</Text>
      <Link href="/" style={styles.link}>Back Home</Link>
    </View>
  )
}

export default register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        fontSize: 16,
        color: 'blue',
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})