import { View, Text, Image, Pressable } from "react-native";
import React from "react";

export default function Premuim() {
  return (
    <View className="mx-5 mt-8 bg-secondary-dark rounded-[35px] p-7">
      <View className="flex-row relative">
        <Image
          className="h-14 w-14"
          source={require("../assets/images/bluedot.png")}
        />
        <Text className="text-3xl font-bold text-white text-center">
          Unlock {"\n"} Unlimited Recipes
        </Text>
        <Image
          className="h-14 w-14 absolute right-0 top-[90px]"
          source={require("../assets/images/bluedot.png")}
        />

      </View>
      <View className="flex-row items-center justify-center">
      <Pressable className="items-center justify-center mt-5 rounded-[35px] py-5 px-10  bg-dark">
        <Text className="text-light text-lg font-bold">Go Premium</Text>
      </Pressable>
      </View>
    </View>
  );
}
