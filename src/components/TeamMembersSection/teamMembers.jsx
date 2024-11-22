import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./team.css";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const useGSAP = (animationCallback) => {
  useEffect(() => {
    animationCallback();
  }, [animationCallback]);
};

const BrandingSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Data/leads.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      animateSections();
    }
  }, [data]);

  const animateSections = () => {
    gsap.utils.toArray("#brand_col .left li").forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 1, y: 50, rotation: 0, x: 0 },
        {
          autoAlpha: 1,
          y: -20,
          x: -30,
          rotation: -10,
          scrollTrigger: {
            trigger: section,
            start: "top 50%",
            end: "bottom 0%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    gsap.utils.toArray("#brand_col .center li").forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 1, y: 50 },
        {
          autoAlpha: 1,
          y: -50,
          scrollTrigger: {
            // markers:true,
            trigger: section,
            start: "top 60%",
            end: "bottom 0%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    gsap.utils.toArray("#brand_col .right li").forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 1, y: 50, rotation: 0 },
        {
          autoAlpha: 1,
          y: -10,
          x: 10,
          rotation: 10,
          scrollTrigger: {
            trigger: section,
            start: "top 50%",
            end: "bottom 0%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    //   const faculty1 = document.querySelector(".faculty1");
    //   if (faculty1) {
    //     gsap.fromTo(
    //       faculty1,
    //       { autoAlpha: 1, y: -50 },
    //       {
    //         autoAlpha: 1,
    //         opacity: 1,
    //         y: 20,
    //         scrollTrigger: {
    //           trigger: faculty1,
    //           start: "top 70%",
    //           end: "bottom 0%",
    //           scrub: 2,
    //           toggleActions: "play reverse play reverse",
    //         },
    //       }
    //     );
    //   }

    //   const faculty2 = document.querySelector(".faculty2");
    //   if (faculty2) {
    //     gsap.fromTo(
    //       faculty2,
    //       { autoAlpha: 1, y: -50 },
    //       {
    //         autoAlpha: 1,
    //         opacity: 1,
    //         y: 20,
    //         scrollTrigger: {
    //           trigger: faculty2,
    //           start: "top 70%",
    //           end: "bottom 0%",
    //           scrub: 2,
    //           toggleActions: "play reverse play reverse",
    //         },
    //       }
    //     );
    //   }
  };

  useGSAP(() => {
    animateSections();
  });

  useEffect(() => {
    window.addEventListener('load', () => {
      document.getElementById('viewweb').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'View Web Team'
      })
      document.getElementById('viewweb').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })

      document.getElementById('viewcontent').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'View Content Team'
      })
      document.getElementById('viewcontent').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })

      document.getElementById('viewtech').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'View Technical Team'
      })
      document.getElementById('viewtech').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })
      document.getElementById('viewevent').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'View Event Team'
      })
      document.getElementById('viewevent').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })
      document.getElementById('vieweditorial').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'View Editorial Team'
      })
      document.getElementById('vieweditorial').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })
      document.getElementById('viewsocialmedia').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'View Social Media Team'
      })
      document.getElementById('viewsocialmedia').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })
      document.getElementById('viewgraphics').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'View Graphics Team'
      })
      document.getElementById('viewgraphics').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })
      document.getElementById('viewcontent').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'View Content Team'
      })
      document.getElementById('viewcontent').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })
      document.getElementById('viewoutreach').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'View PR & Outreach Team'
      })
      document.getElementById('viewoutreach').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })
      document.getElementById('viewpartnership').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'View Partnership Team'
      })
      document.getElementById('viewpartnership').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })
    });
  }, [])

  const renderListItems = (items) => {
    return items.map((item, index) => (
      <Link to={item.team != false ? `/members?team=${item.team}` : null} style={{ textDecoration: "none" }}>
        <li id={`view${item.team}`} key={index}>
          <div>
            <h3>{item.name}</h3>
          </div>
          <picture>
            <img fetchpriority="high" alt='' src={item.img} />
          </picture>
          <div>
            <span>{item.teamPos}</span>
          </div>
        </li>
      </Link >
    ));
  };

  return (
    <div id="branding">
      <div className="meetteam">MEET OUR TEAM</div>
      <div className="faculty">
        {/* <div className="faculty1">
          <img src="src/assets/faculty.jpg" alt="Teacher 1" />
          <div className="designation">
            Teacher 1<br />
            Designation
          </div>
        </div> */}
        <div className="faculty2">
          <img src="/membersIMG/Ajeet Sir Pic.jpg" alt="Teacher" />
          <div className="designation">
            Dr. Ajeet Singh<br />
            Club Co-ordinator
          </div>
        </div>
      </div>

      <div id="brand_col">
        <ul className="left">{renderListItems(data.slice(0, 5))}</ul>
        <ul className="center">{renderListItems(data.slice(5, 10))}</ul>
        <ul className="right">{renderListItems(data.slice(10))}</ul>
      </div>
    </div>
  );
};

export default BrandingSection;
