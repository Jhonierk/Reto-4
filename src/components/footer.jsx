import React from "react";
import Logo from "../assets/logo@2x.webp";
import "bootstrap/dist/css/bootstrap.css";

export default function footer() {
  return (
    <footer>
      <div className="container-fluid mt-5 py-5 px-5 pien">
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-lg-0">
            <img
              className="img-fluid pie-image"
              src={Logo}
              alt="Logo Sal&Salsa"
            />
          </div>
          <div className="col-lg-4 col-sm-6 mb-lg-0 justify-content-between">
            <div className="d-flex justify-content-between w-links">
              <h3>
                <a className="text-light pie-a" href="/Mapa">
                  MAPA DEL SITIO
                </a>
              </h3>
              <h3>
                <a className="text-light pie-a" href="/Contactanos">
                  CONTÁCTANOS
                </a>
              </h3>
              <h3>
                <a className="text-light pie-a" href="/Reservas">
                  RESERVAS
                </a>
              </h3>
            </div>
            <div>
              <p className="text-light m-0">Restaurante Sal y Salsa Ltda.</p>
              <p className="text-light m-0">Calle 19 No. 7-30, Bogotá</p>
              <p className="text-light m-0">reservas@salysalsa.com</p>
              <p className="text-light">312 325 25 321</p>
              <p className="text-light">©Copyright 2021</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-lg-0 justify-content-between">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  src={
                    "https://maps.google.com/maps?q=Calle%2019%20No.%207-30,%20Bogot%C3%A1&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  }
                  width="300"
                  height="200"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="Mapa"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
