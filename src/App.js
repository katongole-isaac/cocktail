import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import About from "./pages/About";
import { useState } from "react";
import SingleCocktail from "./components/SingleCocktail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path=":productId" element={<SingleCocktail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
