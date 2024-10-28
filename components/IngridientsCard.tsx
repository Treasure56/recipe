import { View, Text, Image} from 'react-native'
import React from 'react'

export type IngridientsCardProps = {
    img: any
    title: string
    name: string
}
export default function IngridientsCard({img, title, name}: IngridientsCardProps) {
  return (
   <View>
     <View className='bg-light px-4 py-6 w-28 items-center rounded-3xl mr-3'>
        <Image className='h-14 w-14' source={img}/>
        <Text className='text-lg font-semibold mt-5 text-center'>{title} {'\n'} {name}</Text>
    </View>
   </View>
  )
}