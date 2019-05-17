import React from "react";
import "./App.css";
import AddWord from "./AddWord";
import TranslateGui from "./TranslateGui";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AddWord />
      <TranslateGui />
    </div>
  );
}

export default App;
