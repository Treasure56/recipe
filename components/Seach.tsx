import React from 'react';
import { View, TextInput } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View className="mt-8 mx-5">
      <View className="relative flex-row items-center bg-light-200 rounded-[35px] p-4">
        <FontAwesome className="absolute left-4" name="search" size={24} color="black" />
        <View className='bg-light rounded-full w-14 aspect-square items-center justify-center absolute right-2'>
      <AntDesign name="swap" size={24} color="black" />
      </View>
        
        <TextInput
          placeholder="Search for a recipe"
          className="pl-12 p-1 flex-1 text-xl font-medium"
        />
      </View>
    </View>
  );
}
