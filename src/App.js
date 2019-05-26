import React from "react";
import "./App.css";
import AddWord from "./AddWord";
import Header from "./Header";
import Menu from "./Menu";
import { BrowserRouter, Route } from "react-router-dom";
import { translateFromEn, translateFromSf } from "./translate";
import TranslateForm from "./TranslateForm";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/en-to-sf" component={EnToSf} />
          <Route path="/sf-to-en" component={SfToEn} />
          <Route path="/add" component={AddWord} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

function EnToSf() {
  return (
    <div>
      <TranslateForm
        header="English -> Sy'k Fiar"
        language="English"
        translate={translateFromEn}
      />
    </div>
  );
}

function SfToEn() {
  return (
    <div>
      <TranslateForm
        header="Sy'k Fiar -> English"
        language="Sy'k Fiar"
        translate={translateFromSf}
      />
    </div>
  );
}
