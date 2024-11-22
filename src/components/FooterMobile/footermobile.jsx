import "./footerMob.css";
import React from 'react'

const FooterMobile = () => {
  return (
    <div className="mob_Mainfooter">
      <div className="mob_footCont1">
        <h1>AI CLUB</h1>
        <h5>where humans and machines unite</h5>
      </div>
      <div className="mob_footCont2">
        <div className="mob_foot2cont1">
        &copy; 2024 AI Club - VIT Bhopal
        </div>
        <div className="mob_foot2cont3">
        Developed by Web Team ’24 💚
        </div>
        <div className="mob_foot2cont2">
          <a target="_blank" href="https://www.linkedin.com/company/aiclub-vitb/mycompany/">LinkedIn</a>
          <a target="_blank" href="https://www.instagram.com/aiclub.vitb">Instagram</a>
          <a target="_blank" href="https://github.com/aiclubvitbhopal">Github</a>
          <a target="_blank" href="#">Discord</a>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
