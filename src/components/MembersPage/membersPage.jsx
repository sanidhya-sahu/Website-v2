import { useEffect, useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './membersPage.css'
import { useSearchParams } from "react-router-dom";
import HeadSVG from '../../assets/teamHeadSvg.svg'
import data from '../../../public/Data/members.json'
const membersPage = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        const H = document.querySelector("#membersBox").clientWidth;
        let mm = gsap.matchMedia();
        mm.add("(max-width: 767px)", () => {
            gsap.to(".teamBox", {
                x: -H - 750,
                scrollTrigger: {
                    trigger: ".teamWrap",
                    scroller: "body",
                    start: "top 0%",
                    end: `top -${H / 2}%`,
                    scrub: 2,
                    pin: true,
                },
            });
        });
        mm.add("(min-width: 768px)", () => {
            gsap.to(".teamBox", {
                x: -H - 300,
                scrollTrigger: {
                    trigger: ".teamWrap",
                    scroller: "body",
                    start: "top 0%",
                    end: `top -${H / 2}%`,
                    scrub: 2,
                    pin: true,
                },
            });
        });
    })

    const [team, setTeam] = useState('')
    let [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        setTeam(searchParams.get("team"))
        var len = data[searchParams.get("team")].length
        if (len % 2 != 0) {
            len = len + 1
            for (let i = 0; i < len; i++) {
                if (!document.getElementById(`wave${i}`)) {
                    if (i == 0) {
                        document.getElementById('wave').innerHTML += `
                        <div className="waveBox">
                        <img id="wave${i}" style="position: relative;" src="src/assets/teamWave.svg" alt="" key=${i} />
                        </div>
                        `
                    }
                    else {
                        let leftVal = i * 28
                        document.getElementById('wave').innerHTML += `
                        <div className="waveBox">
                        <img id="wave${i}" style="position: relative;left: -${leftVal}px;" src="src/assets/teamWave.svg" alt="" key=${i} />
                        </div>
                        `
                    }
                }
            }
        }
        else {
            for (let i = 0; i < len; i++) {
                if (!document.getElementById(`wave${i}`)) {
                    if (i == 0) {
                        document.getElementById('wave').innerHTML += `
                        <div className="waveBox">
                        <img id="wave${i}" style="transform: rotate(3deg);position: relative;" src="src/assets/teamWave.svg" alt="" key=${i} />
                        </div>
                        `
                    }
                    else {
                        let leftVal = i * 28
                        document.getElementById('wave').innerHTML += `
                        <div className="waveBox">
                        <img id="wave${i}" style="transform: rotate(3deg);position: relative;left: -${leftVal}px;" src="src/assets/teamWave.svg" alt="" key=${i} />
                        </div>
                        `
                    }
                }
            }
        }
        data[searchParams.get("team")].forEach((e, i) => {
            if (!document.getElementById(`member${i}`)) {
                if (i == 0) {
                    document.getElementById('membersBox').innerHTML += `
                    <div className="member" id="member${i}" style="left:70px;flex-direction: column-reverse;bottom:0px">
                    <div id="teamDetailCont">
                        <div id="memName">${e.name}</div>
                        <div id="msg">${e.msg}</div>
                    </div>
                    <div id="mask">
                    <img id="teamImg" src="${e.img}" alt="" />
                    </div>
                    </div>
                    `
                }
                else {
                    var bottom = i % 2 == 0 ? 0 : -250
                    var colDirection = i % 2 != 0 ? 'column' : 'column-reverse'
                    var Left = Number(document.getElementById(`member${i - 1}`).style.left.replace('px', '')) + 140
                    document.getElementById('membersBox').innerHTML += `
                    <div className="member" id="member${i}" style="left:${Left}px;flex-direction: ${colDirection};bottom:${bottom}px">
                    <div id="teamDetailCont">
                        <div id="memName">${e.name}</div>
                        <div id="msg">${e.msg}</div>
                    </div>
                    <div id="mask"> 
                    <img id="teamImg" src="${e.img}" alt="" />
                    </div>
                    </div>
                    `
                }
            }
        });

    }, [searchParams])
    return (
        <div className='teamWrap'>
            <div className="teamCont">
                <div className="teamHead">
                    <h1>Meet the minds behind the <span style={{ position: 'absolute', paddingLeft: '17px' }} ><img className='headBorder' src={HeadSVG} alt="" />magic</span></h1>
                    <h1 className='teamNameHead' >The <span className='headHighlight'>{team}</span> Team</h1>
                </div>
                <div className="teamBox">
                    <div id='wave' className="wave"></div>
                    <div id="membersBox"></div>
                </div>
            </div>
        </div>
    )
}

export default membersPage
