// React methods
import React from "react";
import { Route, Routes } from "react-router-dom";

// Contexts

// Pages
import HomePage from "./pages/HomePage";

// Components
import Header from "./components/Header";
import VoicesPage from "./pages/VoicesPage";
import ConceptPage from "./pages/ConceptPage";
import PicturesPage from "./pages/PicturesPage";
import OptionsPage from "./pages/OptionsPage";
import VideosPage from "./pages/VideosPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  // Context suscribe
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/voices" element={<VoicesPage />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/pictures" element={<PicturesPage />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
}

export default App;
