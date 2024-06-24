import React, { useEffect } from 'react'
import './about.css'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import github from '../../assets/github.svg'
import discord from '../../assets/discord.svg'
import AI from '../../assets/AI.svg'
import CLUB from '../../assets/CLUB.svg'
import menuWidget from '../../assets/menuWidget.svg'
import flower from '../../assets/flower.svg'
import knowMoreArrow from '../../assets/knowMoreArrow.svg'
import { Link } from "react-router-dom";

const About = () => {
    function scrollToBottom() {
        document.getElementById('aboutBottom').scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div data-scroll className='aboutWrap'>
            <div data-scroll className="top">
                <div data-scroll className="aboutBox">
                    <div className="aboutHead">
                        <h1>About</h1>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <button className='aboutHeadButton' >Home <img src={menuWidget} alt="" /></button>
                        </Link>
                    </div>
                    <div className="aboutMain">
                        <img src={flower} alt="" />
                        <p>A place to share one’s Passion for <span>AI</span></p>
                        <button onClick={scrollToBottom}>Know More <img src={knowMoreArrow} alt="" /></button>
                    </div>
                    <div className="quote">
                        <p>“<span>Machine intelligence </span>is the last invention that humanity will ever need to make.”</p>
                    </div>
                </div>
                <div className="topContent">
                    <div className="textup">
                        Who are
                    </div>
                    <div className="textdown">
                        <div className="textdownleft">We ?</div>
                        <div className="textdownright">We are a very new club of VIT Bhopal, for all the futuristic ones. We promise to make systems adaptive through artificial intelligence. We will be organizing webinars, debates, various competitions to show up your skills and improve the abilities to analyze, and develop computational intelligence. </div>
                    </div>
                </div>
                <div data-scroll className="sideBox">
                    <img className='AI_SVG' src={AI} alt="AI" />
                    <div className="sideTopBox">
                        <div className="socials">
                            <a target='_blank' href="https://www.linkedin.com/company/aiclub-vitb/mycompany/">
                                <div className="circle">
                                    <img src={linkedin} alt="L" />
                                </div>
                            </a>
                            <a target='_blank' href="https://www.instagram.com/aiclub.vitb/?hl=en">
                                <div className="circle">
                                    <img src={instagram} alt="I" />
                                </div>
                            </a>
                            <a target='_blank' href="https://github.com/aiclubvitbhopal">
                                <div className="circle">
                                    <img src={github} alt="G" />
                                </div>
                            </a>
                            <a target='_blank' href="https://discord.com/invite/CnhaxT8k">
                                <div className="circle">
                                    <img src={discord} alt="D" />
                                </div>
                            </a>
                        </div>
                        <div className="line"></div>
                        <div className="para">
                            <div className="head">
                                Join Our Community
                            </div>
                            <div className="content">
                                Explore artificial intelligence through workshops, projects, and discussions. Connect with AI enthusiasts and prepare for AI careers. Join the AI Club!
                            </div>
                        </div>
                    </div>
                    <div className="sideBottomBox">
                        <div className="cont1">
                            <div className="subCont11"></div>
                            <div className="subCont12"></div>
                        </div>
                        <div className="cont2">
                            <div className="subCont21"></div>
                            <div className="subCont22"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-scroll id='aboutBottom' className="bottom">
                <img className='AI_SVG CLUB_SVG' src={CLUB} alt="CLUB" />
                <div className="content">
                    <div className="textup">
                        Who are
                    </div>
                    <div className="textdown">
                        <div className="textdownleft">We ?</div>
                        <div className="textdownright">We are a very new club of VIT Bhopal, for all the futuristic ones. We promise to make systems adaptive through artificial intelligence. We will be organizing webinars, debates, various competitions to show up your skills and improve the abilities to analyze, and develop computational intelligence. </div>
                    </div>
                </div>
                <div className="stats">
                    <div className="statText">
                        More Than Just Talk: Experience <span>AI</span> Through Events, Competitions & Collaboration
                    </div>
                    <div className="statBox">
                        <div className="row1">
                            <div className="istatBox statBox1">
                                <div className="purplayer"></div>
                                <div className="statName statName1">Members Community</div>
                                <div className="statCount statCount1">280 +</div>
                            </div>
                            <div className="istatBox statBox2">
                                <div className="greenlayer"></div>
                                <div className="statName statName2">Speakers Invited</div>
                                <div className="statCount statCount2">25 +</div>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="istatBox statBox3">
                                <div className="greenlayer"></div>
                                <div className="statName statName3">Events Conducted</div>
                                <div className="statCount statCount3">40 +</div>
                            </div>
                            <div className="istatBox statBox4">
                                <div className="purplayer"></div>
                                <div className="statName statName4">Competitions</div>
                                <div className="statCount statCount4">5 +</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="BottomJoinBox">
                    <div className="socials">
                        <a target='_blank' href="https://www.linkedin.com/company/aiclub-vitb/mycompany/">
                            <div className="circle">
                                <img src={linkedin} alt="L" />
                            </div>
                        </a>
                        <a target='_blank' href="https://www.instagram.com/aiclub.vitb/?hl=en">
                            <div className="circle">
                                <img src={instagram} alt="I" />
                            </div>
                        </a>
                        <a target='_blank' href="https://github.com/aiclubvitbhopal">
                            <div className="circle">
                                <img src={github} alt="G" />
                            </div>
                        </a>
                        <a target='_blank' href="https://discord.com/invite/CnhaxT8k">
                            <div className="circle">
                                <img src={discord} alt="D" />
                            </div>
                        </a>
                    </div>
                    <div className="line"></div>
                    <div className="para">
                        <div className="head">
                            Join Our Community
                        </div>
                        <div className="content">
                            Explore artificial intelligence through workshops, projects, and discussions. Connect with AI enthusiasts and prepare for AI careers. Join the AI Club!
                        </div>
                    </div>
                </div>
                <div className="foot">
                    <div className="line"></div>
                    <div className="footData">
                        <div className="footText">AI CLUB - VIT BHOPAL</div>
                        <div className="socials">
                            <a target='_blank' href="https://www.linkedin.com/company/aiclub-vitb/mycompany/">
                                <div className="circle">
                                    <img src={linkedin} alt="L" />
                                </div>
                            </a>
                            <a target='_blank' href="https://www.instagram.com/aiclub.vitb/?hl=en">
                                <div className="circle">
                                    <img src={instagram} alt="I" />
                                </div>
                            </a>
                            <a target='_blank' href="https://github.com/aiclubvitbhopal">
                                <div className="circle">
                                    <img src={github} alt="G" />
                                </div>
                            </a>
                            <a target='_blank' href="https://discord.com/invite/CnhaxT8k">
                                <div className="circle">
                                    <img src={discord} alt="D" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
