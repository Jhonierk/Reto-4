import React from 'react'
import $ from "jquery";
//import emailjs from 'emailjs-com';
//import Swal from 'sweetalert2';

import Date from "./servicios.json";

export default function card(props) {
  /*   $("#modalReserva").on("show.bs.modal", function (event) {
        const button = $(event.relatedTarget);
        const service = button.data("service");
        const modal = $(this);
        const formReservation = $("#formReserva");
        const btnCancel = $("#btnCancelar");



        modal.find(".modal-title").text("Reserva de " + service);

        $('input[name="assistants"]').on("keypress", function (event) {
            if (
                (event.which != 8 && event.which != 0 && event.which < 48) ||
                event.which > 57
            ) {
                event.preventDefault();
            }
        });



        formReservation.on("submit", function (event) {
            event.preventDefault();

            let formData = new FormData($(this)[0]);
            let data = {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                assistants: formData.get("assistants"),
                date: formData.get("date"),
                time: formData.get("time"),
                comments: formData.get("comments"),
                service: service,
            };

            emailjs.init("user_5EBnjcadQYKcG9dJU2dJ6");

            emailjs.send("gmail", "reserva-servicio", data).then(
                function (response) {
                    if (response.text === "OK") {
                        $("#modalReserva").modal("hide");
                        Swal.fire({
                            icon: "success",
                            title: "El correo se ha enviado de forma exitosa",
                            text: "Revise su bandeja de entrada",
                            showConfirmButton: false,
                            timer: 3000,
                        });
                    }
                    formReservation[0].reset();
                    console.log(
                        "SUCCESS. status=%d, text=%s",
                        response.status,
                        response.text
                    );
                },
                function (err) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Ocurrió un problema al enviar el correo",
                    });
                    console.log("FAILED. error=", err);
                }
            );
        });

        modal.on("hidden.bs.modal", function (event) {
            formReservation[0].reset();
            formReservation.off("submit");
        });
    }); */


    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.img} className="img-size" alt="Img card" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-color text-center">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <button type="button" class="btn contact-btn" data-toggle="modal"
                            data-target="#modalReserva" data-service="Celebración de cumpleaños" className="btn btn-color">Reserva en Línea</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
