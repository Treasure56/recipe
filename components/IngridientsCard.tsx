import { View, Text, Image} from 'react-native'
import React from 'react'
import { Ingredient } from '@/types/Ingredients'

export type IngridientsCardProps = Ingredient
export default function IngridientsCard({image, name}: IngridientsCardProps) {
  // console.log({image});
  
  return (
   <View>
     <View className='bg-light h-48 px-4 py-6 w-28  items-center rounded-3xl mr-3'>
        <Image className='h-14 w-14' source={{uri:`https://spoonacular.com/cdn/ingredients_250x250/${image}`}}/>
        <Text className='text-lg font-semibold mt-5 text-center'> {name}</Text>
    </View>
   </View>
  )
}