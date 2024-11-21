import React, { useEffect } from 'react'
import backBut from '../../assets/backBut.png' 
import './back.css'
import { useNavigate } from "react-router-dom";
function backButton(props) {
    const navigate = useNavigate();
    useEffect(()=>{
        if (props.top) {
            document.getElementById('backButtonWrap').style.top = props.top
        }
        if (props.left) {
            document.getElementById('backButtonWrap').style.left = props.left
        }
        if (props.filter) {
            document.getElementById('backButtonWrap').style.filter = props.filter
        }
        if (props.color) {
            document.getElementById('backtxt').style.color = props.color
        }
        if (!props.textDisplay) {
            document.getElementById('backtxt').style.display = 'none'
        }
    },[])
  return (
    <div onClick={()=>navigate('/')} id='backButtonWrap' className='backButtonWrap'>
      <img src={backBut} alt="" srcset="" />
      <h5 id='backtxt' >Home</h5>
    </div>
  )
}

export default backButton
