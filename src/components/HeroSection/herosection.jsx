// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./herosection.css";
const Heropage = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".highlight-bg", {
      width: "100%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".heroWrap",
        scroller: "body",
        start: "top 70%",
        end: "bottom",
        // markers:true
      },
    });
  });
  useEffect(()=>{
    document.getElementById('heroWrap').addEventListener('mouseenter',()=>{
      document.getElementById('webCursor').style.width='auto'
      document.getElementById('webCursor').style.height='auto'
      document.getElementById('webCursor').style.padding='8px'
      document.getElementById('webCursor').innerText='Upcoming Events'
    })
    document.getElementById('heroWrap').addEventListener('mouseleave',()=>{
      document.getElementById('webCursor').style.width='20px'
      document.getElementById('webCursor').style.height='20px'
      document.getElementById('webCursor').innerText=''
    })
  },[])

  return (
    <div id="heroWrap" className="heroWrap">
      <div className="event-container">
        <div className="left-event-container">
          {/* <div className="eventTitle heroTitle">/Upcoming Event</div> */}
          <p className="context">
            Immerse yourself in
            <span className="highlight">
              <span className="highlight-bg"></span>
              <span className="highContent">industry </span>
            </span>
            insights through ideations,
            <span className="highlight">
              <span className="highlight-bg"></span>
              <span className="highContent">hackathons</span>
            </span>
            , and expert keynotes. Explore
            <span className="highlight">
              <span className="highlight-bg"></span>
              <span className="highContent"> NLP, MLOps</span>
            </span>
            , Computer Vision, etc. Experience
            <span className="highlight">
              <span className="highlight-bg"></span>
              <span className="highContent">hands-on </span>
            </span>
            workshops.
          </p>

          <button className="register-button">Register Now</button>
        </div>

        <div className="right-event-container">
          <h1 className="heading">AI CONIC 2.0</h1>
          <img
            className="event-image-right"
            src="/HeroSection/aiconic2.png"
            alt="Technology"
          />
          <div className="description">
          AI CONIC 2.0 at VIT Bhopal is a one-day offline event offering students hands-on exposure to industry-level AI and ML applications and practices.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
