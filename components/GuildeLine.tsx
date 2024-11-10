import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useTailwind } from 'nativewind'
import GuildeLineCard from './GuildeLineCard'
import { RecipeDetailed } from '@/types/recipe'
export type RecipeCardProps = {
    data: RecipeDetailed;
    
  } 

export default function GuildeLine({data}: RecipeCardProps) {
    const steps =[
        {
            icon: "clock-outline",
            title: data.cookingMinutes ? `${data.cookingMinutes} minutes` : '60m',
            color: "#42C1A6",
        },
        {
            icon: "bowl-mix-outline",
            title: data.extendedIngredients.length + " steps",
            color: "#FFBE27",
        },
        {
            icon: "chef-hat",
            title:  data.analyzedInstructions[0].steps.length + " steps",
            color: "#0089D5",
        },
    ]
    console.log({minutes: data.cookingMinutes});
    
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


