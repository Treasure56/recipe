import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import IngridientsCard from './IngridientsCard';

export default function Ingridients() {
  const [isActive, setIsActive] = useState(false);

  return (
  <View className='mx-5'>
      <View className="flex-row mt-5 bg-light items-center justify-between rounded-[35px] p-2">
      <Pressable
        onPress={() => setIsActive(true)}
        className={`rounded-[35px] py-3 px-10 items-center justify-center ${
          isActive ? 'bg-light-200' : 'bg-white'
        }`}
      >
        <Text className="text-xl font-semibold">Ingredients</Text>
      </Pressable>
      <Pressable
        onPress={() => setIsActive(false)}
        className={`rounded-[35px] py-4 px-10 items-center justify-center ${
          !isActive ? 'bg-light-200' : 'bg-white'
        }`}
      >
        <Text className="text-xl font-semibold">Ingredients</Text>
      </Pressable>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row mt-5'>
    {
        lists.map((item, index) => (
            <IngridientsCard key={index} {...item} />
        ))
    }
    </ScrollView>
  </View>
  );
}


const lists = [
    {
        img: require("../assets/images/chips.png"),
        title: "Chopped",
        name: "Potato"
    },
    {
        img: require("../assets/images/raw.png"),
        title: "500 Gm",
        name: "Chicken"
    },
    {
        img: require("../assets/images/tomatoes.png"),
        title: "Baby",
        name: "Tomatoes"
    },
    {
        img: require("../assets/images/Parsley.jpeg"),
        title: "Fresh",
        name: "Parsley"
    },
]
