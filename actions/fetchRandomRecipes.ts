import { Recipe, RecipeDetailed } from "@/types/recipe";
import { FetchClient } from "@/utils/fetchClient";

export async function fetchRandomRecipes(){
    try {
        return (await FetchClient.get(`https://api.spoonacular.com/recipes/random?number=4&limitLicense=true`)).recipes as RecipeDetailed[]
        
    } catch (error) {
        console.error(error);
        return null;
        
    }
}