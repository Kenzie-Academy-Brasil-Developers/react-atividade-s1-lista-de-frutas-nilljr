import "./App.css";
import { useState } from "react";
import FruitList from "./components/FruitList";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  function filteredFruits() {
    setFruits(fruits.filter((element) => element.color === "red"));
  }

  return (
    <div className="App">
      <FruitList fruits={fruits} />
      <button onClick={filteredFruits}>Mostrar frutas vermelhas</button>
    </div>
  );
}

export default App;
