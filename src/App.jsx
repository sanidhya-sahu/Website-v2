import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Proj from "./components/ProjectSection/project";
import Magazine from "./components/Magazine/magazine";
import About from "./components/About/About";
import Heropage from "./components/HeroSection/herosection";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Heropage></Heropage>
                <Proj></Proj>
              </>
            }
          ></Route>
          <Route path="/magazine" element={<Magazine />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
