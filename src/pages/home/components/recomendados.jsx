import React from "react";
import Image1 from "../../../assets/menu1@2x.webp";
import Image2 from "../../../assets/menu2@2x.webp";
import Image3 from "../../../assets/menu3@2x.webp";
import Image4 from "../../../assets/menu4@2x.webp";
import Menu from "../../../assets/menu@2x_1.webp";

export default function recomendados() {
  return (
    <div id="chef">
      <div className="about-section-box">
        <div className="container mt-5 mb-5">
          <div className="row justify-content-md-left">
            <div className="col-sm chef">
              <h1>Los recomendados del chef:</h1>
              <div className="col-12 ">
                <div className="row row-cols-2">
                  <div className="col">
                    <img
                      className="img-thumbnail img-fluid float-right"
                      src={Image1}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <img
                      className="img-thumbnail img-fluid float-left"
                      src={Image2}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <img
                      className="img-thumbnail img-fluid"
                      src={Image3}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <img
                      className="img-thumbnail img-fluid"
                      src={Image4}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm mt-5 ">
              <div className="row justify-content-md-center">
                <div className="menu">
                  <img
                    className="img-thumbnail img-fluid"
                    src={Menu}
                    alt="Menu"
                  />
                </div>
              </div>
              <div className="col-sm mt-5">
                <div className="row justify-content-md-center">
                    <a className="btn home-btn" href="/Menu">Consultar el Menu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
