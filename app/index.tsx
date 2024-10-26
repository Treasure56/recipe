import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'

export default function Index() {
  return (
    <View className='flex-1 bg-light'>
      <StatusBar style='dark' />
      <View className='mt-20 flex-row pb-2 relative'>
        <Image resizeMode='cover' className='flex-1 aspect-square' source={require("../assets/images/screen1.png")} />
        <Image className=' aspect-square h-24 w-24 mr-5 absolute right-3 top-[480px]' source={require("../assets/images/dot2.png")}/>
      </View>
      
      <View className='mx-5 mt-16'>
        <Text className='text-xl uppercase mr-5 text-red-400'>Unlimited premuim reciepes</Text>
      </View>

      <View className='mx-5 mt-8'>
      <Text className='text-7xl font-bold text-dark'>Start {"\n"}Cooking</Text>
      </View>
      <View className='mt-5 flex-row mx-5'>
        <Pressable onPress={() => router.push("/about")} className='rounded-[35px] mr-6 border-2 border-dark bg-secondary items-center py-5 flex-1'><Text className='text-dark font-semibold text-xl'>Login</Text></Pressable>
        <Pressable className='rounded-[35px] border-2 border-dark bg-primary items-center py-5 flex-1'><Text className='text-dark font-semibold text-xl'>Sign up</Text></Pressable>
      </View>
    </View>
  )
}