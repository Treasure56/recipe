import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import GuildeLine from "./GuildeLine";
import Ingridients from "./Ingridients";
import { Recipe, RecipeDetailed } from "@/types/recipe";
export type RecipeCardProps = {
  data: RecipeDetailed;
  
} 

export default function RecipeContents({ data }: RecipeCardProps) {
  console.log({title: data.title});
  return (
    <View className="mt-8 bg-light-200 flex-1 rounded-t-3xl">
      <View className="mx-5">
        <View className="items-center mt-4">
          <View className="w-10 h-1.5 bg-dark rounded-xl"></View>
          <Text className="text-3xl font-bold text-center mt-5">
            {data.title}
          </Text>
        </View>
      </View>
      <View className="justify-between mx-5 flex-row mt-5 items-center">
        <View className="flex-row items-center">
          <Image
            className="w-12 h-12 rounded-full mr-2"
            source={require("../assets/images/user.jpeg")}
          />
          <Text className="text-lg font-bold">
            {data.sourceName} <Text className="text-neutral-400">({data.healthScore})</Text>
          </Text>
        </View>
        <Pressable className="bg-[#F84D50] rounded-full w-9 aspect-square items-center justify-center">
          <MaterialCommunityIcons name="cards-heart" size={18} color="white" />
        </Pressable>
      </View>
      <GuildeLine  data={data}/>
      <Ingridients />
      <View className="h-10" />
    </View>
    
  );
}
