import { Recipe } from "@/types/recipe";
import { FetchClient } from "@/utils/fetchClient";

export async function fetchSimilarRecipes(id: string) {
    try {
        return (await FetchClient.get(`https://api.spoonacular.com/recipes/${id}/similar?number=10&limitLicense=true`)) as Recipe[]
        
    } catch (error) {
        console.error(error);
        return null;
        
    }
}