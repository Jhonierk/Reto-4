import React from "react";
import Date from "./menu.json";


export default function dish() {

  return (
    <section>
      <div className="container">
        {Date.map((post) => {
          return (
            <div className="row mb-4" >
              <div className="col-lg-4 col-mb">
                <img
                  className="card-img-top img-card"
                  src={`${process.env.PUBLIC_URL}/assets/${post.img}`}
                  alt={post.img}
                />
              </div>
              <div className="col-lg-5 col-mb">
                <h4 className="pedido-plate font-weight-bold">
                  {post.nombre}
                </h4>
                <p>{post.descripcion}</p>
                <h4 className="value font-weight-bold">${post.precio}</h4>
              </div>
              <div className="col-lg-3 col-mb">
                <h6 className="d-flex justify-content-center font-weight-bold title-color">
                  CANTIDAD
                </h6>
                <div className="d-flex justify-content-center mb-2">
                  <button
                    className="btn font-weight-bold btn-cal"
                    type="button"
                  >
                    -
                  </button>
                  <input
                    className="pedido-input text-center"
                    id="quantity"
                    type="number"
                    inputMode="numeric"
                    defaultValue="0"
                  />
                  <button
                    className="btn font-weight-bold btn-cal"
                    type="button"
                  >
                    +
                  </button>
                </div>
                <a
                  className="btn pedido-btn-add d-flex justify-content-center"
                  role="button"
                >
                  <i className="fas fa-cart-plus mr-2 "></i>
                  AÑADIR AL CARRITO
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
