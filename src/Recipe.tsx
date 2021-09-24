import React from "react";
import style from "./recipe.module.css";
import { Recipes, RecipeDetails }  from "./types"

// make types.ts
const Recipe = ({ label, calories, image, ingredients }: RecipeDetails) => {
  return (
    <div className={style.recipe}>
      <h1>{label}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;