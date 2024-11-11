import { RecipeDetailed } from '@/types/recipe'
import React from 'react'
import { View } from 'react-native'
import GuildeLineCard from './GuildeLineCard'
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
            title:  data.analyzedInstructions[0].steps.length + " steps",
            color: "#FFBE27",
          },
          {
            icon: "currency-usd",
            title:  " $" + data.pricePerServing,
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


