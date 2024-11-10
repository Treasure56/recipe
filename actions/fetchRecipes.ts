import { Recipe } from "@/types/recipe";
import { FetchClient } from "@/utils/fetchClient";

export async function fetchRecipes(query: string) { 
    try {
        return (await FetchClient.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}`)).results as Recipe[]
    } catch (error) {
        console.error(error);
        return null;
        
    }
    
}