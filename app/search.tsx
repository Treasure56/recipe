import { View, Text } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import { useLocalSearchParams } from 'expo-router'
import SearchResults from '@/components/SearchCard';

export default function SearchScreen() {
    const {query} = useLocalSearchParams();
    
  return (
    <View className='bg-light flex-1'>
        <View className='mt-10'>
        <Search />  
        <SearchResults />
            </View>   
    </View>
  )
}