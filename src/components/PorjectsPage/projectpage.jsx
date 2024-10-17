import React, { useEffect, useState } from 'react';
import './Projects.css';
import memberImage from '/src/assets/members23-24.png';

function projectpage() {
const [blurLayerHeight , setblurLayerHeight] = useState(0)
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setblurLayerHeight(document.getElementById("projectWrap").clientHeight)
    })
    window.addEventListener('load',()=>{
      setblurLayerHeight(document.getElementById("projectWrap").clientHeight)
    })
  },[])

  return (
    <div id='projectWrap' className='wholepage'>
      <div id='blurLayer' className="blurLayer" style={{height:`${blurLayerHeight}px`}}></div>
      <h1 className='Projects'>Our Projects</h1>
      <br />
      <br />
      <br />

      <div className="container">
        <div className="box1">
          <img src={memberImage} alt="Description of the image" />
        </div>
        <span className="text1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam in consequatur molestias? Eos, ea!</span>
        <div className="box2">box2</div>
        <span className="text2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam in consequatur molestias? Eos, ea!</span>
        <div className="box3">box3</div>
        <span className="text3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam in consequatur molestias? Eos, ea!</span>
        <div className="box4">box4</div>
        <span className="text4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam in consequatur molestias? Eos, ea!</span>
        <div className="box5">box5</div>
        <span className="text5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam in consequatur molestias? Eos, ea!</span>
        <div className="box6">box6</div>
        <span className="text6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam in consequatur molestias? Eos, ea!</span>
      </div>
    </div>

  );
}

export default projectpage
