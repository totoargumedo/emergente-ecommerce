import React from "react";
import "./NavBar.css";
import logo from "./logo-navbar.svg";
import { Link } from "react-router-dom";

// Componentes
import { CartWidget } from "../CartWidget/CartWidget";
import ItemSearch from "../ItemSearch/ItemSearch";

// Navbar del ecommerce

export const NavBar = () => {
  return (
    <div className="NavBar">
      {/* logo del ecommerce */}
      <Link className="logoNavBar" to="/">
        <img src={logo} alt="Logo Emergente" />
      </Link>
      {/* links navegables */}
      <div className="linksNavBar" id="navbarSecciones">
        <Link className="itemNavBar" to="/">
          Inicio
        </Link>
        <Link className="itemNavBar" to="/nosotros">
          Nosotros
        </Link>
        <Link className="itemNavBar" to="/tienda">
          Tienda
        </Link>
        <Link className="itemNavBar" to="/contacto">
          Contacto
        </Link>

        <CartWidget />
        <ItemSearch />
      </div>
    </div>
  );
};
