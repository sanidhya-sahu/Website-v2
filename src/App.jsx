import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Proj from "./components/ProjectSection/project";
import Magazine from "./components/Magazine/magazine";
import About from "./components/About/About";
import Heropage from "./components/HeroSection/herosection";
import MembersPage from "./components/MembersPage/membersPage";
import TeamMembersSection from "./components/TeamMembersSection/teamMembers";
import EventSection from "./components/EventSection/eventsection";
import EventsSectionMobile from "./components/EventSection/eventsectionmobile";
import GallerySection from "./components/GallerySection/gallerysection";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
      if (window.innerWidth < 768 || window.innerWidth > 768) {
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Heropage />
                {isMobile ? <EventsSectionMobile /> : <EventSection />}
                <GallerySection></GallerySection>
                <Proj />
                <TeamMembersSection />
              </>
            }
          ></Route>
          <Route path="/magazine" element={<Magazine />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/members" element={<MembersPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
