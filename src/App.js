import "./App.css";
import FoodList from "./Components/FoodList";
import Search from "./Components/Search";
import { useState } from "react";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";
import Nav from "./Components/Nav";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("650126");

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
