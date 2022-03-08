import React, { useState } from "react";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { UserContext } from "./components/UserContext";
import useLocalStorage from "./components/Hook/useLocalStorage";

function App() {
  const [user, setUser] = useLocalStorage("user");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
