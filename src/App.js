import React from "react";

// // LIBRERIAS
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import "semantic-ui-css/semantic.min.css";

// PAGES
import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";
import { Tienda } from "./pages/Tienda/Tienda";
import Contacto from "./pages/Contacto/Contacto";
import { ItemDetailContainer } from "./pages/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./pages/CartContainer/CartContainer";

// Componentes
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/tienda" component={Tienda} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/monster/:index" component={ItemDetailContainer} />
          <Route path="/cart" component={CartContainer} />
        </Switch>
      </div>
    </Router>
  );
};
