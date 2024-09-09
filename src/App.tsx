import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Interview from "./components/Interview/Interview";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Navigator from "./components/Navigator/Navigator";

function App() {
  // const [isDark, setIsDark] = useState(true);
  const [selectedSection, setSelectedSection] = useState("About");

  return (
    <div className="bg-background-primary" data-theme={true ? "dark" : "light"}>
      <div className="flex max-w-5xl md:gap-20 m-auto px-10 flex-col md:flex-row">
        <div className="w-full md:w-6/12 md:sticky top-0 pt-40 max-h-screen">
          {/* <AppBar isDark={isDark} setIsDark={setIsDark} /> */}
          <Hero />
          <Navigator
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        </div>
        <div className="flex flex-col w-full md:w-6/12 py-40">
          <div id="about">
            <About />
          </div>
          <div className="border-2 border-button-secondary my-20"></div>
          <div id="experience">
            <Experience />
          </div>
          <div className="border-2 border-button-secondary my-20"></div>
          <div id="interview">
            <Interview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
