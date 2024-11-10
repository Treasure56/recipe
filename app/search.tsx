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
          <Text>Loading...</Text>
        ) : !data ? (
          <Text>Connection error</Text>
        ) : (
          <SearchResults recipes={data} title={`Search results for "${query}"`} />
        )}
      </View>
    </View>
  );
}
