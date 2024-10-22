import "./eventsection.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import eventOBJ from "../../Data/sliderEvents.json";
import { useState } from "react";
const EventsSectionMobile = () => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   useGSAP(() => {
  //     var vw = window.innerHeight;
  //     var sliderWidth = document.querySelector(".slider").scrollWidth;

  //     if (window.innerWidth > 768) {
  //       var vw = window.innerHeight;
  //       var sliderWidth = document.querySelector(".slider").scrollWidth;
  //       var cardHeight = document.querySelector("span").clientHeight;

  //       gsap.to(".eventSection", {
  //         scrollTrigger: {
  //           trigger: ".eventSection",
  //           scroller: "body",
  //           // markers: true,
  //           start: "top 10%",
  //           end: `top -${sliderWidth / 8}%`,
  //           scrub: 1,
  //           pin: true,
  //         },
  //       });
  //       gsap.to(".eventSection .slider", {
  //         rotateY: 130,
  //         scrollTrigger: {
  //           trigger: ".eventSection",
  //           scroller: "body",
  //           // markers: true,
  //           start: "top 50%",
  //           end: `top -${sliderWidth / 8}%`,
  //           scrub: 1,
  //           // pin: true
  //         },
  //       });
  //     }
  //   });
  return (
    <div data-scroll className="eventSection">
      {/* <div data-scroll className="eventTitle">
        /Recent Events
      </div> */}
      <div data-scroll className="slider">
        <span data-scroll style={{ "--i": 4 }}>
          <div data-scroll className="cardbox octa">
            <img
              data-scroll
              id="bannerImage"
              src={eventOBJ[1].bannerPath}
              alt=""
            />
          </div>
          <div data-scroll className="eventKeyWords">
            <div data-scroll className="word">
              {eventOBJ[1].keyWords[0]}
            </div>
            <div data-scroll className="word">
              {eventOBJ[1].keyWords[1]}
            </div>
            <div data-scroll className="word">
              {eventOBJ[1].keyWords[2]}
            </div>
          </div>
          <div data-scroll className="eventDetails">
            <div data-scroll className="eventName">
              {eventOBJ[1].name}
            </div>
            <div data-scroll className="viewEvent">
              <button data-scroll>View All Events</button>
            </div>
          </div>
        </span>
        <span data-scroll style={{ "--i": 3 }}>
          <div data-scroll className="cardbox octa">
            <img
              data-scroll
              id="bannerImage"
              src={eventOBJ[2].bannerPath}
              alt=""
            />
          </div>
          <div data-scroll className="eventKeyWords">
            <div data-scroll className="word">
              {eventOBJ[2].keyWords[0]}
            </div>
            <div data-scroll className="word">
              {eventOBJ[2].keyWords[1]}
            </div>
            <div data-scroll className="word">
              {eventOBJ[2].keyWords[2]}
            </div>
          </div>
          <div data-scroll className="eventDetails">
            <div data-scroll className="eventName">
              {eventOBJ[2].name}
            </div>
            <div data-scroll className="viewEvent">
              <button data-scroll>View All Events</button>
            </div>
          </div>
        </span>
        <span data-scroll style={{ "--i": 2 }}>
          <div data-scroll className="cardbox octa">
            <img
              data-scroll
              id="bannerImage"
              src={eventOBJ[3].bannerPath}
              alt=""
            />
          </div>
          <div data-scroll className="eventKeyWords">
            <div data-scroll className="word">
              {eventOBJ[3].keyWords[0]}
            </div>
            <div data-scroll className="word">
              {eventOBJ[3].keyWords[1]}
            </div>
            <div data-scroll className="word">
              {eventOBJ[3].keyWords[2]}
            </div>
          </div>
          <div data-scroll className="eventDetails">
            <div data-scroll className="eventName">
              {eventOBJ[3].name}
            </div>
            <div data-scroll className="viewEvent">
              <button data-scroll>View All Events</button>
            </div>
          </div>
        </span>
        <span data-scroll style={{ "--i": 1 }}>
          <div data-scroll className="cardbox octa">
            <img
              data-scroll
              id="bannerImage"
              src={eventOBJ[4].bannerPath}
              alt=""
            />
          </div>
          <div data-scroll className="eventKeyWords">
            <div data-scroll className="word">
              {eventOBJ[4].keyWords[0]}
            </div>
            <div data-scroll className="word">
              {eventOBJ[4].keyWords[1]}
            </div>
            <div data-scroll className="word">
              {eventOBJ[4].keyWords[2]}
            </div>
          </div>
          <div data-scroll className="eventDetails">
            <div data-scroll className="eventName">
              {eventOBJ[4].name}
            </div>
            <div data-scroll className="viewEvent">
              <button data-scroll>View All Events</button>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default EventsSectionMobile;
