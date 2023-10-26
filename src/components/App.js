import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const appClass = isDarkMode ? "App dark" : "App light";
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;