import React from 'react'
import Error from "./assets/404.png";
import './index.css';

export default function error404() {
    return (
        <div>
            <div className="container mt-9">
                <div className="row">
                    <div className="col-sm">
                        <img src={Error} className="img-error mb-2" alt="404" />
                    </div>
                    <div className="col-sm m-auto">
                        <h1 className="text-color error-title font-weight-bold">Oooop...</h1>
                        <p>Lorem duis nostrud aute tempor irure. Adipisicing laborum sit enim culpa ullamco id. Enim eu labore Lorem eu ut ipsum esse. Veniam cupidatat nulla enim aute voluptate. Exercitation commodo fugiat aute dolore elit veniam id ut qui Lorem.</p>
                        <a href={"/Mapa"} className="btn btn-color">Mapa del sitio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
