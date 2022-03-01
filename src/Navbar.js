import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import './Seccions.css';

const Navbar = () => {
  
  const [opacityDiv, setopacityDiv] = useState(0);
  const [opacityDivInversa, setopacityDivInversa] = useState(1);

  const controlNavbar = () => {
    var max = 1;

    var opacity = max * (window.scrollY / (window.innerHeight / 4));
    var opacityInv = max * (1 - window.scrollY / (window.innerHeight / 4));

    opacity < 1 ? setopacityDiv(opacity) : setopacityDiv(1);

    opacityInv > 0 ? setopacityDivInversa(opacityInv) : setopacityDivInversa(0);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <header className="nav__purple" style={{ opacity: opacityDivInversa }}>
        HOLA DESDE HEADER 1
      </header>
      <header className="nav__blue" style={{ opacity: opacityDiv }}>
        HOLA DESDE HEADER 1
        <div>
          <nav className="flex-nav">
            <a className="links-nav" href="#1">
              section 1
            </a>
            <a className="links-nav" href="#2">
              section 2
            </a>
            <a className="links-nav" href="#3">
              section 3
            </a>
            <a className="links-nav" href="#4">
              section 4
            </a>
            <a className="links-nav" href="#5">
              section 5
            </a>
            <a className="links-nav" href="#6">
              section 6
            </a>
            <a className="links-nav" href="#7">
              section 7
            </a>
            <a className="links-nav" href="#8">
              section 8
            </a>
          </nav>
        </div>  
      </header>

      <div>
        <div className="div-sub" style={{ opacity: opacityDivInversa }}>
          <h1> HOLA DESDE DIV 1 </h1>
        </div>
        <div className="div-sub" style={{ opacity: opacityDivInversa }}>
          <h1> HOLA DESDE DIV 1 </h1>
        </div>
      
        
        <div className="div-subHeader">
          <h1> HOLA DESDE DIV </h1>
        </div>
        <div className="div-subHeader">
          <h1> HOLA DESDE DIV </h1>
        </div>
        <div className="div-subHeader">
          <h1> HOLA DESDE DIV </h1>
        </div>
        <div className="div-subHeader">
          <h1> HOLA DESDE DIV </h1>
        </div>
        <div className="div-subHeader">
          <h1> HOLA DESDE DIV </h1>
        </div>
        <div className="div-subHeader">
          <h1> HOLA DESDE DIV </h1>
        </div>
        <div className="div-subHeader">
          <h1> HOLA DESDE DIV </h1>
        </div>
        <div className="div-subHeader">
          <h1> HOLA DESDE DIV </h1>
        </div>
      </div>

   
    </>
  );
};

export default Navbar;
