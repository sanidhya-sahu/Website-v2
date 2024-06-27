import "./gallery.css";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const GallerySection = () => {
  useEffect(() => {
    gsap.to(".item-1", {
      translateX: "0%",
      opacity: 1,
      duration: 1,
    });
    gsap.to(".item-2", {
      translateY: "0%",
      opacity: 1,
      duration: 1,
    });
    gsap.to(".item-4", {
      translateY: "0%",
      opacity: 1,
      duration: 1,
    });
    gsap.to(".item-5, .item-6", {
      translateX: "0%",
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <div className="container">
      <div className="item item-1"></div>
      <div className="item item-2"></div>
      <div className="item item-3"></div>
      <div className="item item-4"></div>
      <div className="item item-5"></div>
      <div className="item item-6"></div>
    </div>
  );
};

export default GallerySection;
