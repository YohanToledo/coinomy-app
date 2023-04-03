import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import NavBar from "./components/NavBar";
import New from "./pages/New";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [selected, setSelected] = useState({
    home: true,
    new: false,
    options: false,
  });

  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<PrivateRoute />} >
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/options" element={<New />} />
          </Route>
        </Routes>
      </div>
      <NavBar selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
