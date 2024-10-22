import React from 'react'
import { useState, useEffect } from "react";
import "./gooeyCursor.css";
function gooeyCursor() {
    useEffect(() => {
        const blockContainer = document.getElementById('blocks')
        const blockSize = 70
        const scWidth = window.innerWidth
        const scHeight = window.innerHeight
        const numCol = Math.ceil(scWidth / blockSize)
        const numRow = Math.ceil(scHeight / blockSize)
        const numBlocks = (numCol * numRow)

        function createBlocks() {
            for (let index = 0; index < numBlocks; index++) {
                if (!document.getElementById(index)) {
                    const block = document.createElement('div')
                    block.classList.add("blockStyle")
                    block.id = index

                    blockContainer.appendChild(block)
                }
            }
        }
        createBlocks()
        
        window.addEventListener('mousemove', (event) => {
            const blockContainer = document.getElementById('blocks')
            const numBlocks = blockContainer.children.length
            for (let index = 0; index < numBlocks; index++) {
                let pointerPosX = event.clientX
                let pointerPosY = event.clientY
                let blockX = document.getElementById(index).getBoundingClientRect().x
                let blockEndX = document.getElementById(index).getBoundingClientRect().x + 70
                let blockY = document.getElementById(index).getBoundingClientRect().y
                let blockEndY = document.getElementById(index).getBoundingClientRect().y + 70
                if (pointerPosX >= blockX && pointerPosX <= blockEndX) {
                    if (pointerPosY >= blockY && pointerPosY <= blockEndY) {
                        document.getElementById(index).classList.add("blockhighlight")
                        setTimeout(() => {
                            document.getElementById(index).classList.remove("blockhighlight")
                        }, 500);
                    }
                }
            }
        })

    }, [])

    const boxContStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 100000000000000,
        pointerEvents: "none"
    }
    const boxStyle = {
        width: '105vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        overflow: 'hidden',
        position: "absolute",
        zIndex: 10000,
        flexWrap: "wrap"
    }


    return (
        <div id="box-cont" style={boxContStyle} >
            <div id="blocks" style={boxStyle}></div>
        </div>
    )
}

export default gooeyCursor
