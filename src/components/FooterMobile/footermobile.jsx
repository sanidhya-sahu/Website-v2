import logo from "../../assets/logo.svg";
import "./footermobile.css";

const FooterMobile = () => {
  return (
    <>
      <div className="footer-mobile">
        <div className="footer-header">
          <div className="logo">
            <img src={logo} alt="AI Club Logo" />
          </div>
          <div className="footer-nav-mobile">
            <ul>
              <li>
                <a href="#">[ HOME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</a>
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
        </div>
        <div className="footer-aiclub">
          <h1>AI CLUB</h1>
        </div>
        <div className="footer-mobile-bottom">
          <p>ASK US ANYTHING</p>
          <button>How to register in AI Conclave 25?</button>
          <div className="footer-links">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">GitHub</a>
            <a href="#">Discord</a>
          </div>
          <p>Developed by Web Team '24</p>
        </div>
      </div>
    </>
  );
};

export default FooterMobile;
