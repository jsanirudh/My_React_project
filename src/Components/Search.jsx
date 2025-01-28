import React, { use, useState } from "react";
import { useEffect } from "react";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pasta");
  const URL =
    "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=5829276baf2549a293d06679b3055392";
  //const APIkey = "5829276baf25a4929a3d06679b3055392";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}
