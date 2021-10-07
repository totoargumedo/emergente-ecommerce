import React from "react";

// // LIBRERIAS
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// import "semantic-ui-css/semantic.min.css";

// PAGES
import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";
import Tienda from "./pages/Tienda/Tienda";
import Contacto from "./pages/Contacto/Contacto";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./pages/CartContainer/CartContainer";

// PROVIDERS
import CartProvider from "./context/CartContext";
import MonstersProvider from "./context/MonstersContext";
// Componentes
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  return (
    <CartProvider>
      <MonstersProvider>
        <Router>
          <div className="App">
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/nosotros" component={Nosotros} />
              <Route path="/tienda" component={Tienda} />
              <Route path="/contacto" component={Contacto} />
              <Route path="/:type/:index" component={ItemDetailContainer} />
              <Route path="/cart" component={CartContainer} />
            </Switch>
          </div>
        </Router>
      </MonstersProvider>
    </CartProvider>
  );
};
