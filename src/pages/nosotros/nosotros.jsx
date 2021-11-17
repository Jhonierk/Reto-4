import React from "react";
import History from "./components/history";
import Personal from "./components/personal";
import Comentario from "../../components/comentarios.jsx";
import "./nosotros.css";
import Date from "./components/nosotros.json";

export default function nosotros() {
  return (
    <div>
      <History />
      <div class="personal">
        <div className="container">
          <div className="row pt-5">
            {Date.map(post => {
              return (
                <div className="col-sm-4 mb-1">
                  <Personal
                    img={`${process.env.PUBLIC_URL}/assets/${post.img}`}
                    name={post.name}
                    separator={`${process.env.PUBLIC_URL}/assets/icons/${post.imgSeparador}`}
                    rank={post.cargo}
                  />
                </div>
              )
            })}
          </div>
          </div>
        </div>
        <Comentario />
      </div >
      );
}
