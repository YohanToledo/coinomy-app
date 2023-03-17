import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
