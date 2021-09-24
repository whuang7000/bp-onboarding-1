export type Recipes = {
    bookmarked: boolean;
    bought: boolean;
    recipe: RecipeDetails;
  };
  
export type RecipeDetails = {
calories: number;
image: string;
ingredients: Array<any>;
label: string;
};