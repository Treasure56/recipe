import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import RecipeContents from "@/components/RecipeContents";
import { router, useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getRecipeInformation } from "@/actions/getRecipeInformation";

export default function Recipe() {
  const { id } = useLocalSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: ["recipe", id],
    queryFn: async () => await getRecipeInformation(id.toString()),
  });
  return (
    <>
      <Pressable
        onPress={() => router.back()}
        className="bg-[#E5FAF4] z-[20] rounded-xl w-10 aspect-square items-center justify-center absolute left-5 top-12"
      >
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </Pressable>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : !data ? (
        <Text>Connection error</Text>
      ) : (
        <ScrollView className="bg-white flex-1">
          <StatusBar style="dark" />
          <View className="mt-16 pb-2 mx-5 relative">
            <View className="flex-row">
              <Image
                resizeMode="contain"
                className="flex-1 aspect-[5/4] "
                source={{uri:data.image}}
              />
            </View>
          </View>
          <RecipeContents data={data} />
        </ScrollView>
      )}
    </>
  );
}
