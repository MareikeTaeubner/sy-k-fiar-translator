import React from "react";
import "./App.css";
import AddWord from "./AddWord";
import TranslateGui from "./TranslateGui";
import Header from "./Header";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <AddWord />
      <TranslateGui />
    </div>
  );
}

export default App;
