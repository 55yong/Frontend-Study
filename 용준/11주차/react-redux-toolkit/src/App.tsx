import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Test from "./features/counter/Test";

function App() {
  const [isTestOpen, setIsTestOpen] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => setIsTestOpen((prev) => !prev)}>Toggle</button>
        {isTestOpen && <Test />}
        <Counter />
      </header>
    </div>
  );
}

export default App;
