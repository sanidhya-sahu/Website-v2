import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import { useParams } from "react-router-dom";
import GooeyCursor from "../Gooey Cursor/gooeyCursor.jsx";

export default function AsymmetricScrollingGallery() {
  const leftColumnRef = useRef(null);
  const centerColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const { eventName } = useParams();
  const [images, setImages] = useState([]);

  // Fetch images for the specific event
  useEffect(() => {
    fetch(`/eventImg/${eventName}/index.json`)
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error loading images:", error));
  }, [eventName]);

  // Scroll effect code remains the same
  useEffect(() => {
    const handleScroll = () => {
      if (
        leftColumnRef.current &&
        centerColumnRef.current &&
        rightColumnRef.current
      ) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const maxScroll = documentHeight - windowHeight;
        const progress = Math.min(scrollY / maxScroll, 1);
        const maxTranslation = 300;

        leftColumnRef.current.style.transform = `translateY(${
          -progress * maxTranslation
        }px)`;
        centerColumnRef.current.style.transform = `translateY(${
          progress * maxTranslation
        }px)`;
        rightColumnRef.current.style.transform = `translateY(${
          -progress * maxTranslation
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderColumn = (columnIndex) => {
    if (!images.length) return null;

    const columnImages = images.filter((_, index) => index % 3 === columnIndex);

    return columnImages.map((image, index) => {
      let height = "medium";
      if (columnIndex !== 1) {
        height =
          index % 3 === 0 ? "tall" : index % 3 === 1 ? "small" : "medium";
      }

      return (
        <div
          key={`${columnIndex}-${index}`}
          className={`gallery-item ${height}`}
          aria-label={`Gallery image ${columnIndex * 12 + index + 1}`}
        >
          <img
            src={`/eventImg/${eventName}/${image}`} // This is correct
            alt={`Event image ${index + 1}`}
            className="gallery-image"
          />
        </div>
      );
    });
  };

  return (
    <>
      <GooeyCursor />
      <div id="galleryContainer" className="gallery-container">
        <h1 className="gallery-title">
          {eventName
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h1>
        <div className="gallery-grid">
          <div ref={leftColumnRef} className="gallery-column">
            {renderColumn(0)}
          </div>
          <div ref={centerColumnRef} className="gallery-column">
            {renderColumn(1)}
          </div>
          <div ref={rightColumnRef} className="gallery-column">
            {renderColumn(2)}
          </div>
        </div>
      </div>
    </>
  );
}
