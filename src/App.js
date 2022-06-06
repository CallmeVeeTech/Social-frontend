import React from "react";
import { BrowserRouter, Routes, Route } from "react0-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
