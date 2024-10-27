import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome6 } from '@expo/vector-icons'
import Menu from '@/components/Menu'
import Search from '@/components/Seach'
import Premuim from '@/components/Premuim'
import RecipeList from '@/components/RecipeList'

export default function About() {
  return (
    <View className='bg-light flex-1'>
        <StatusBar style='dark'/>
        <View className='mt-16 mx-5'>
        <FontAwesome6 name="bars-staggered" size={24} color="black" />
        </View>
        <Menu />
        <View className='mt-10 mx-5'><Text className='font-semibold text-5xl'>I would like to cook</Text></View>
        <Search />
        <Premuim />
        <RecipeList />
      
    </View>
  )
}