import React from "react";
import Nav from "./components/Nav";
import ItemsBody from "./components/ItemsBody";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='container'>
        <h1>test</h1>
        <ItemsBody />
      </div>
    </div>
  );
}

export default App;
