import React, { useEffect, useRef } from 'react';
import './Gallery.css'; // Import the external CSS file
import GooeyCursor from "../Gooey Cursor/gooeyCursor.jsx";
export default function AsymmetricScrollingGallery() {
  const leftColumnRef = useRef(null);
  const centerColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (leftColumnRef.current && centerColumnRef.current && rightColumnRef.current) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const maxScroll = documentHeight - windowHeight;
        const progress = Math.min(scrollY / maxScroll, 1);

        const maxTranslation = 300; // Maximum translation in pixels

        leftColumnRef.current.style.transform = `translateY(${-progress * maxTranslation}px)`;
        centerColumnRef.current.style.transform = `translateY(${progress * maxTranslation}px)`;
        rightColumnRef.current.style.transform = `translateY(${-progress * maxTranslation}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderColumn = (columnIndex) => {
    return Array.from({ length: 12 }, (_, index) => {
      let height = 'medium'; // Default height for center column
      if (columnIndex !== 1) { // Side columns
        height = index % 3 === 0 ? 'tall' : (index % 3 === 1 ? 'small' : 'medium');
      }
      return (
        <div
          key={`${columnIndex}-${index}`}
          className={`gallery-item ${height}`}
          aria-label={`Gallery item ${columnIndex * 12 + index + 1}`}
        >
          <div className="item-content">
            Item {columnIndex * 12 + index + 1}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <GooeyCursor></GooeyCursor>
      <div id='galleryContainer' className="gallery-container">
        <h1 className="gallery-title">Asymmetric Scrolling Gallery</h1>
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
