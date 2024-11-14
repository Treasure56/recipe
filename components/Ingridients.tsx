import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import IngridientsCard from "./IngridientsCard";
import IngridientList from "./IngridientList";
import Steps from "./Steps";
import { RecipeDetailed } from "@/types/recipe";
import SimilarRecipes from "./SimilarRecipe";

export type IngredientsProps = {
  data: RecipeDetailed;
};

export default function Ingridients({ data }: IngredientsProps) {
  const [index, setIndex] = useState(0);

  return (
    <View className="">
      <View className="flex-row mt-5 mx-5 bg-light items-center justify-between rounded-[35px] p-2">
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
        <SimilarRecipes id={data.id} />
      )}
    </View>
  );
}

const tabs = ["Ingredients", "Steps", "Similar"];


