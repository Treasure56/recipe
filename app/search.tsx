import { View, Text } from "react-native";
import React from "react";
import Search from "../components/Search";
import { useLocalSearchParams } from "expo-router";
import SearchResults from "@/components/SearchCard";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "@/actions/fetchRecipes";

export default function SearchScreen() {
  const { query } = useLocalSearchParams();

  const { data, isLoading } = useQuery({
    queryKey: ["search", query],
    queryFn: async () => await fetchRecipes(query.toString()),
  });

  // console.log({data});

  return (
    <View className="bg-light flex-1">
      <View className="mt-5 flex-1">
        <Search />
        {isLoading ? (
          <View className="mx-5 flex-row flex-wrap justify-evenly">
         {
           [1, 2, 3, 4, 5, 6].map((item, index) => (
            <View  key={index} className="rounded-xl items-center bg-neutral-100 overflow-hidden mt-8 mr-4  w-[35vw] h-60"></View>
        ))
         }
            </View>
        ) : !data ? (
          <Text>Connection error</Text>
        ) : (
          <SearchResults recipes={data} title={`Search results for "${query}"`} />
        )}
      </View>
    </View>
  );
}


