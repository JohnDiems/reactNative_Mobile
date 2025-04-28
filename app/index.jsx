import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { Link } from 'expo-router'
import logo from '../assets/davao.png'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
      <Text style={styles.title}> GET STARTED </Text>
      <Text>HMIS MOBILE</Text>
      <Link href="/register" style={styles.link}>Register here!</Link>
    </View>
  )
}

export default Home

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
    logo: {
        width: 100,
        height: 100,
        marginVertical: 20,
    },
    link: {
        fontSize: 16,
        color: 'blue',
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})