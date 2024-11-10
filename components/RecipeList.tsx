import React from "react";
import { ScrollView, Text, View } from "react-native";
import RecipeCard from "./RecipeCard";
import { useQuery } from "@tanstack/react-query";
import { fetchRandomRecipes } from "@/actions/fetchRandomRecipes";

export default function RecipeList() {
  const {data, isLoading} = useQuery({
    queryKey:["recipes"],
    queryFn: async () => await fetchRandomRecipes(),
  })
  // console.log({data})
  return (
    <View className="mt-8 mx-5">
      <Text className="text-2xl font-semibold">Latest Recipes</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
        {
          isLoading ? (
            <Text>Loading...</Text>
          ) : (
            data?.map((recipeItem, index) => (
              <RecipeCard key={index} {...recipeItem} title={recipeItem.title} />
            ))
          )
        }
        {/* {recipeItems.map((recipeItem, index) => (
          <RecipeCard key={index} {...recipeItem} />
        ))} */}
      </ScrollView>
    </View>
  );
}

// const recipeItems = [
//   {
//     title: "Chinese Vagetable",
//     duration: "5 lessons 13 h 12 m",
//     img: require("../assets/images/chicken.png"),
//     color: "#41C1A6",
//   },
//   {
//     title: "Chilli Chicken",
//     duration: "3 lessons 12 h 2 m",
//     img: require("../assets/images/recipe1.png"),
//     color: "#FFCE5D",
//   },
//   {
//     title: "Sweet Yamarita",
//     duration: "1 lesson 1 h 2 m",
//     img: require("../assets/images/recipe2.png"),
//     color: "#009DDD",
//   },
// ];
