import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
