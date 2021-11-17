import React, { useRef } from 'react'
import Title from "../../components/title";
import Description from "./components/description";
import Reserva from "./components/reserva";
import Card from "./components/card";
import $ from "jquery";
//import emailjs from 'emailjs-com';
//import Swal from 'sweetalert2';
import './servicios.css';
import Date from "./components/servicios.json"

export default function servicios() {



    return (
        <div>
            <Title title="Servicios" />
            <Description />
            <Reserva />
            <div className="container mt-5">
                <div className="row">
                    {Date.map(post => {
                        return (
                            <div className="col-sm-6 mb-1">
                                <Card
                                    img={`${process.env.PUBLIC_URL}/assets/${post.img}`}
                                    title={post.titulo}
                                    description={post.descripcion}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
}
