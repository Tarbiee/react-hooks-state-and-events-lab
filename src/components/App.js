
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [dark, setDark] = useState(false);

  const appClass = dark ? "App dark" : "App light";

  function handleToggle() {
    setDark(!dark); // Use setToggle to update the state
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggle}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
