import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./project.css";
import ProjArrow from "../../assets/projArrow";
import ViewmoreArrow from "../../assets/viewmoreArrow";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
    const [isDark, setIsDark] = useState(false);

    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        const H = document.querySelector(".projectPage").clientWidth;
        console.log(H);
        // to make body dark

        gsap.to("body", {
            background: "black",
            scrollTrigger: {
                trigger: ".projectPage",
                scroller: "body",
                // markers: true,
                start: "top 10%",
                end: "top 10%",
                scrub: 1,
                onEnter: () => setIsDark(true),
                onLeaveBack: () => setIsDark(false),
            },
        });

        gsap.to(".projectPage", {
            translateX: -H,
            scrollTrigger: {
                trigger: ".projectPage",
                scroller: "body",
                // markers: true,
                start: "top -5%",
                end: `top -${H / 6}%`,
                scrub: 2,
                pin: true,
            },
        });
    });

    return (
        <div className="projectCover">
            <div data-scroll className="projectPage">
                <div
                    className="eventTitle"
                    style={{
                        position: "absolute",
                        top: "90px",
                        color: isDark ? "white" : "black",
                    }}
                >
                    /Projects
                </div>
                <div
                    className="ghost"
                    style={{
                        width: "60px",
                    }}
                ></div>
                <div data-scroll className="projectTitle">
                    <h1 style={{ color: isDark ? "white" : "black" }}>
                        Our Cool Creations
                    </h1>
                    <ProjArrow fill={isDark ? "white" : "black"} />
                </div>
                <div data-scroll className="container1">
                    <div className="projImg">
                        <div className="projMedia"></div>
                        <div className="projImgMask"></div>
                    </div>
                    <div className="projDesc">
                        DESIGN SERVICES ARE FOCUSED ON TRANSFORMING THE ESSENCE OF YOUR BRAND
                        INTO A VISUALLY APPEALING AND INTUITIVELY UNDERSTANDABLE ONLINE
                        PRESENCE.
                    </div>
                    <div className="projName">XYZ Project</div>
                    <div className="projNum">01</div>
                </div>
                <div data-scroll className="container2">
                    <div className="projImg">
                        <div className="projMedia"></div>
                        <div className="projImgMask"></div>
                    </div>
                    <div className="projDesc">
                        DESIGN SERVICES ARE FOCUSED ON TRANSFORMING THE ESSENCE OF YOUR BRAND
                        INTO A VISUALLY APPEALING AND INTUITIVELY UNDERSTANDABLE ONLINE
                        PRESENCE.
                    </div>
                    <div className="projName">XYZ Project</div>
                    <div className="projNum">02</div>
                </div>
                <div data-scroll className="container3">
                    <div className="projImg">
                        <div className="projMedia"></div>
                        <div className="projImgMask"></div>
                    </div>
                    <div className="projDesc">
                        DESIGN SERVICES ARE FOCUSED ON TRANSFORMING THE ESSENCE OF YOUR BRAND
                        INTO A VISUALLY APPEALING AND INTUITIVELY UNDERSTANDABLE ONLINE
                        PRESENCE.
                    </div>
                    <div className="projName">XYZ Project</div>
                    <div className="projNum">03</div>
                </div>
                <div className="projectTitle viewmore">
                    <Link to="/projects" style={{ textDecoration: "none" }}>
                        <h1>View More Projects</h1>
                        <br /> <br />
                        <ViewmoreArrow></ViewmoreArrow>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;
