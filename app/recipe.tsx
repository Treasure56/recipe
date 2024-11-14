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
        className="bg-[#E5FAF4] z-[20] rounded-xl w-10 aspect-square items-center justify-center absolute left-5 top-9"
      >
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </Pressable>
      {isLoading ? (
        <View className=" mx-5">
          <View className="rounded-lg bg-neutral-200 h-60 mt-24"></View>
          <View className="flex-row justify-between items-center mt-10">
            <View className="rounded-full bg-neutral-200 w-16 h-16"></View>
            <View className="rounded-lg flex-1 ml-4 bg-neutral-200 h-6"></View>
          </View>
          <View className="rounded-3xl bg-neutral-200 h-20 mt-6"></View>
          <View className="rounded-lg bg-neutral-200 h-60 mt-10"></View>
        </View>
      ) : !data ? (
        <Text>Connection error</Text>
      ) : (
        <ScrollView className="bg-white flex-1">
          <StatusBar style="dark" />
          <View className="mt-20 pb-2 mx-5 relative">
            <View className="flex-row  rounded-xl overflow-hidden items-center justify-center">
              <Image
                resizeMode="cover"
                className="flex-1 aspect-[5/4] "
                source={{ uri: data.image }}
              />
            </View>
          </View>
          <RecipeContents data={data} />
        </ScrollView>
      )}
    </>
  );
}
