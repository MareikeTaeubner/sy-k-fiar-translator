import React from "react";
import "./App.css";
import AddWord from "./AddWord";
import TranslateGui from "./TranslateGui";

function App() {
  return (
    <div className="App">
      <h1>Sy'k Fiar translator</h1>
      <AddWord />
      <TranslateGui />
    </div>
  );
}

export default App;
