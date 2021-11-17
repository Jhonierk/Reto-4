import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../pages/home/home.jsx";
import Menu from "../pages/menu/menu.jsx";
import Servicios from "../pages/servicios/servicios.jsx";
import Mapa from "../pages/mapa/mapa.jsx";
import Nosotros from "../pages/nosotros/nosotros.jsx";
import Contactanos from "../pages/contactanos/contactanos.jsx";
import Carrito from "../pages/carrito/carrito";
import Login from "../pages/login/login";
import Error404 from "../error404.jsx";

export default function header() {
  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top text-light">
          <Link className="navbar-brand nav-title font-weight-bold" to="/">
            SAL&SALSA
          </Link>
          <button
            className="navbar-toggler"
            data-target="#navbarScroll"
            data-toggle="collapse"
            type="button"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-end"
            id="navbarScroll"
          >
            <ul className="navbar-nav mr-auto mr-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link mx-lg-3 font-weight-bold text-white"
                  to="./Nosotros"
                >
                  NOSOTROS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-lg-3 font-weight-bold text-white"
                  to="/Menu"
                >
                  EL MENÚ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-lg-3 font-weight-bold text-white"
                  to="/Servicios"
                >
                  SERVICIOS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-lg-3 font-weight-bold text-white"
                  to="/Contactanos"
                >
                  CONTÁCTANOS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-lg-3 font-weight-bold text-white"
                  to="/Login"
                >
                  LOGIN
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-lg-2 font-weight-bold text-white"
                  to="/Carrito"
                >
                  CARRITO
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="badge" id="lblCartCount"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exaxct path="/Nosotros">
          <Nosotros />
        </Route>
        <Route exact path="/Menu">
          <Menu />
        </Route>
        <Route exaxct path="/Servicios">
          <Servicios />
        </Route>
        <Route exaxct path="/Contactanos">
          <Contactanos />
        </Route>
        <Route exaxct path="/Carrito">
          <Carrito />
        </Route>
        <Route exaxct path="/Mapa">
          <Mapa />
        </Route>
        <Route exaxct path="/Login">
          <Login />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}
