import { RecipeDetailed } from "@/types/recipe";
import { FetchClient } from "@/utils/fetchClient";

export async function getRecipeInformation(id:string){
    try {
        return (await FetchClient.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`)) as RecipeDetailed;
    } catch (error) {
        console.error(error);
        return null;
    }
}