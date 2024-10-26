import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome6 } from '@expo/vector-icons'
import Menu from '@/components/Menu'

export default function About() {
  return (
    <View className='bg-light flex-1'>
        <StatusBar style='dark'/>
        <View className='mt-16 mx-5'>
        <FontAwesome6 name="bars-staggered" size={24} color="black" />
        </View>
        <Menu />
      
    </View>
  )
}