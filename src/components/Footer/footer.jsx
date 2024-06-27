import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footerWrap">
      <div className="mainFooter">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="AI Club Logo" />
          </div>
          <div className="nav">
            <ul>
              <li>
                <a href="#">
                  [
                  HOME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
                </a>
              </li>
              <li>
                <a className="home" href="#">
                  ABOUT
                </a>
              </li>
              <li>
                <a className="home" href="#">
                  PROJECT
                </a>
              </li>
              <li>
                <a className="home" href="#">
                  MAGAZINE
                </a>
              </li>
              <li>
                <a className="home" href="#">
                  EVENTS
                </a>
              </li>
            </ul>
          </div>
          <div className="header-right">
            <span className="ask">ASK US ANYTHING</span>
            <div className="ask-us">
              <button>How to register in AI Conclave 25?</button>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="title">
            <h1>AI CLUB</h1>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <p>© 2024 AI Club - VIT Bhopal</p>
          <div className="links">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">GitHub</a>
            <a href="#">Discord</a>
          </div>
        </div>
        <p className="developed-by">Developed by Web Team '24 with 🖤</p>
      </div>
    </div>
  );
};

export default Footer;
