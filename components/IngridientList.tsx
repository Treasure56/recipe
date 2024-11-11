import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import IngridientsCard, { IngridientsCardProps } from './IngridientsCard'
import { RecipeDetailed } from '@/types/recipe'


export default function IngridientList({ingridients}:{ingridients:IngridientsCardProps[]}, {}) {
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    className="flex-row mt-5"
  >
    {ingridients.map((item, index) => (
      <IngridientsCard key={index} {...item} />
    ))}
  </ScrollView>
  )
}