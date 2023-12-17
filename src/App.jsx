import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
};

export default App;
