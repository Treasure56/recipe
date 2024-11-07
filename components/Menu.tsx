import React from 'react'
import { View } from 'react-native'
import MenuCard from './MenuCard'


export default function Menu() {
  return (
    <View className='flex-row items-center mt-8 mx-5'>
      {
        menus.map((menu, index) => (
            <MenuCard key={index} {...menu}/>    
        ))
      }
    </View>
  )
}


const menus = [
    {
        image: require("../assets/images/roundimg1.png"),
        name: 'Chicken',
    },
    {
        image: require("../assets/images/roundimg2.png"),
        name: 'Beef',
    },
    {
        image: require("../assets/images/roundimg3.png"),
        name: 'Fish',
    },
    {
        image: require("../assets/images/roundimg4.png"),
        name: 'Bakery',
    }
]