import { Ingredient } from "./Ingredients";

export type InstructionStep = {
    number: number;
    step: string;
    ingredients: Ingredient[];
}
