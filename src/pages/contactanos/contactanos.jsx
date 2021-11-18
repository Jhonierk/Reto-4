import React, { Fragment } from "react";
import "./contactanos.css";

export default function contactanos() {
  return (
    <div className="container">
      <div className="row my-7 mx-0">
        <div className="col-12">
          <h1 className="mb-0 title text-6">Contáctanos</h1>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col-12 mb-3 col-lg-6 mb-lg-0">
          <p className=" text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit in odio libero est corporis magni quo modi iure
            incidunt non, adipisci eos amet magnam ad distinctio dolores
            molestiae at laboriosam omnis accusantium totam qui illo. Illum
            fugit tenetur eos officia dolorum reprehenderit recusandae sint
            cupiditate perferendis eveniet? Repellendus, illo? Harum.
          </p>
          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ut
            accusamus nihil necessitatibus ipsa consequatur delectus soluta
            tenetur eaque fuga aliquid possimus, impedit neque maiores,
            laboriosam reiciendis commodi aperiam obcaecati. Eum nostrum, quae
            perferendis mollitia necessitatibus aut vero laboriosam cupiditate
            doloremque ea natus nobis molestias unde magnam, dolores esse culpa?
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <form
            action="mailto:reservas@salysalsa.com"
            method="POST"
            encType="text/plain"
          >
            <div className="form-group">
              <select className="form-control">
                <option value="" defaultValue>
                  Seleccione el servicio
                </option>
                <option value={1}>Preguntas</option>
                <option value={2}>Sugerecias</option>
                <option value={3}>PQRS</option>
                
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control field"
                placeholder="Asunto"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre completo"
                required
                minLength={15}
                maxLength={40}
                pattern="([a-zA-ZáéíóúÁÉÍÓÚñÑ]+[ ]+[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+)+"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo electrónico"
                required
                minLength={10}
                maxLength={40}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows={5}
                placeholder="Su mensaje"
                required
                minLength={10}
                maxLength={100}
                defaultValue={""}
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                required
              />
              <label
                className="form-check-label text font-italic"
                htmlFor="exampleCheck1"
              >
                Acepto términos y condiciones
              </label>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-orange px-7 py-3 font-weight-bold"
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
