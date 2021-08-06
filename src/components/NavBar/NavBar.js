import React from "react";
import "./NavBar.css";
import logo from "./logo-navbar.svg";
// Navbar del ecommerce

const NavBar = () => {
  return (
    <div className="NavBar">
      {/* logo del ecommerce */}
      <a className="logoNavBar" href="index.html">
        <img src={logo} alt="Logo Emergente" />
      </a>
      {/* links navegables */}
      <div className="linksNavBar" id="navbarSecciones">
        <a className="itemNavBar" href="index.html">
          Inicio
        </a>
        <a className="itemNavBar" href="index.html">
          Servicios
        </a>
        <a className="itemNavBar" href="index.html">
          Nosotros
        </a>
        <a className="itemNavBar--active" href="index.html">
          Tienda
        </a>
        <a className="itemNavBar" href="index.html">
          Contacto
        </a>
      </div>
    </div>
  );
};

export default NavBar;
