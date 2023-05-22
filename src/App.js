import React, { useEffect, useState, useRef } from "react";
// import Products from "./Components/Products";
// import Services from "./Components/Services";
import "./styles.scss";
// import { RandomObjectMover } from "./CoreComponents/Wander";
// import { ReactComponent as LogoIcon } from "../../images/logo.svg";
// import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import NavPill from "./Components/NavPill";

const vh = parseInt(
  Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  )
);

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCursorVisible, setCursorVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const hollowRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      let Y = e.pageY + 200 < vh ? e.pageY - 200 : vh - 200,
        X = e.pageX - 200;
      setPosition({ x: X, y: Y });
      hollowRef.current.setAttribute("style", `top: ${Y}px; left: ${X}px;`);
    };

    const handleMouseStop = () => {
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseStop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseStop);
    };
  }, []);

  return (
    <main className="home">
      <NavPill setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
      <Nav isNavOpen={isNavOpen} />
      <div className="hero">
        <button style={{ cursor: isCursorVisible ? 'pointer' : 'none' }} className="links" onClick={() => { setIsNavOpen(!isNavOpen); }}>Work<br />Experience</button>
        <div className="overlay">
          <div className="hollow" ref={hollowRef}></div>
        </div>
        <div className="title">
          <h1>Hi, I'm Aravind</h1>
          <h3>Frontend Developer</h3>
        </div>
      </div>
      <div className="home sections-wrapper">
        {/* <Services /> */}
        <div className="sections-inner">
          {/* <Products /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default App
