import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { InstructionStep } from '@/types/steps'

export default function StepCard({ingredients, number, step}:InstructionStep) {
  return (
    <View className=''>
        <View className='mt-4 mr-3 flex-row'>
      <Text className='mr-4'>{number}</Text>
      <View className=''>
            <Text>{step}</Text>
            {ingredients.length > 0 && (
              <View className='flex-row mt-2 '>
                <Text className='mr-4 font-semibold'>Ingredients:</Text>
                <View className='flex-row flex-wrap'>
                  {
                    ingredients.map((ingredient, index) => (
                      <View key={index} className=' bg-red-100 rounded-[30px] mt-1  mr-2 py-0.5 px-2   '>
                        <Text className='text-dark'>{ingredient.name}</Text>
                      </View>
                    ))
                  }
                </View>
              </View>
            )}
      </View>
    </View>
    </View>
  )
}
