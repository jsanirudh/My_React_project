import React, { useState, useEffect } from "react";
import styles from "./foodDetails.module.css"; // Import the styles

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "5829276baf2549a293d06679b3055392";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      console.log(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.foodDetailsContainer}>
      <h1 className={styles.foodTitle}>{food.title}</h1>
      <img className={styles.foodImage} src={food.image} alt={food.title} />

      <div className={styles.foodDetails}>
        <span>
          <strong>{food.readyInMinutes} Minutes</strong>
        </span>
        <span className={food.vegetarian ? styles.veg : styles.nonVeg}>
          <strong>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</strong>
        </span>
        <span>
          <strong>Serves {food.servings}</strong>
        </span>
        <span>
          <strong>{food.vegan ? "Vegan" : "Non-Vegan"}</strong>
        </span>
        <span>{(food.pricePerServing / 100).toFixed(2)} Per Serving $</span>
      </div>

      <div className={styles.ingredientContainer}>
        <h2>Ingredients</h2>
        {food.extendedIngredients?.map((ingredient) => (
          <div className={styles.ingredientItem} key={ingredient.id}>
            <img
              className={styles.ingredientImage}
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
              alt={ingredient.name}
            />
            <span className={styles.ingredientName}>{ingredient.name}</span>
          </div>
        ))}
      </div>

      <div className={styles.instructionContainer}>
        <h2>Instructions</h2>
        {isLoading ? (
          <p className={styles.loadingText}>Loading...</p>
        ) : (
          <ol className={styles.instructionList}>
            {food.analyzedInstructions[0]?.steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
