import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTailwind } from 'nativewind'

export type GuildeLineCardProps = {
  icon: string
  title: string
  color: string
}
export default function GuildeLineCard({color, icon, title}: GuildeLineCardProps) {
  return (
    <View className='justify-center mx-5 items-center flex-1'>
      <MaterialCommunityIcons name={icon as any} style={useTailwind({className: "text-2xl mt-1"}) as any} color={color} />
      <Text className='mt-1 font-semibold text-lg'>{title}</Text>
    </View>
  )
}