// React methods
import React from "react";
// Contexts

// Pages
import HomePage from "./pages/home";

// Components
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about";

function App() {
  // Context suscribe
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
