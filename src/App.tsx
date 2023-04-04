import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import NavBar from "./components/NavBar";
import New from "./pages/New";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<PrivateRoute />} >
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/options" element={<New />} />
        </Route>

      </Routes>


    </div>
  );
}

export default App;
