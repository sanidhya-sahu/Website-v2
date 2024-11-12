import { useEffect, useState } from "react";
import "./LandingPage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const ROWS = 6;
const COLS = 6;
const BLOCK_SIZE = 100; // Increased block size
const COOLDOWN = 1000;

const LandingPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tiles = document.querySelectorAll(".tile");
    setIsFlipped(!isFlipped);
    gsap.to('.tile', {
      rotateX: isFlipped ? 180 : 0,
      scrollTrigger: {
        trigger: "#landing-page",
        scroller: "body",
        markers: true,
        start: "top -1%",
        end: `top -50%`,
        scrub: 1,
        pin: true,
      },
      // duration: 1,
      // stagger: {
      //   amount: 0.5,
      //   from: "random",
      // },
      // ease: "power2.inOut",
      // onComplete: resolve,
    });
  })

  useEffect(() => {
    createBoard();
    initializeTileAnimation();
    // window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  const createTiles = (row, col) => {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.innerHTML = `
      <div class="tile-face tile-front"></div>
      <div class="tile-face tile-back"></div>
    `;

    const bgPosition = `${col * 20}% ${row * 20}%`;
    tile.querySelector(".tile-front").style.backgroundPosition = bgPosition;
    tile.querySelector(".tile-back").style.backgroundPosition = bgPosition;

    return tile;
  };

  const createBoard = () => {
    const board = document.querySelector(".board");
    board.innerHTML = ""; // Clear existing tiles to prevent duplication
    for (let i = 0; i < ROWS; i++) {
      const row = document.createElement("div");
      row.className = "row";
      for (let j = 0; j < COLS; j++) {
        row.appendChild(createTiles(i, j));
      }
      board.appendChild(row);
    }
  };

  const initializeTileAnimation = () => {
    const tiles = document.querySelectorAll(".tile");

    tiles.forEach((tile, index) => {
      let lastEnterTime = 0;

      tile.addEventListener("mouseenter", () => {
        const currentTime = Date.now();

        if (currentTime - lastEnterTime > COOLDOWN) {
          lastEnterTime = currentTime;

          let tileY;
          if (index % 6 === 0) {
            tileY = -40;
          } else if (index % 6 === 5) {
            tileY = 40;
          } else if (index % 6 === 1) {
            tileY = -20;
          } else if (index % 6 === 4) {
            tileY = 20;
          } else if (index % 6 === 2) {
            tileY = -10;
          } else {
            tileY = 10;
          }

          animateTile(tile, tileY);
        }
      });
    });
  };

  const handleScroll = (event) => {
    setScrollLocked(true);
    if (scrollLocked) {
      event.preventDefault();
      return; // Prevent further scrolling while the tiles are flipping
    }

    const tiles = document.querySelectorAll(".tile");

    flipAllTiles(tiles).then(() => {
      setTimeout(() => {
        setScrollLocked(false); // Unlock scrolling after flip animation
      }, 500);
    });
  };

  const animateTile = (tile, tileY) => {
    gsap
      .timeline()
      .set(tile, { rotateX: isFlipped ? 180 : 0, rotateY: 0 })
      .to(tile, {
        rotateX: isFlipped ? 450 : 270,
        rotateY: tileY,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(
        tile,
        {
          rotateX: isFlipped ? 540 : 360,
          rotateY: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.25"
      );
  };

  const flipAllTiles = (tiles) => {
    console.log(tiles);

    return new Promise((resolve) => {
      setIsFlipped(!isFlipped);
      gsap.to(tiles, {
        rotateX: isFlipped ? 180 : 0,
        // duration: 1,
        stagger: {
          amount: 0.5,
          from: "random",
        },
        // ease: "power2.inOut",
        onComplete: resolve,
        pin: true
      });
    });
  };

  return (
    <div id="landing-page" className="landing-page">
      <nav>
        <a href="#">AI Club</a>
        <button
          id="flipButton"
          onClick={() => flipAllTiles(document.querySelectorAll(".tile"))}
        >
          Flip Tiles
        </button>
      </nav>
      <section className="board"></section>
    </div>
  );
};

export default LandingPage;
