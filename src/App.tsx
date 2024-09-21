import { useState } from "react";
import Hero from "./components/Hero/Hero";
// import Interview from "./components/Interview/Interview";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
// import Navigator from "./components/Navigator/Navigator";
import Socials from "./components/Socials/Socials";
import { ReactComponent as SunIcon } from "./assets/sun.svg";
import { ReactComponent as MoonIcon } from "./assets/moon.svg";

function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true" ? true : false
  );
  const iconClasses =
    "absolute right-6 top-4 w-6 cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-110 hover:opacity-100";
  const iconClickHandler = () => {
    const newIsDarkValue = !isDark;
    setIsDark(newIsDarkValue);
    localStorage.setItem("isDark", newIsDarkValue.toString());
  };
  // const [selectedSection, setSelectedSection] = useState("About");

  return (
    <div
      className="bg-background-primary transition-colors"
      data-theme={isDark ? "dark" : "light"}
    >
      {isDark ? (
        <SunIcon className={iconClasses} onClick={iconClickHandler} />
      ) : (
        <MoonIcon className={iconClasses} onClick={iconClickHandler} />
      )}
      <div className="flex max-w-5xl md:gap-20 m-auto px-10 flex-col md:flex-row">
        <div className="flex flex-col justify-between w-full pt-20 md:w-5/12 md:sticky md:top-0 md:pb-20 md:max-h-screen">
          {/* <AppBar isDark={isDark} setIsDark={setIsDark} /> */}
          <div>
            <Hero />
            {/* <Navigator
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            /> */}
          </div>
          <Socials />
        </div>
        <div className="flex flex-col py-20 w-full md:w-7/12 gap-24">
          <div id="about">
            <About />
          </div>
          <div id="experience">
            <Experience />
          </div>
          {/* <div id="interview me">
            <Interview />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
