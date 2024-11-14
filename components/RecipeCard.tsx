import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Recipe } from "@/types/recipe";
import { getRecipeInformation } from "@/actions/getRecipeInformation";
import { useQuery } from "@tanstack/react-query";

export type RecipeCardProps = Recipe & {
    duration?: string;
    useDynamicImage?: boolean;
};
export default function RecipeCard({ duration, image: img, title, id, useDynamicImage = false}: RecipeCardProps) {
  const [color] = useState(()=>{
    // return(colors[Math.floor(Math.random() * colors.length)])
  })
// console.log({title});

const { data, isLoading } = useQuery({
  queryKey: ["recipe", id],
  queryFn: async () => {
    if(!useDynamicImage) return null;
    return await getRecipeInformation(id.toString())
  },
});
  
  return (
    <Pressable onPress={() => router.push(`/recipe?id=${id}`)} className=" !rounded-xl items-center bg-neutral-100 overflow-hidden mt-8 mr-4  w-[40vw] h-60 ">
      <View className="bg-light w-full h-24  rounded-md overflow-hidden items-center justify-center">
        <Image resizeMode="cover"
          className="w-full h-full"
          source={{uri:useDynamicImage && data ? data.image : img}}
        />
      </View>
      <Text className="font-semibold text-lg mt-4 flex-1 text-center p-2">{title}</Text>
      <Text className="font-semibold mt-2 text-neutral-700">
        {duration}
      </Text>

      <View className="flex-row items-center mb-2">
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

// const colors = [
  // "#FF9F68", // Soft Peach
  // "#F2C94C", // Warm Honey Yellow
  // "#A8DADC", // Light Minty Blue
  // "#F4A261", // Caramel Orange
  // "#6D597A", // Plum Purple
  // "#81B29A", // Sage Green
  // "#F28482", // Salmon Pink
  // "#E5989B", // Rose Beige
  // "#F6BD60", // Sunlit Gold
  // "#BBE1FA", // Soft Sky Blue
  // "#E63946", // Berry Red
  // "#A8D8EA", // Icy Blue
  // "#F67280", // Melon Pink
  // "#FFD166", // Golden Yellow
  // "#84A98C"  // Dusty Green
// ]
