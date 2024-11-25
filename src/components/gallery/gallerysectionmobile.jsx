import { useEffect, useState } from "react";
import "./gallerySection.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

/**
 * @typedef {Object} GalleryItem
 * @property {string} id
 * @property {string} src
 * @property {string} alt
 */

const GallerySectionMobile = () => {
  const navigate = useNavigate();
  /** @type {GalleryItem[]} */
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const loadGalleryData = async () => {
      try {
        const response = await fetch("/Data/gallery.json");
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error("Error loading gallery data:", error);
      }
    };

    loadGalleryData();
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#galleryBox1", {
      y: 0,
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
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".galleryWrap",
        start: "top 70%",
        end: "top 5%",
        scrub: 1,
      },
    });
    gsap.to("#galleryBox4", {
      x: 0,
      y: 0,
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
      y: 0,
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

  return (
    <div id="galleryWrap" className="galleryWrap">
      <div className="eventTitle galleryTitle">Gallery</div>
      <div className="galleryRow1">
        <div
          id="galleryBox1"
          onClick={handleBoxClick}
          className="boximg1"
          style={{
            backgroundImage: galleryData[0]
              ? `url(${galleryData[0].src})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          id="galleryBox2"
          onClick={handleBoxClick}
          className="boximg2"
          style={{
            backgroundImage: galleryData[1]
              ? `url(${galleryData[1].src})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="galleryRow2">
        <div
          id="galleryBox3"
          onClick={handleBoxClick}
          className="boximg1"
          style={{
            backgroundImage: galleryData[5]
              ? `url(${galleryData[5].src})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="galleryRow3">
        <div
          id="galleryBox4"
          onClick={handleBoxClick}
          className="galleryRowbox"
        >
          <div
            className="subBoximg1"
            style={{
              backgroundImage: galleryData[3]
                ? `url(${galleryData[3].src})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="subBoximg2"
            style={{
              backgroundImage: galleryData[4]
                ? `url(${galleryData[4].src})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div
          id="galleryBox5"
          onClick={handleBoxClick}
          className="boximg2"
          style={{
            backgroundImage: galleryData[2]
              ? `url(${galleryData[2].src})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default GallerySectionMobile;
