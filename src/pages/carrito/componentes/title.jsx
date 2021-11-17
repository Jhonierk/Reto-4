import React from "react";
import '../carrito.css';
import Date from "./carrito.json"

export default function title() {
    return (
      
        <section>
        {Date.map(post=>{
            return(
                <>
                <div className="container mt-5 mb-2">
                <div className="row ml-4">
                    <h2 className="map-title my-5">{post.titulo}</h2>
                </div>
            </div>
                </>
            )
        })}       
        </section>
    )
}