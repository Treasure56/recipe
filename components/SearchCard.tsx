import React from "react";
import { ScrollView, Text, View } from "react-native";
import RecipeCard from "./RecipeCard";
import { Recipe } from "@/types/recipe";

export default function SearchResults({recipes, title}:{recipes:Recipe[], title?:string}) {
  return (
    <View className="mt-8 mx-5 flex-1">
      <Text className="text-2xl font-semibold">{title}</Text>
      <ScrollView
        // horizontal
        showsVerticalScrollIndicator={false}
        // className="flex-row w-full"
      >
        <View className="flex-row flex-wrap justify-evenly">
        {recipes.map((recipeItem, index) => (
          <RecipeCard key={index} {...recipeItem} />
        ))}
        </View>
        <View className="h-20"/>
      </ScrollView>
    </View>
  );
}

const recipeItems = [
  {
    title: "Chinese Vagetable",
    duration: "5 lessons 13 h 12 m",
    img: require("../assets/images/chicken.png"),
    color: "#41C1A6",
  },
  {
    title: "Chilli Chicken",
    duration: "3 lessons 12 h 2 m",
    img: require("../assets/images/recipe1.png"),
    color: "#FFCE5D",
  },
  {
    title: "Sweet Yamarita",
    duration: "1 lesson 1 h 2 m",
    img: require("../assets/images/recipe2.png"),
    color: "#009DDD",
  },
];
