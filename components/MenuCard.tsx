import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

export type MenuProps = {
  image: ImageSourcePropType;
  name: string;
};
export default function MenuCard({ image, name }: MenuProps) {
  return (
    <View className="items-center mr-4  px-4 py-4 rounded-xl">
      <Image resizeMode="cover" className="aspect-square w-full h-14" source={image} />
      <Text className="font-semibold text-md mt-2">{name}</Text>
    </View>
  );
}
