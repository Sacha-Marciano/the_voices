import { createContext, useState } from "react";

export const LangContext = createContext(null);

export default function LangProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang(lang === "en" ? "fr" : "en");
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}
