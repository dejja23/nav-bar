import React from "react";
import "./App.css";
import NavBar from "./components/navbar.js";

function App() {
  const arr = [
    { title: "Home" },

    {
      title: "services",
      dropdown: ["for entrepreneur", "for students", "for hobbyist"]
    },
    { title: "contact" }
  ];
  return (
    <div className="App">
      <NavBar arr={arr} />
    </div>
  );
}

export default App;
