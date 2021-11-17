import React from 'react';
import Carousel from "./components/carousel";
import Propuesta from "./components/propuesta";
import Recomendados from "./components/recomendados";
import Comentarios from "../../components/comentarios";
import './home.css';

export default function home() {
    return (
        <div>
            <Carousel />
            <Propuesta />
            <Recomendados />
            <Comentarios />
        </div>
    )
}
