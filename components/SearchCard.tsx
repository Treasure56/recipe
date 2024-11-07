import React from "react";
import { ScrollView, Text, View } from "react-native";
import RecipeCard from "./RecipeCard";

export default function SearchResults() {
  return (
    <View className="mt-8 mx-5">
      <Text className="text-2xl font-semibold">Latest Recipes</Text>
      <ScrollView
        // horizontal
        // showsHorizontalScrollIndicator={false}
        // className="flex-row w-full"
      >
        <View className="flex-row flex-wrap justify-evenly">
        {recipeItems.map((recipeItem, index) => (
          <RecipeCard key={index} {...recipeItem} />
        ))}
        </View>
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
