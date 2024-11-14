import React from "react";
import { ScrollView, Text, View } from "react-native";
import RecipeCard from "./RecipeCard";
import { useQuery } from "@tanstack/react-query";
import { fetchRandomRecipes } from "@/actions/fetchRandomRecipes";
import { fetchSimilarRecipes } from "@/actions/fetchSimilarRecipes";

export default function SimilarRecipes({id}:{id:number}) {
  const { data, isLoading } = useQuery({
    queryKey: ["similar", id],
    queryFn: async () => await fetchSimilarRecipes(id.toString()),
  });
  console.log({data})
  return (
    <View className="mt-8 mx-5">
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
            <RecipeCard useDynamicImage key={index} {...recipeItem} title={recipeItem.title} />
          ))
        )}
       
      </ScrollView>
    </View>
  );
}
