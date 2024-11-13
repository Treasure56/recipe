import { View, Text } from 'react-native'
import React from 'react'
import { InstructionStep } from '@/types/steps'
import StepCard from './StepCard'

export default function Steps({data}:{data:{
  name: string
  steps: InstructionStep[]
}[]}) {
  // console.log(data[0].steps);
  
  return (
    <View className='bg-light mt-4 rounded-md p-4 flex-1'>
      <Text className='text-3xl  font-bold text-start'>Steps</Text>
      {
       data.map((step, index) => (
         <View key={index}>
          {
             step.steps.map((step, index) => 
              <StepCard key={index} {...step} />
            )
          }
         </View>
       ))
      }
    </View>
  )
}