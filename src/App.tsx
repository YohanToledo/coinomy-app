import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import NavBar from "./components/NavBar";
import New from "./pages/New";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Preferences from "./components/Preferences";
import ProfilePreferences from "./components/ProfilePreferences";
import Privacy from "./components/Privacy";
import Money from "./components/Money";

function App() {
  return (
    < div className="App" >
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/app" element={<PrivateRoute />} >
          <Route path="/app" element={<Navigate to={"/app/home"} />} />
          <Route path="/app/home" element={<Home />} />
          <Route path="/app/new" element={<New />} />
          <Route path="/app/options" element={<Preferences />} />
          <Route path="/app/options/profile" element={<ProfilePreferences />} />
          <Route path="/app/options/privacy" element={<Privacy />} />
          <Route path="/app/options/money" element={<Money />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
