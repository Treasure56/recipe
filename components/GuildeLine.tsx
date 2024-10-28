import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useTailwind } from 'nativewind'
import GuildeLineCard from './GuildeLineCard'

export default function GuildeLine() {
  return (
    <View className=' flex-row mt-5 mx-5 bg-white rounded-2xl p-3'>
       {
        steps.map((step, index) => 
            <GuildeLineCard key={step.icon} {...step} />
        )
       }
    </View>
  )
}


const steps =[
    {
        icon: "clock-outline",
        title: "30 min",
        color: "#42C1A6",
    },
    {
        icon: "bowl-mix-outline",
        title: "10 steps",
        color: "#FFBE27",
    },
    {
        icon: "chef-hat",
        title: "10 steps",
        color: "#0089D5",
    },
]