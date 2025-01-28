import React from "react";
import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  function handleViewRecipe() {
    setFoodId(food.id);
  }
  return (
    <div className={styles.foodItem}>
      <img src={food.image} alt={food.name} className={styles.image} />
      <h3 className={styles.title}>{food.title}</h3>
      <button className={styles.button} onClick={handleViewRecipe}>
        View Recipe
      </button>
    </div>
  );
}
