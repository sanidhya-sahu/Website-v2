import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Proj from "./components/ProjectSection/project";
import PorjectsPage from "./components/PorjectsPage/projectpage";
import Magazine from "./components/Magazine/magazine";
import About from "./components/About/About";
import Heropage from "./components/HeroSection/herosection";
import MembersPage from "./components/MembersPage/membersPage";
import TeamMembersSection from "./components/TeamMembersSection/teamMembers";
import TeamMembersSectionMobile from "./components/TeamMembersSection/teamMembersMobile.jsx";
import EventSection from "./components/EventSection/eventsection";
import EventsSectionMobile from "./components/EventSection/eventsectionmobile";
import GallerySection from "./components/gallery/gallerysection";
import GallerySectionMobile from "./components/gallery/gallerysectionmobile";
import Footer from "./components/Footer/footer";
import FooterMobile from "./components/FooterMobile/footermobile";
import BoxGrid from "./components/gallery/BoxGrid.jsx";
import AsymmetricScrollingGallery from "./components/gallery/Gallery.jsx";
// import GooeyCursor from "./components/Gooey Cursor/gooeyCursor.jsx";
import Scroller from "./components/Scroller/scroller.jsx";
import MoreEvents from "./components/MoreEvents/moreEvents.jsx";
import Cursor from "./components/Cursor/cursor.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import LandingPageMob from "./components/LandingPage/LandingPageMob.jsx";
import Menu from "./components/Menu/menu.jsx";
const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    var lastWidth = window.innerWidth;
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
      if (window.innerWidth !== lastWidth) {
        window.location.reload();
      }
      lastWidth = window.innerWidth;
    };
    window.addEventListener("resize", handleResize);
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
                {isMobile ? "" : <Cursor></Cursor>}
                <Scroller></Scroller>
                <Menu></Menu>
                {/* <GooeyCursor /> */}
                {isMobile ? <LandingPageMob></LandingPageMob> : <LandingPage /> }
                <Heropage />
                {isMobile ? <EventsSectionMobile /> : <EventSection />}
                {isMobile ? <GallerySectionMobile /> : <GallerySection />}
                <Proj />
                {isMobile ? (
                  <TeamMembersSectionMobile />
                ) : (
                  <TeamMembersSection />
                )}
                {isMobile ? <FooterMobile /> : <Footer />}
              </>
            }
          ></Route>
          <Route path="/events" element={<MoreEvents />}></Route>
          <Route path="/magazine" element={<Magazine />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/members" element={<MembersPage />}></Route>
          <Route path="/projects" element={<PorjectsPage />}></Route>
          <Route path="/events-gallery" element={<BoxGrid />} />
          <Route
            path="/events/:eventName"
            element={<AsymmetricScrollingGallery />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
