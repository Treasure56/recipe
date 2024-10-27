import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";

export type RecipeCardProps = {
    title: string;
    duration: string;
    img: any;
    color?: string
};
export default function RecipeCard({color, duration, img, title}: RecipeCardProps) {
  return (
    <Pressable onPress={() => router.push("/recipe")} className=" rounded-3xl items-center p-3 mt-8 mr-4 w-40 h-42 " style={{backgroundColor: color}}>
      <View className="bg-light w-16 h-16  rounded-full items-center justify-center">
        <Image
          className="w-10 h-10"
          source={img}
        />
      </View>
      <Text className="font-semibold text-lg mt-3">{title}</Text>
      <Text className="font-semibold mt-2 text-neutral-700">
        {duration}
      </Text>

      <View className="flex-row items-center mt-3">
        <Pressable className="bg-light rounded-full w-9 aspect-square items-center justify-center mr-3">
          <AntDesign name="hearto" size={18} color="black" />
        </Pressable>
        <Pressable className="bg-light rounded-full w-9 aspect-square items-center justify-center">
        <Feather name="arrow-up-right" size={18} color="black" />
        </Pressable>
      </View>
    </Pressable>
  );
}
