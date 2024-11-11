import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import IngridientsCard from "./IngridientsCard";
import IngridientList from "./IngridientList";
import Steps from "./Steps";
import { RecipeDetailed } from "@/types/recipe";

export type IngredientsProps = {
  data: RecipeDetailed;
};

export default function Ingridients({ data }: IngredientsProps) {
  const [index, setIndex] = useState(0);

  return (
    <View className="mx-5">
      <View className="flex-row mt-5 bg-light items-center justify-between rounded-[35px] p-2">
        {tabs.map((tab, i) => {
          const isActive = i === index;
          return (
            <Pressable
              key={i}
              onPress={() => setIndex(i)}
              className={`rounded-[35px] py-4 flex-1 items-center justify-center ${
                isActive ? "bg-light-200" : "bg-white"
              }`}
            >
              <Text className="text-xl font-semibold">{tab}</Text>
            </Pressable>
          );
        })}
      </View>
      {index === 0 ? (
        <IngridientList ingridients={data.extendedIngredients} />
      ) : index === 1 ? (
        <Steps data={data.analyzedInstructions} />
      ) : (
        <></>
      )}
    </View>
  );
}

const tabs = ["Ingredients", "Steps"];

const lists = [
  {
    img: require("../assets/images/chips.png"),
    title: "Chopped",
    name: "Potato",
  },
  {
    img: require("../assets/images/raw.png"),
    title: "500 Gm",
    name: "Chicken",
  },
  {
    img: require("../assets/images/tomatoes.png"),
    title: "Baby",
    name: "Tomatoes",
  },
  {
    img: require("../assets/images/Parsley.jpeg"),
    title: "Fresh",
    name: "Parsley",
  },
];
