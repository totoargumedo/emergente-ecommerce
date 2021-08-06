import React from "react";

// Navbar del ecommerce

const NavBar = () => {
  return (
    <div>
      {/* logo del ecommerce */}
      <a className="navbrand headerNavbar__logo" href="index.html">
        <img
          src="images/logo-navbar.svg"
          width="130"
          height="130"
          alt="Logo Emergente"
        />
      </a>
      {/* links navegables */}
      <div
        className="collapse navbar-collapse d-md-flex justify-content-end headerNavbar__navegacion"
        id="navbarSecciones"
      >
        <div className="navbar-nav navbar-nav-scroll headerNavbar__navegacion__secciones">
          <a className="nav-item nav-link active" href="index.html">
            Inicio
          </a>
          <a className="nav-item nav-link" href="servicios.html">
            Servicios
          </a>
          <a className="nav-item nav-link" href="nosotros.html">
            Nosotros
          </a>
          <a className="nav-item nav-link" href="novedades.html">
            Novedades
          </a>
          <a className="nav-item nav-link" href="contacto.html">
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
