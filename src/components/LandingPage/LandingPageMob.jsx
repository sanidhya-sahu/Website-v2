import React from 'react'
import './LandingPage.css'
function LandingPage() {
    return (
        <div className='landingPageWrap'>
            <div className="landingMain">
                <div className="box1row1">
                    AI CLUB
                    <img src="/PublicAssets/club_dark.png" alt="" srcset="" />
                </div>
                <div className="mainBox1">
                    <div className="box1row2">
                        <div className="box2row1">
                            AI Club is the fastest growing club in VIT Bhopal imparting knowledge about AI and pioneering AI based advanced education to students.
                        </div>
                        <div className="box1row2side"></div>
                    </div>
                    <div className="box1row3">
                        <div className="box1row3side"></div>
                        <div className="box2row2col1">
                            <img src="/PublicAssets/robot.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className="mainBox2">
                    <div className="box1row2main">
                        Machine Learning
                        <br />
                        Natural Language Processing
                        <br />
                        Generative AI
                        <br />
                        Computer Vision
                        <br />
                        Robotics
                    </div>
                </div>
                <div className="box1row3main">
                    Let’s talk about <span> &nbsp; AI</span>
                </div>
            </div>
            <div className="landingInfiniteScroll">
                <div class="landingFooter">
                    Hackathons / Projects / Workshops / Webinars / Sessions / Events / Competitions / Exhibitions
                </div>
            </div>
        </div>
    )
}

export default LandingPage
