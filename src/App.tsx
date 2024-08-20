import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/Hero/Hero";
import Journey from "./components/Journey/Journey";
import Skills from "./components/Skills/Skills";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <AppBar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <Journey />
      <Skills />
    </div>
  );
}

export default App;
