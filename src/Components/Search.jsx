import React, { useState, useEffect } from "react";
import styles from "./search.module.css";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pasta");
  const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=5829276baf2549a293d06679b3055392`;

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query, setFoodData]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes"
      />
      <button className={styles.searchButton} onClick={() => setQuery(query)}>
        Search
      </button>
      <div className={styles.searchInfo}>
        Try searching for something like "pasta" or "salad"
      </div>
    </div>
  );
}
