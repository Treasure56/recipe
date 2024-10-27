import { View, Text } from 'react-native'
import React from 'react'

export default function RecipeContents() {
  return (
    <View className='mt-8 bg-light-200 rounded-t-3xl'>
      <View className='mx-5'>
        <View className='items-center mt-4'>
        <View className='w-10 h-1.5 bg-dark rounded-xl'></View>
        <Text className='text-3xl font-bold text-center mt-5'>Chicken Steak with Grilled {"\n"} Vagetables</Text>
        </View>
      
      </View>
    </View>
  )
}