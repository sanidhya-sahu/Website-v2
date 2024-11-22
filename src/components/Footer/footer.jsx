import "./footer.css";
import React from "react";
// import pageTopArrow from '/pageTopArrow.svg'
export default function footer() {
  return (
    <div className="Mainfooter">
      <div className="footCont1">
        <h1>AI CLUB</h1>
        <img
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="topArrowSvg"
          src="/PublicAssets/pageTopArrow.svg"
          alt=""
        />
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="topArrowtxt"
        >
          Page Top
        </div>
      </div>
      <div className="footCont2">
        <div className="foot2cont1">&copy; 2024 AI Club - VIT Bhopal</div>
        <div className="foot2cont2">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/aiclub-vitb/mycompany/"
          >
            LinkedIn
          </a>
          <a target="_blank" href="https://www.instagram.com/aiclub.vitb">
            Instagram
          </a>
          <a target="_blank" href="https://github.com/aiclubvitbhopal">
            Github
          </a>
          <a target="_blank" href="#">
            Discord
          </a>
        </div>
        <div className="foot2cont3">Developed by Web Team ’24 💚</div>
      </div>
    </div>
  );
}
