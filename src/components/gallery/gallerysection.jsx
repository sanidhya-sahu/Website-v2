import React from 'react'
import './gallery.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const gallerysection = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.to('#galleryBox1', {
            x: 0,
            opacity:1,
            scrollTrigger: {
                trigger: '.galleryWrap',
                // markers:true,
                start: "top 70%",
                end: "top 5%",
                scrub: 1,
            },
        })
        gsap.to('#galleryBox2', {
            y: 0,
            opacity:1,
            scrollTrigger: {
                trigger: '.galleryWrap',
                // markers:true,
                start: "top 70%",
                end: "top 5%",
                scrub: 1,
            },
        })
        gsap.to('#galleryBox3', {
            opacity:1,
            y:0,
            scrollTrigger: {
                trigger: '.galleryWrap',
                // markers:true,
                start: "top 70%",
                end: "top 5%",
                scrub: 1,
            },
        })
        gsap.to('#galleryBox4', {
            x: 0,
            opacity:1,
            scrollTrigger: {
                trigger: '.galleryWrap',
                // markers:true,
                start: "top 70%",
                end: "top 5%",
                scrub: 1,
            },
        })
        gsap.to('#galleryBox5', {
            x: 0,
            opacity:1,
            scrollTrigger: {
                trigger: '.galleryWrap',
                // markers:true,
                start: "top 70%",
                end: "top 5%",
                scrub: 1,
            },
        })
    })
    return (
        <div className='galleryWrap'>
            <div className="eventTitle galleryTitle">/Gallery</div>
            <div className="galleryRow1">
                <div className="ghostboximg1"></div>
                <div id='galleryBox1' className="boximg1"></div>
                <div className="ghostboximg2"></div>
            </div>
            <div className="galleryRow2">
                <div id='galleryBox2' className="boximg1"></div>
                <div className="boximg2"></div>
                <div id='galleryBox3' className="boximg3"></div>
            </div>
            <div className="galleryRow3">
                <div id='galleryBox4' className="boximg1"></div>
                <div id='galleryBox5' className="boximg2"></div>
            </div>
        </div>
    )
}


export default gallerysection
