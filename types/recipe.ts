import { Ingredient } from "./Ingredients"
import { InstructionStep } from "./steps"

export type Recipe ={
    id: number
    title: string
    image: string
}

export type RecipeDetailed = Recipe & {
    cookingMinutes: number | null
    healthScore: number
    sourceName: string
    pricePerServing: number
    extendedIngredients: Ingredient[]
    analyzedInstructions: {
        name: string
        steps: InstructionStep[]
    }[]
}