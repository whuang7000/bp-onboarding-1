import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import Recipe from "./Recipe";
import { Recipes } from "./types";
import './App.css';

const App = () => {
  const APP_ID: string = "ba4b60a3";
  const APP_KEY: string = "c75eafd8d65da34b433b93f3a7b47f6c";

  let [recipes, setRecipes] = useState<Recipes[]>([]);
  let [search, setSearch] = useState("");
  let [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits); // find a way to isolate
  };

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form" action="">
        <input
          value={search}
          onChange={updateSearch}
          className="search-bar"
          type="text"
        />

        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            label={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
