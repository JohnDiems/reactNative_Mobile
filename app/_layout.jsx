import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import {Stack} from 'expo-router'
import React from 'react'

const _layout = () => {

    const colorScheme = useColorScheme()
    console.log(colorScheme);
    
  return (
    <View style={{flex: 1}}>
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="register" options={{title: 'Register'}}/>
        </Stack>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({})