import React from 'react'
import Logo from "../../../assets/logo@2x.webp";
import Image1 from "../../../assets/foto1@2x.webp";
import Image2 from "../../../assets/carousel2.webp";
import Image3 from "../../../assets/carousel3.webp";

export default function carousel() {
    return (
        <div className="carousel slide" id="carouselExampleIndicators" data-ride="carousel">
            <ol className="carousel-indicators">
                <li className="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>
                <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
                <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={Image1} alt="..." /* style="object-fit: cover;height: 100vh;" *//>
                    <div className="carousel-caption d-none d-md-block">
                    <h5><img src={Logo} alt="logo" height="300px"/></h5>
                    <p className="carousel-subtitle">Sabores que exaltan tus sentidos</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Image2} alt="..." /* style="object-fit: cover;height: 100vh;" *//>
                    <div className ="carousel-caption d-none d-md-block">
                    <p className ="carousel-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Voluptatum ab illum
                    doloribus laudantium
                    tenetur aspernatur?</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Image3} alt="..." /* style="object-fit: cover;height: 100vh;" *//>
                    <div className="carousel-caption d-none d-md-block">
                    <p className="carousel-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quis ea, harum ex
                    quam dolores assumenda?</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" data-slide="prev" href="#carouselExampleIndicators" role="button">
                <span className="carousel-control-prev-icon" aria-hidden="true" /* style="height: 50px;width: 50px;" */></span>
                <span className="sr-only">Anterior</span>
            </a>
            <a className="carousel-control-next" data-slide="next" href="#carouselExampleIndicators" role="button">
                <span className="carousel-control-next-icon" aria-hidden="true" /* style="height: 50px;width: 50px;" */></span>
                <span className="sr-only">Siguiente</span>
            </a>
        </div>
    )
}
