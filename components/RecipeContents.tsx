import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import GuildeLine from "./GuildeLine";
import Ingridients from "./Ingridients";

export default function RecipeContents() {
  return (
    <View className="mt-8 bg-light-200 flex-1 rounded-t-3xl p-4">
      <View className="mx-5">
        <View className="items-center mt-4">
          <View className="w-10 h-1.5 bg-dark rounded-xl"></View>
          <Text className="text-3xl font-bold text-center mt-5">
            Chicken Steak with Grilled {"\n"} Vagetables
          </Text>
        </View>
      </View>
      <View className="justify-between mx-5 flex-row mt-5 items-center">
        <View className="flex-row items-center">
          <Image
            className="w-12 h-12 rounded-full mr-2"
            source={require("../assets/images/user.jpeg")}
          />
          <Text className="text-lg font-bold">
            Vernon Nash <Text className="text-neutral-400">(10 recipes)</Text>
          </Text>
        </View>
        <Pressable className="bg-[#F84D50] rounded-full w-9 aspect-square items-center justify-center">
        <MaterialCommunityIcons name="cards-heart" size={18} color="white" />
        </Pressable>
      </View>
      <GuildeLine />
      <Ingridients />
    </View>
  );
}
