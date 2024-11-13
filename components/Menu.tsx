import React from 'react'
import { View, Pressable } from 'react-native'
import MenuCard from './MenuCard'
import { router } from 'expo-router'


export default function Menu() {
  return (
    <View>
    <View className='flex-row flex-1 items-center mt-8 mx-5'>
      {menus.map((menu, index) => (
        <Pressable
        key={index}
        onPress={() => {
          router.push(`/search?query=${menu.name}`);
        }}
        >
          <MenuCard {...menu} />
        </Pressable>
      ))}
    </View>
    <View className='flex-row flex-1 items-center mx-5'>
      {categories.map((category, index) => (
        <Pressable
        key={index}
        onPress={() => {
          router.push(`/search?query=${category.name}`);
        }}
        >
          <MenuCard {...category} />
        </Pressable>
      ))}
    </View>
  </View>
  );
}

const menus = [
  {
    image: require("../assets/images/img4.png"),
    name: 'Breakfast',
  },
  {
    image: require("../assets/images/img3.png"),
    name: 'Lunch',
  },
  {
    image: require("../assets/images/img2.png"),
    name: 'Dinner',
  },
  {
    image: require("../assets/images/img1.png"),
    name: 'Dessert',
  },
];
const categories = [
  {
    image: require("../assets/images/img8.png"),
    name: 'Snacks',
  },
  {
    image: require("../assets/images/img7.png"),
    name: 'Beverages',
  },
  {
    image: require("../assets/images/img6.png"),
    name: 'Salads',
  },
  {
    image: require("../assets/images/img5.png"),
    name: 'Appetizers',
  },
];
