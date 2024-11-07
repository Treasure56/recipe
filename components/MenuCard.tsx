import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

export type MenuProps = {
  image: ImageSourcePropType;
  name: string;
};
export default function MenuCard({ image, name }: MenuProps) {
  return (
    <View className="items-center mr-8">
      <Image className="aspect-square w-52" source={image} />
      <Text className="font-semibold text-md mt-2">{name}</Text>
    </View>
  );
}
