import React, { useEffect, useState } from 'react';
import './Projects.css';
import helmet from '/projects/helmet.jpeg'
import cityScapes from '/projects/cityscapes.png'
import agroAI from '/projects/agroAI.png'
import visualbert from '/projects/visualbert.png'
import GooeyCursor from "../Gooey Cursor/gooeyCursor.jsx";
function projectpage() {
  const [blurLayerHeight, setblurLayerHeight] = useState(0)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setblurLayerHeight(document.getElementById("projectWrap").clientHeight)
    })
    window.addEventListener('load', () => {
      setblurLayerHeight(document.getElementById("projectWrap").clientHeight)
    })
    scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <>
      <GooeyCursor />
      <div id='projectWrap' className='Projectwholepage'>
        <div id='blurLayer' className="blurLayer" style={{ height: `${blurLayerHeight}px` }}></div>
        <h1 className='Projects'>Our Projects</h1>
        <br />
        <br />
        <br />

        <div className="container">
          <div className="box1">
            <img class='projectBanner' src={cityScapes} alt="Description of the image" />
          </div>
          <span className="text1">Cityscapes (3D City Planning) : Users selects geographical topology for Generative Model.
            This generates 2D Citymaps and 3D Meshwork as JSON.
            The JSON Can be used to generate 3D city maps  for Artists in any Blender using bpy</span>
          <div className="box2">
            <img class='projectBanner' src={helmet} alt="Description of the image" />
          </div>
          <span className="text2">
            Real Time Helmet Detection. Non Helmet subjects on Bike are retrieved by capturing Vehicle No. to Govt. Database
          </span>
          <div className="box3">
            <img class='projectBanner' src={agroAI} alt="Description of the image" />
          </div>
          <span className="text3">AgroAI predicts Plants diseases and Fertilizer Option for plants.</span>
          <div className="box4">
            <img class='projectBanner' src={visualbert} alt="Description of the image" />
          </div>
          <span className="text4">VisualBERT is a multi-modal vision and language model. It can be used for visual question answering, multiple choice, visual reasoning and region-to-phrase correspondence tasks.</span>
        </div>
      </div>
    </>
  );
}

export default projectpage
