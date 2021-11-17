import React from "react";
import Date from "../pages/nosotros/components/comentarios.json"

export default function comentarios() {

    return (
        <section className="comentarios mt-5 mb-5" id="testimonios">

            <div className="carousel slide" id="carouselExampleControls" data-ride="carousel">
                <div className="carousel-inner">
                    {Date.map(post => {
                        return (
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row text-center">
                                        <div className="col-sm-6 mb-3">
                                            <img className="img-fluid rounded-circle coment-img" src={`${process.env.PUBLIC_URL}/assets/${post.img}`} alt="testimonio"></img>
                                        </div>
                                        <div className="col-sm-6 m-auto">
                                            <p className="text-center">
                                                <img class="icons" src={`${process.env.PUBLIC_URL}/assets/icons${post.imgComa1}`} alt="comilla Izquierda"></img>Lorem
                                                {post.texto}
                                                <img class="icons" src={`${process.env.PUBLIC_URL}/assets/icons${post.imgComa2}`} alt="comilla Derecha"></img></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <a className="carousel-control-prev" data-slide="prev" href="#carouselExampleControls" role="button">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" data-slide="next" href="#carouselExampleControls" role="button">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>
            </div>
        </section >
    )
}