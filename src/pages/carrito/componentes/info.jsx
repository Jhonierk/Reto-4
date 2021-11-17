import React from "react";

import Date from "./carrito.json";

export default function info() {
    return (
        <section>
            {Date.map(post => {
                return (
                    <div class="container" id="plates">
                        <div class="row">
                            <div class="col-8">
                                <div class="row py-5">
                                    <div class="col-auto">
                                        <h2>No hay nada en el carrito</h2>
                                    </div>
                                </div>
                                <div class="row py-5 justify-content-center">
                                    <div class="col-auto">
                                        <a href="Menu" class="btn pedido-btn-add font-weight-bold">{post.btnContinue}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 d-flex justify-content-center align-items-start">
                                <div class="w-75 px-3 rounded pt-5 pb-5 card-valor">
                                    <div class="d-flex justify-content-between mb-4">
                                        <h4 class="value font-weight-bold">TOTAL</h4>
                                        <h4 class="value font-weight-bold" id="total">$0</h4>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <button class="btn pedido-btn-add font-weight-bold btn-block" id="btnReservar">RESERVAR AHORA</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })}


        </section>
    )
}