import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Menu() {
  return (
    <View className='flex-row mt-8'>
      <Image className='flex-1' source={require("../assets/images/roundimg1.png")} />
    </View>
  )
}