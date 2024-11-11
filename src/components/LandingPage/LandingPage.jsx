import { useEffect, useState } from "react";
import "./LandingPage.css";
import gsap from "gsap";

const ROWS = 6;
const COLS = 6;
const BLOCK_SIZE = 100; // Increased block size
const COOLDOWN = 1000;

const LandingPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    createBoard();
    initializeTileAnimation();
    if (!window.blockInfo) {
      window.blockInfo = createBlocks();
    }
    document.addEventListener("mousemove", highlightBlock);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", highlightBlock);
      window.removeEventListener("scroll", handleScroll);
    };
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
    if (scrollLocked) {
      event.preventDefault();
      return; // Prevent further scrolling while the tiles are flipping
    }

    setScrollLocked(true);
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
    return new Promise((resolve) => {
      setIsFlipped(!isFlipped);
      gsap.to(tiles, {
        rotateX: isFlipped ? 180 : 0,
        duration: 1,
        stagger: {
          amount: 0.5,
          from: "random",
        },
        ease: "power2.inOut",
        onComplete: resolve,
      });
    });
  };

  const createBlocks = () => {
    const blocksContainer = document.getElementById("blocks");
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth / BLOCK_SIZE);
    const numRows = Math.ceil(screenHeight / BLOCK_SIZE);
    const numBlocks = numCols * numRows;

    for (let i = 0; i < numBlocks; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.dataset.index = i;
      blocksContainer.appendChild(block);
    }

    return { numCols, numBlocks };
  };

  const highlightBlock = (event) => {
    const { numCols } = window.blockInfo;
    const blocksContainer = document.getElementById("blocks");
    const rect = blocksContainer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const col = Math.floor(x / BLOCK_SIZE);
    const row = Math.floor(y / BLOCK_SIZE);
    const index = row * numCols + col;

    const block = blocksContainer.children[index];
    if (block) {
      block.classList.add("highlight");
      setTimeout(() => {
        block.classList.remove("highlight");
      }, 250);
    }
  };

  return (
    <div className="landing-page">
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
      <div className="blocks-container">
        <div id="blocks"></div>
      </div>
      <div style={{ height: "2000px", backgroundColor: "lightgrey" }}></div>
    </div>
  );
};

export default LandingPage;
