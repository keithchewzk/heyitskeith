import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Interview from "./components/Interview/Interview";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Navigator from "./components/Navigator/Navigator";
import Socials from "./components/Socials/Socials";

function App() {
  // const [isDark, setIsDark] = useState(true);
  const [selectedSection, setSelectedSection] = useState("About");

  return (
    <div className="bg-background-primary" data-theme={true ? "dark" : "light"}>
      <div className="flex max-w-5xl md:gap-20 m-auto px-10 flex-col md:flex-row">
        <div className="flex flex-col w-full pt-40 md:w-6/12 md:sticky md:top-0 md:pb-40 md:max-h-screen">
          {/* <AppBar isDark={isDark} setIsDark={setIsDark} /> */}
          <Hero />
          <Navigator
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          <Socials />
        </div>
        <div className="flex flex-col pb-40 w-full md:w-6/12 md:pt-40">
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
