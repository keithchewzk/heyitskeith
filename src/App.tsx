import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/Hero/Hero";
import Journey from "./components/Journey/Journey";
import Skills from "./components/Skills/Skills";
import Interview from "./components/Interview/Interview";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Navigator from "./components/Navigator/Navigator";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedSection, setSelectedSection] = useState("About");

  return (
    <div
      className="bg-background-primary"
      data-theme={isDark ? "dark" : "light"}
    >
      <div className="flex max-w-5xl md:gap-20 m-auto px-10 flex-col md:flex-row">
        <div className="w-full md:w-6/12 md:sticky top-0 pt-40 max-h-screen">
          {/* <AppBar isDark={isDark} setIsDark={setIsDark} /> */}
          <Hero />
          <Navigator
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        </div>
        <div className="w-full md:w-6/12 py-40">
          <div id="about">
            <About />
          </div>
          <div id="experience">
            <Experience />
          </div>

          {/* <Journey /> */}
        </div>
        {/* <Skills /> */}
        {/* <Interview /> */}
      </div>
    </div>
  );
}

export default App;
