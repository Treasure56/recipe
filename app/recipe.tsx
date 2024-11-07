import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import RecipeContents from "@/components/RecipeContents";
import { router } from "expo-router";

export default function Recipe() {
  return (
    <>
      <Pressable
        onPress={() => router.back()}
        className="bg-[#E5FAF4] z-[20] rounded-xl w-10 aspect-square items-center justify-center absolute left-5 top-12"
      >
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </Pressable>
      <ScrollView className="bg-white flex-1">
        <StatusBar style="dark" />
        <View className="mt-16 pb-2 mx-5 relative">
          <View className="flex-row">
            <Image
              resizeMode="contain"
              className="flex-1 aspect-[5/4] "
              source={require("../assets/images/recipe3.png")}
            />
          </View>
        </View>
        <RecipeContents />
      </ScrollView>
    </>
  );
}
