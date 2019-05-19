import React from "react";
import "./App.css";
import AddWord from "./AddWord";
import TranslateGui from "./TranslateGui";
import Header from "./Header";
import Menu from "./Menu";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <main>
          <Route path="/" exact component={AddWord} />
          <Route path="/translate" component={TranslateGui} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
