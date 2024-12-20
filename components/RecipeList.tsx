import React from "react";
import { ScrollView, Text, View } from "react-native";
import RecipeCard from "./RecipeCard";
import { useQuery } from "@tanstack/react-query";
import { fetchRandomRecipes } from "@/actions/fetchRandomRecipes";

export default function RecipeList() {
  const { data, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: async () => await fetchRandomRecipes(),
  });
  // console.log({data})
  return (
    <View className="mt-8 mx-5">
      <Text className="text-2xl font-semibold">Recipes for you</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
        {isLoading ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="">
                   {
                     [1, 2, 3, 4, ].map((item, index) => (
                      <View key={index} className="rounded-xl items-center bg-neutral-100 overflow-hidden mt-8 mr-4  w-[35vw] h-60"></View>
                  ))
                   }
                      </ScrollView>
        ) : (
          // <Text>Loading...</Text>
          data?.map((recipeItem, index) => (
            <RecipeCard key={index} {...recipeItem} title={recipeItem.title} />
          ))
        )}
       
      </ScrollView>
    </View>
  );
}
