import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import Menu from "@/components/Menu";
import Search from "@/components/Search";
import Premuim from "@/components/Premuim";
import RecipeList from "@/components/RecipeList";
import { router } from "expo-router";

export default function About() {
  return (
    <ScrollView className="bg-light ">
      <StatusBar style="dark" />
      
      <View className="mt-20 mx-5 ">
        <Text className="font-semibold text-3xl">What would you like to cook?</Text>
      </View>
      <Search />
      <Menu />
      {/* <Premuim /> */}
      <RecipeList />
      <View className="h-20" />
    </ScrollView>
  );
}
