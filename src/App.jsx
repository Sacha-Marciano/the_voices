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
import Footer from "./components/Footer";

function App() {
  // Context suscribe
  return (
    <div className="min-h-[100vh] bg-background">
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/voices" element={<VoicesPage />} />
        <Route path="/concept/:id" element={<ConceptPage />} />
        <Route path="/pictures" element={<PicturesPage />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
