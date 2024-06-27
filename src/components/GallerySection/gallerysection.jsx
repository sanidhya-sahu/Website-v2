import "./gallerysection.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const GallerySection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".item-1", {
      translateX: "0%",
      opacity: 1,
      scrollTrigger: {
        trigger: ".container",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top",
        scrub: 1,
        // pin: true,
      },
    });
    gsap.to(".item-2", {
      translateY: "0%",
      opacity: 1,
      scrollTrigger: {
        trigger: ".container",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top",
        scrub: 1,
        // pin: true,
      },
    });
    gsap.to(".item-4", {
      translateY: "0%",
      opacity: 1,
      scrollTrigger: {
        trigger: ".container",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top",
        scrub: 1,
        // pin: true,
      },
    });
    gsap.to(".item-5,.item-6", {
      translateX: "0%",
      opacity: 1,
      scrollTrigger: {
        trigger: ".container",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top",
        scrub: 1,
        // pin: true,
      },
    });
  });
  return (
    <div className="container">
      <div
        className="eventTitle"
        style={{
          position: "relative",
          top: "-150px",
          left: "150px",
        }}
      >
        /Gallery
      </div>
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
