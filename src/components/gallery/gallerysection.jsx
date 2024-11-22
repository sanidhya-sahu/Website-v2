import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./gallerySection.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GallerySection = () => {
  const navigate = useNavigate();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#galleryBox1", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".galleryWrap",
        start: "top 70%",
        end: "top 5%",
        scrub: 1,
      },
    });
    gsap.to("#galleryBox2", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".galleryWrap",
        start: "top 70%",
        end: "top 5%",
        scrub: 1,
      },
    });
    gsap.to("#galleryBox3", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".galleryWrap",
        start: "top 70%",
        end: "top 5%",
        scrub: 1,
      },
    });
    gsap.to("#galleryBox4", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".galleryWrap",
        start: "top 70%",
        end: "top 5%",
        scrub: 1,
      },
    });
    gsap.to("#galleryBox5", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".galleryWrap",
        start: "top 70%",
        end: "top 5%",
        scrub: 1,
      },
    });
  });

  const handleBoxClick = () => {
    navigate("/events-gallery");
  };

  useEffect(() => {
    document
      .getElementById("galleryBox1")
      .addEventListener("mouseenter", () => {
        document.getElementById("webCursor").style.width = "auto";
        document.getElementById("webCursor").style.height = "auto";
        document.getElementById("webCursor").style.padding = "8px";
        document.getElementById("webCursor").innerText = "Open Gallery";
      });
    document
      .getElementById("galleryBox1")
      .addEventListener("mouseleave", () => {
        document.getElementById("webCursor").style.width = "20px";
        document.getElementById("webCursor").style.height = "20px";
        document.getElementById("webCursor").innerText = "";
      });
    document
      .getElementById("galleryBox2")
      .addEventListener("mouseenter", () => {
        document.getElementById("webCursor").style.width = "auto";
        document.getElementById("webCursor").style.height = "auto";
        document.getElementById("webCursor").style.padding = "8px";
        document.getElementById("webCursor").innerText = "Open Gallery";
      });
    document
      .getElementById("galleryBox2")
      .addEventListener("mouseleave", () => {
        document.getElementById("webCursor").style.width = "20px";
        document.getElementById("webCursor").style.height = "20px";
        document.getElementById("webCursor").innerText = "";
      });
    document
      .getElementById("galleryBox3")
      .addEventListener("mouseenter", () => {
        document.getElementById("webCursor").style.width = "auto";
        document.getElementById("webCursor").style.height = "auto";
        document.getElementById("webCursor").style.padding = "8px";
        document.getElementById("webCursor").innerText = "Open Gallery";
      });
    document
      .getElementById("galleryBox3")
      .addEventListener("mouseleave", () => {
        document.getElementById("webCursor").style.width = "20px";
        document.getElementById("webCursor").style.height = "20px";
        document.getElementById("webCursor").innerText = "";
      });
    document
      .getElementById("galleryBox4")
      .addEventListener("mouseenter", () => {
        document.getElementById("webCursor").style.width = "auto";
        document.getElementById("webCursor").style.height = "auto";
        document.getElementById("webCursor").style.padding = "8px";
        document.getElementById("webCursor").innerText = "Open Gallery";
      });
    document
      .getElementById("galleryBox4")
      .addEventListener("mouseleave", () => {
        document.getElementById("webCursor").style.width = "20px";
        document.getElementById("webCursor").style.height = "20px";
        document.getElementById("webCursor").innerText = "";
      });
    document
      .getElementById("galleryBox5")
      .addEventListener("mouseenter", () => {
        document.getElementById("webCursor").style.width = "auto";
        document.getElementById("webCursor").style.height = "auto";
        document.getElementById("webCursor").style.padding = "8px";
        document.getElementById("webCursor").innerText = "Open Gallery";
      });
    document
      .getElementById("galleryBox5")
      .addEventListener("mouseleave", () => {
        document.getElementById("webCursor").style.width = "20px";
        document.getElementById("webCursor").style.height = "20px";
        document.getElementById("webCursor").innerText = "";
      });
    document
      .getElementById("galleryCenterBox")
      .addEventListener("mouseenter", () => {
        document.getElementById("webCursor").style.width = "auto";
        document.getElementById("webCursor").style.height = "auto";
        document.getElementById("webCursor").style.padding = "8px";
        document.getElementById("webCursor").innerText = "Open Gallery";
      });
    document
      .getElementById("galleryCenterBox")
      .addEventListener("mouseleave", () => {
        document.getElementById("webCursor").style.width = "20px";
        document.getElementById("webCursor").style.height = "20px";
        document.getElementById("webCursor").innerText = "";
      });
  }, []);

  return (
    <div id="galleryWrap" className="galleryWrap pin-spacer">
      <div className="eventTitle galleryTitle">Gallery</div>
      <div className="galleryRow1">
        <div className="ghostboximg1"></div>
        <div
          id="galleryBox1"
          onClick={handleBoxClick}
          className="boximg1"
        ></div>
        <div className="ghostboximg2"></div>
      </div>
      <div className="galleryRow2">
        <div
          id="galleryBox2"
          onClick={handleBoxClick}
          className="boximg1"
        ></div>
        <div
          id="galleryCenterBox"
          className="boximg2"
          onClick={handleBoxClick}
        ></div>
        <div
          id="galleryBox3"
          onClick={handleBoxClick}
          className="boximg3"
        ></div>
      </div>
      <div className="galleryRow3">
        <div
          id="galleryBox4"
          onClick={handleBoxClick}
          className="boximg1"
        ></div>
        <div
          id="galleryBox5"
          onClick={handleBoxClick}
          className="boximg2"
        ></div>
      </div>
    </div>
  );
};

export default GallerySection;
