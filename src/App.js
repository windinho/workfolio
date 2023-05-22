import React, { useEffect, useState, useRef } from "react";
import Nav from "./Components/Nav";
import NavPill from "./Components/NavPill";
import "./styles.scss";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const hollowRef = useRef(null)

  let mouseX = 0;
  let mouseY = 0;
  useEffect(() => {
    let ballX = 0;
    let ballY = 0;

    let speed = 0.08;

    function animate() {
      let distX = mouseX - ballX;
      let distY = mouseY - ballY;

      ballX = ballX + (distX * speed);
      ballY = ballY + (distY * speed);

      hollowRef.current.style.left = ballX + "px";
      hollowRef.current.style.top = ballY + "px";

      requestAnimationFrame(animate);
    }
    animate();
    
    const handleMouseMove = (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
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
        {/* <button className="links" onClick={() => { setIsNavOpen(!isNavOpen); }}>Work<br />Experience</button> */}
        <b>React</b>
        <b>HTML</b>
        <b>CSS</b>
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
