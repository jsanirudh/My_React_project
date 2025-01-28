import React, { useState, useEffect } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  useEffect(() => {
    async function fetchFood() {
      if (!foodId) return;
      try {
        const URL = `https://api.spoonacular.com/recipes/663136/information`;
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!res.ok) {
          console.error(`Failed to fetch food details: ${res.statusText}`);
          return;
        }
        const data = await res.json();
        setFood(data);
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      {" "}
      Food Details {foodId}
      {food.title}
      {food.image}
    </div>
  );
}
